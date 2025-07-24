import { Navbar } from "../components/Navbar";
import {Link} from 'react-router'


export const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-[#580A55] to-[#020202] flex items-center justify-center px-4">
      <div className="bg-black bg-opacity-10 backdrop-blur-md text-white rounded-xl p-8 w-full max-w-sm shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome to <span className="text-blue-400">UniLounge</span>
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 rounded bg-white bg-opacity-10 text-black placeholder-white outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 rounded bg-white bg-opacity-10 text-black placeholder-white outline-none"
            />
          </div>

          <div className="flex justify-end text-sm">
            <a href="#" className="text-blue-300 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to={'/signin'} className="text-blue-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};


