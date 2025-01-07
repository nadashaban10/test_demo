import React from 'react';
import Header from "../components/Header";
import { IoHome, IoCloud, IoShareSocial, IoTime, IoStar, IoCloudDownload, IoTrashBin } from 'react-icons/io5'; 
import { IoAdd } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { SlInfo } from "react-icons/sl";
import checkImage from "../assests/check.png"
import calenderImage from "../assests/google-calendar.png"
import addimage from "../assests/sticky-notes.png"
import searchimage from "../assests/job-search.png"

import StripedDataGrid from "../components/Datatable";

function Home() {

  const [showMenu, setShowMenu] = React.useState(false);
  const handleShowmenu = () => {
    setShowMenu(!showMenu);
  }

  const [showTab, setShowTab] = React.useState(false);
  const handleShowTab = () => {
    setShowTab(!showTab);
  }
  return (
    <>
      <Header />
      <div className="home flex w-full h-screen mt-4">
        {/* Left Section */}
       <div className="leftSection flex-col items-start py-1 px-2 absolute top-[25px] right-3 ">
        <button  onClick={handleShowmenu}
        className="flex items-center justify-center hover:bg-gray-100 hover:bg-opacity-60 rounded-full sm:hidden ">
        <IoIosMenu className='text-3xl text-gray-600' />
        </button>
        </div>
        <div className={`leftSection bg-gray-50 sm:w-[20%] w-[60%] h-full flex-col items-start  py-1 px-2 ${showMenu ? 'block absolute z-50' : 'hidden sm:block'} transition-all duration-300`}>
          <button className="flex items-center justify-center w-[110px] h-[60px] bg-white rounded-2xl hover:bg-gray-600 btnshadow">
            <IoAdd className="text-2xl mr-2" />
            New
          </button>
          <div className="menu text-gray-900 pl-1 w-full">
            <ul className="flex flex-col space-y-2 my-5 text-md">
              <li className="flex items-center bg-blue-200 rounded-full">
                <IoHome className="mx-3" />
                <button>Home</button>
              </li>
              <li className="flex items-center">
                <IoCloud className="mx-3" />
                <button>My Drive</button>
              </li>
              <li className="flex items-center">
                <IoCloud className="mx-3" />
                <button>Computer</button>
              </li>
            </ul>
            <ul className="flex flex-col space-y-2 mb-5">
              <li className="flex items-center">
                <IoShareSocial className="mx-3" />
                <button>Shared with me</button>
              </li>
              <li className="flex items-center">
                <IoTime className="mx-3" />
                <button>Recent</button>
              </li>
              <li className="flex items-center">
                <IoStar className="mx-3" />
                <button>Starred</button>
              </li>
            </ul>
            <ul className="flex flex-col space-y-2 mb-3">
              <li className="flex items-center">
                <IoCloudDownload className="mx-3" />
                <button>Backups</button>
              </li>
              <li className="flex items-center">
                <IoCloudDownload className="mx-3" />
                <button>Spam</button>
              </li>
              <li className="flex items-center">
                <IoTrashBin className="mx-3" />
                <button>Trash</button>
              </li>
            </ul>
          </div>
          <div className=" justify-start items-center flex-row space-x-3 ml-3 hidden sm:flex ">
            <IoIosCloudOutline className="text-xl" />
            <span className="text-[15px]">Storage (75% used)</span>
          </div>
          <div className="h-[3px] w-[100px] bg-blue-600 mt-1 relative rounded-full ml-3 hidden sm:flex  "></div>
          <div className="bg-white h-[3px] w-[4px] hidden sm:flex  absolute bottom-[95px] left-[125px] rounded-full"></div>
          <div className="bg-gray-300 h-[3px] w-[40px] hidden sm:flex  absolute sm:bottom-[95px] sm:left-[128px] bottom-[282px] left-[126px] rounded-full"></div>
          <span className="absolute sm:bottom-[64px] hidden sm:flex  left-[30px] text-gray-800 text-[14px]">
            15 GB of 20 GB used
          </span>
          <button className=" hidden sm:flex  items-center px-3 justify-center w-[160px] h-[35px] rounded-full hover:bg-gray-100 absolute sm:bottom-[20px] bottom-[180px] left-[20px] sm:left-[25px] border border-blue-600 text-[15px]">
            Get more storage
          </button>
        </div>

        {/* Center Section */}
        <div className="centerSection bg-white sm:w-[78%] w-[100%] mt-1 h-[520px] sm:ml-2 ml-0 rounded-t-2xl ">
          <h1 className='text-start text-[28px] p-4 text-gray-600'>Welcome to Drive</h1>
          <SlInfo 
             onClick={handleShowTab}
          className='text-gray-600 sm:text-4xl mt-[-8px] text-3xl absolute sm:top-[100px] sm:right-[80px] top-[110px] right-[20px] text-[45px] cursor-pointer p-2 hover:bg-gray-100 hover:bg-opacity-[60%] hover:rounded-full ' /> 
          <StripedDataGrid />
        </div>
{/* Right Section */}
<div className="rightSection mt-1 w-[5%] h-full hidden sm:flex  items-start justify-between flex-col relative">
  <div className="flex flex-col items-center space-y-5 ml-3">
    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-300 hover:bg-opacity-60">
      <img src={calenderImage} alt="Calendar" className="w-[24px] h-[24px]" />
    </button>
    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-300 hover:bg-opacity-60">
      <img src={checkImage} alt="Download" className="w-[24px] h-[24px]" />
    </button>
    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-300 hover:bg-opacity-60">
      <img src={addimage} alt="Add" className="w-[24px] h-[24px]" />
    </button>
  </div>
  <div className="flex flex-col items-center absolute bottom-[340px] right-[10px] ml-2">
    <div className='h-[1px] w-[30px] bg-gray-300 absolute bottom-[60px]'> </div>
    <BsPlusLg className='text-black font-extrabold text-3xl transition duration-300 ease-in-out hover:bg-gray-300 hover:opacity-80 p-1 rounded-full' />
  </div>
</div>
      </div>
      <div
        className={`w-[350px] h-[500px] bg-white flex justify-center items-center flex-col fixed sm:top-[78px] sm:right-[66px] top-[100px] right-[20px] z-20 rounded-xl transition-transform duration-300 ${
          showTab ? "translate-x-0" : "translate-x-[420px]"
        } shadow-lg`}
      >
        <button
          onClick={handleShowTab}
          className="w-[35px] h-[35px] rounded-full bg-gray-50 flex items-end justify-end p-2 absolute top-2 right-2 hover:bg-gray-200 hover:bg-opacity-60"
        >
          <MdClose className="text-xl text-gray-800" />
        </button>
        <img src={searchimage} alt="Search" className="w-[150px] h-[150px] mt-[-90px] ml-[60px]" />
        <h3 className="mt-[50px] text-gray-700">Select an item to see details</h3>
      </div>
    </>
  );
}

export default Home;
