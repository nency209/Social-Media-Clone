// import React from 'react'
import { GiPostStamp } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { EngagementBarChart } from "../../components/charts/chart";
export const Dashboard = () => {
  return (
    <div className="text-white ">
      <p className="text-xl font-bold">Welcome Back,{}!</p>
      <p className="text-xl font-bold">Here's what's happening today.</p>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 text-white font-semibold sm:grid-cols-2 xl:mx-44 gap-4 mt-8 mx-auto">
        <div className="bg-gradient-to-t from-[#3a0436] to-[#000000] p-6 rounded-lg text-white flex flex-col items-center justify-center gap-3 shadow-md">
          <button className="bg-white text-[var(--Louge-color)] p-3 rounded-full"><GiPostStamp size={28} /></button>
          <p className="text-lg font-medium text-center">Post Created</p>
          <p className="text-3xl font-bold text-center">32</p>
        </div>

         <div className="bg-gradient-to-t from-[#3a0436] to-[#000000] p-6 rounded-lg text-white flex flex-col items-center justify-center gap-3 shadow-md">
          <button className="bg-white text-[var(--Louge-color)] p-3 rounded-full"><FaHeart size={28} /></button>
          <p className="text-lg font-medium text-center">Total Likes</p>
          <p className="text-3xl font-bold text-center">540</p>
        </div>
         <div className="bg-gradient-to-t from-[#3a0436] to-[#000000] p-6 rounded-lg text-white flex flex-col items-center justify-center gap-3 shadow-md">
          <button className="bg-white text-[var(--Louge-color)] p-3 rounded-full"><FaMessage size={28} /></button>
          <p className="text-lg font-medium text-center">Comments</p>
          <p className="text-3xl font-bold text-center">92</p>
        </div>
         <div className="bg-gradient-to-t from-[#3a0436] to-[#000000] p-6 rounded-lg text-white flex flex-col items-center justify-center gap-3 shadow-md">
          <button className="bg-white text-[var(--Louge-color)] p-3 rounded-full"><IoPerson  size={28} /></button>
          <p className="text-lg font-medium text-center">Followers</p>
          <p className="text-3xl font-bold text-center">1,2k</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:mx-44 gap-4 pt-4 mx-auto">
<div className=" rounded-lg">
      <EngagementBarChart/>
     
    </div>
    <div className="bg-white rounded-lg">

    </div>
      </div>
    </div>
  );
};
