import React from 'react';
import logo from '../assests/google-drive-logo.png';
import { TiAdjustBrightness } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BiSolidGrid } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import SearchBar from './SearchBar';


import userimage from "../assests/avatar.png"

function Header() {
  return (
    <div className='header flex justify-between items-center w-full h-full sm:mt-0 mt-5'>
      {/* Left Section */}
      <div className='leftSection flex items-center space-x-2'>
        <img
          width={40}
          height={40}
          src={logo}
          alt='logo'
          className='logo sm:ml-[20px] ml-[5px]'
        />
        <span className=' text-gray-500 text-2xl'>Drive</span>
      </div>
    <div className='centerSection relative sm:hidden block'>
      <IoSearchSharp className='absolute right-[55px] text-3xl top-[-20px] text-gray-600' />
      </div>
      {/* Center Section */}
      <div className='centerSection relative sm:flex hidden'>
       <SearchBar />
      </div>

      {/* Right Section */}
      <div className='rightSection  items-center space-x-3 text-gray-700  hidden sm:flex'>
        <button className='iconBtn p-2 rounded-full hover:bg-gray-300 hover:bg-opacity-[60%]'>
          <TiAdjustBrightness className='text-[23px] font-bold' />
        </button>
        <button className='iconBtn p-2 rounded-full hover:bg-gray-300 hover:bg-opacity-[60%]'>
          <IoSettingsOutline className='text-[23px]' />
        </button>
        <button className='iconBtn p-2 rounded-full hover:bg-gray-300 hover:bg-opacity-[60%]'>
          <FaRegCircleQuestion className='text-[23px]' />
        </button>
        <button className='iconBtn p-2 rounded-full hover:bg-gray-300 hover:bg-opacity-[60%] '>
          <BiSolidGrid className='text-[23px]' />
        </button>
        <button className='iconBtn  rounded-full hover:bg-gray-300 hover:bg-opacity-[60%] p-2'>
          <img src={userimage} alt='user' className='w-[28px] h-[28px] rounded-full mt-[2px] ' />
        </button>
      </div>
    </div>
  );
}

export default Header;
