// Dashboardlayout.tsx
import { Outlet } from "react-router";
import { Sidebar } from "../components/layout/sidebar";
import { Dashboardnavbar } from "../components/layout/dashboardnavbar";

export const Dashboardlayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen bg-[#161515] text-white">

      {/* Sidebar */}
      <aside className="col-span-2 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-5 xs:col-span-12 bg-black h-screen sticky top-0 z-30 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <Sidebar />
      </aside>

      {/* Main Content (Navbar + Page) */}
      <section className="col-span-10 xl:col-span-10 lg:col-span-9 md:col-span-8 sm:col-span-7 xs:col-span-12 grid grid-rows-[auto_1fr] h-screen">

        {/* Sticky Navbar */}
        <header className="sticky top-0 z-20">
          <Dashboardnavbar />
        </header>

        {/* Main Page Content */}
        <main className="overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <Outlet />
        </main>
      </section>
    </div>
  );
};
