// /src/layouts/MainLayout.tsx

import { Outlet } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";


export const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen bg-black">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};
