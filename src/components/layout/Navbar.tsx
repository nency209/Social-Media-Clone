// src/components/layout/Navbar.tsx
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="bg-black text-white flex flex-wrap items-center justify-between lg:py-3 lg:px-6 px-2 py-3">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <img src="/public/ChatGPT Image Jul 30, 2025, 10_46_48 AM.png" alt="logo" className="w-8 h-8  rounded-full" />
        <p>
         Uni<span className="text-[var(--Louge-color)] ">Lounge</span>
        </p>
      </Link>

      <div className="flex space-x-6 text-sm md:text-base">
        <a href="/">Home</a>
        <a href="#explore">Explore</a>
        <a href ="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="flex gap-4 text-sm md:text-base">
        <Link to="/login" className="py-1 px-3 border-r border-white">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-[var(--Louge-color)]  hover:bg-purple-500 text-white py-1 px-4 rounded-full"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
