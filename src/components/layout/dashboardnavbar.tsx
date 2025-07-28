import { IoNotificationsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

export const Dashboardnavbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [username, setusername] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const fetchusername = async () => {
      if (user) {
        const docref = doc(db, "users", user.uid);
        const snapshot = await getDoc(docref);

        if (snapshot.exists()) {
          setusername(snapshot.data() as { username: string });
        }
      }
    };

    fetchusername();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // or home page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="w-full h-16 bg-black  px-6 grid grid-cols-2 items-center text-white shadow-md z-50">
      <div className="hidden md:block"></div>
      <div className="justify-self-end grid grid-flow-col gap-4 items-center">
        <button className="relative group">
          <IoNotificationsOutline className="text-2xl text-purple-300 hover:text-[var(--Louge-color)] transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative group">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-[var(--Louge-color)]  cursor-pointer"
          />
          <div className="absolute right-0 top-12 bg-[#1c1b1b] text-sm rounded-md shadow-lg border border-[var(--Louge-color)]  hidden group-hover:flex flex-col min-w-[150px] z-40"></div>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <span className="text-sm text-white  hidden md:inline">
                @{username?.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-400 px-3 py-1 rounded hover:bg-red-700 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[var(--Louge-color)]  px-3 py-1 rounded hover:bg-purple-700 text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
