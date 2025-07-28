/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../Features/notification/notificationsThunk";
import type { AppDispatch, RootState } from "../../app/store";
import { auth, db } from "../../services/config";
import { doc, getDoc } from "firebase/firestore";

export const Notifications = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch<AppDispatch>();
  const notifications = useSelector((state: RootState) => state.notifications.data);
  const loading = useSelector((state: RootState) => state.notifications.loading);
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});

  // Fetch notifications
  useEffect(() => {
    if (user) {
      dispatch(fetchNotifications(user.uid));
    }
  }, [user, dispatch]);

  // Fetch usernames for each fromUserId
 useEffect(() => {
  const fetchUsernames = async () => {
    const newUsernames: { [key: string]: string } = {};
    const alreadyFetched = new Set(Object.keys(usernames)); // track existing

    for (const notif of notifications) {
      const fromId = notif.fromUserId;
      if (!alreadyFetched.has(fromId)) {
        const userRef = doc(db, "users", fromId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          newUsernames[fromId] = userSnap.data().username || "Unknown";
        } else {
          newUsernames[fromId] = "Unknown";
        }
      }
    }

    // Only update if there are new usernames
    if (Object.keys(newUsernames).length > 0) {
      setUsernames((prev) => ({ ...prev, ...newUsernames }));
    }
  };

  if (notifications.length > 0) {
    fetchUsernames();
  }
}, [notifications]); 


  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">🔔 Notifications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif: any) => (
            <li key={notif.id} className="bg-purple-900 p-4 rounded-xl shadow-md">
              <p>
                <strong>@{usernames[notif.fromUserId] || "Loading..."}</strong> {notif.message}
              </p>
              <span className="text-sm text-gray-400">
                {notif.timestamp?.seconds
                  ? new Date(notif.timestamp.seconds * 1000).toLocaleString()
                  : "Unknown time"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
