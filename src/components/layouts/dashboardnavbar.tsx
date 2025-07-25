import { IoNotificationsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export const Dashboardnavbar = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring focus:ring-purple-600"
        />
      </div>
      <div className="flex items-center gap-6">
    
        <button className="text-xl hover:text-[var(--Lough-color)] transition">
          <IoNotificationsOutline />
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border border-gray-500"
        />
        <button className="flex items-center gap-2 text-sm hover:text-red-500 transition">
          <FiLogOut />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};
