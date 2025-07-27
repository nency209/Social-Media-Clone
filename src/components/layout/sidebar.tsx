import {Link} from 'react-router'
import {
  IoHomeOutline,
  IoPersonOutline,
  IoCreateOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoChatbubbleEllipsesOutline,
  IoSearchOutline
} from "react-icons/io5";

export const Sidebar = () => {
  return (
    <nav className="w-full h-full px-4 py-6 bg-gradient-to-t from-[#3a0436] to-[#000000]">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <img src="/social-clone.png" alt="logo" className="w-8 h-8 rounded-full" />
        <h1 className="text-xl font-bold">
          My<span className="text-[var(--Louge-color)]">Social</span>
        </h1>
      </Link>

      <ul className="space-y-6 text-sm md:text-base">
        {[
{ label: "Home", icon: <IoHomeOutline />, path: "/dashboard" },
  { label: "Explore", icon: <IoSearchOutline />, path: "/dashboard/homefeed" },
  { label: "Create Post", icon: <IoCreateOutline />, path: "/dashboard/create-post" },
  { label: "Messages", icon: <IoChatbubbleEllipsesOutline />, path: "/dashboard/messages" },
  { label: "Notifications", icon: <IoNotificationsOutline />, path: "/dashboard/notifications" },
  { label: "Profile", icon: <IoPersonOutline />, path: "/dashboard/profile" },
  { label: "Settings", icon: <IoSettingsOutline />, path: "/dashboard/settings" },
        ].map(({ label, icon, path }) => (
          <li key={label}>
            <Link to={path} className="flex items-center gap-3 hover:text-purple-400 transition">
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
