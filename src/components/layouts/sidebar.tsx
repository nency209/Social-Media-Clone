// import React from 'react'
import {Link} from 'react-router'
import { IoHomeOutline ,IoPersonCircleOutline, IoCreate,IoNotificationsOutline,IoSettingsOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
export const Sidebar = () => {
  return (
    <div className="col-span-1 bg-gradient-to-t from-[#3a0436] to-[#000000]  text-white h-screen ">
        <Link to="/" className="flex justify-center  items-center p-4 gap-2 text-xl font-bold">
        <img src="/social-clone.png" alt="logo" className="w-8 h-8 rounded-full" />
        <p>
          My<span className="text-[var(--Louge-color)] ">Social</span>
        </p>
      </Link>

      <div className="flex flex-col  gap-6 py-12 text-sm md:text-base xl:pl-18 md:pl-8 sm:pl-0">
        <Link to="/" className='flex items-center gap-2  text-lg'>
        <IoHomeOutline  size={24} /><span>Home</span>
        </Link>
        <Link to="/explore" className='flex items-center gap-2  text-lg'><IoPersonCircleOutline size={24}/><span>Profile</span></Link>
        <Link to="/features" className='flex items-center gap-2  text-lg'><IoCreate size={24}/><span>Create Post</span></Link>
        <Link to="/contact" className='flex items-center gap-2  text-lg'><FiMessageCircle size={24} /><span>Messages</span></Link>
         <Link to="/features" className='flex items-center gap-2  text-lg'><IoNotificationsOutline size={24}/><span>Notification</span></Link>
        <Link to="/contact" className='flex items-center gap-2  text-lg'><IoSettingsOutline size={24}/><span>Settings</span></Link>
      </div>



    </div>
  )
}


