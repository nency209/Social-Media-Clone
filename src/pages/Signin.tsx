
import { FcGoogle } from "react-icons/fc";
import { Navbar } from "../components/Navbar";

export const Signin = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-[#580A55] to-[#020202]">
      <div className="animate-fade-in-up bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">Sign In</h2>

        {/* Email/Password */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-900 transition"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        {/* Google Login */}
        <button
          onClick={() => alert("Google sign-in")}
          className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
    </>
  );
};


