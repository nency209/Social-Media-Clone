// src/components/layout/Navbar.tsx
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="bg-black text-white flex flex-wrap items-center justify-between lg:py-3 lg:px-6 px-2 py-3">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <img src="/social-clone.png" alt="logo" className="w-8 h-8 rounded-full" />
        <p>
          My<span className="text-purple-400">Social</span>
        </p>
      </Link>

      <div className="flex space-x-6 text-sm md:text-base">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex gap-4 text-sm md:text-base">
        <Link to="/login" className="py-1 px-3 border-r border-white">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-purple-600 hover:bg-purple-500 text-white py-1 px-4 rounded-full"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
