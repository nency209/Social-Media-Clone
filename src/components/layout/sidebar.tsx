import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/config";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoCreateOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

import { MdOutlineDashboardCustomize } from "react-icons/md";

export const Sidebar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: < MdOutlineDashboardCustomize/>, path: "/dashboard" },
    { label: "Home", icon: <IoHomeOutline />, path: "/dashboard/homefeed" },
    { label: "Create Post", icon: <IoCreateOutline />, path: "/dashboard/create-post" },
    { label: "Messages", icon: <IoChatbubbleEllipsesOutline />, path: "/dashboard/messages" },
    { label: "Notifications", icon: <IoNotificationsOutline />, path: "/dashboard/notifications" },
    { label: "Settings", icon: <IoSettingsOutline />, path: "/dashboard/settings" },
    {
      label: "Profile",
      icon: <IoPersonOutline />,
      onClick: () => {
        if (user?.uid) navigate(`/dashboard/profile/${user.uid}`);
      },
    },
  ];

  return (
    <nav className="w-full h-full px-4 py-6 bg-gradient-to-t from-[#3a0436] to-[#000000]">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <img src="/social-clone.png" alt="logo" className="w-8 h-8 rounded-full" />
        <h1 className="text-xl font-bold">
          My<span className="text-[var(--Louge-color)]">Social</span>
        </h1>
      </Link>

      <ul className="space-y-6 text-sm md:text-base">
        {menuItems.map(({ label, icon, path, onClick }) => (
          <li key={label}>
            {path ? (
              <Link
                to={path}
                className="flex items-center gap-3 hover:text-[var(--Louge-color)] transition"
              >
                {icon}
                <span>{label}</span>
              </Link>
            ) : (
              <button
                onClick={onClick}
                className="flex items-center gap-3 hover:text-[var(--Louge-color)] transition w-full text-left"
              >
                {icon}
                <span>{label}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
