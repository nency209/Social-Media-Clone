import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router"; // make sure you use react-router-dom not just "react-router"
import { useState } from "react";

export const Dashboardnavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="w-full h-16 bg-black border-b border-purple-800 px-6 grid grid-cols-3 items-center text-white shadow-md z-50">

      {/* Left Placeholder for Logo or Menu */}
      <div className="hidden md:block"></div>

      {/* Center: Search */}
      <div className="relative justify-self-center w-full max-w-md hidden md:block">
        <input
          type="text"
          placeholder="Search UniLounge..."
          className={`bg-[#1c1b1b] text-sm text-white px-4 py-2 pl-10 rounded-full border border-purple-700 w-full transition-all duration-300 ease-in-out focus:outline-none ${
            searchOpen ? "opacity-100" : "opacity-0 w-0 hidden"
          }`}
        />
        <IoSearchOutline
          className={`absolute text-xl text-purple-400 cursor-pointer transition-transform ${
            searchOpen ? "scale-100" : "scale-110"
          }`}
          onClick={() => setSearchOpen(!searchOpen)}
        />
      </div>

      {/* Right: Notifications & Avatar */}
      <div className="justify-self-end grid grid-flow-col gap-4 items-center">
        <button className="relative group">
          <IoNotificationsOutline className="text-2xl text-purple-300 hover:text-purple-500 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative group">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-purple-500 cursor-pointer"
          />
          <div className="absolute right-0 top-12 bg-[#1c1b1b] text-sm rounded-md shadow-lg border border-purple-700 hidden group-hover:flex flex-col min-w-[150px] z-40">
            <Link to="/profile" className="px-4 py-2 hover:bg-purple-800">Profile</Link>
            <Link to="/settings" className="px-4 py-2 hover:bg-purple-800">Settings</Link>
            <button className="px-4 py-2 text-left hover:bg-purple-800">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
