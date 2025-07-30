
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
      
        <div className="relative group">
          <img
            src="/public/user.png"
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-[var(--Louge-color)]  cursor-pointer"
          />
          
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
