import { Outlet } from "react-router";
import { Sidebar } from "../components/layouts/sidebar";
import { Dashboardnavbar } from "../components/layouts/dashboardnavbar";

export const Dashboardlayout = () => {
  return (
    <div className="grid grid-cols-7 h-screen">
     
        <Sidebar />
      <div className="col-span-6 flex flex-col h-full">
        <Dashboardnavbar />
        <main className="flex-1 overflow-y-auto p-4 bg-[#161515]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
