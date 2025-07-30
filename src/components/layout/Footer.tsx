import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#3a0436] to-[#000000] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">UniLounge</h3>
          <p className="text-sm">
            A modern space to connect, share, and grow with your community. Built for students, creators, and innovators.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to={''} className="hover:underline">Home</Link></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/roadmap" className="hover:underline">Roadmap</a></li>
            <li><a href="/help" className="hover:underline">Help</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: <a href="mailto:support@unilounge.com" className="hover:underline">support@Lounge.com</a></li>
            <li>Instagram: <a href="#" className="hover:underline">@Lounge</a></li>
            <li>Twitter: <a href="#" className="hover:underline">@Lounge</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center py-4 text-xs border-t border-gray-600">
        &copy; {new Date().getFullYear()} Lounge. All rights reserved.
      </div>
    </footer>
  );
};
