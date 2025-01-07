import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
function SearchBar() {
  return (
 <div className='flex items-center space-x-2 '>
          {/* Search icon */}
          <IoSearchSharp className='absolute left-5 text-xl text-gray-600' />
          {/* Input field */}
          <input
            type='text'
            placeholder='Search in Drive '
            className='searchInput px-10 py-1.5 focus:bg-white w-[650px] h-[48px] bg-gray-100 rounded-full inputshadow text-gray-500'
          />
          {/* Filter icon */}
          <FaFilter className='absolute right-3 text-xl text-gray-600 ' />
        </div>
  )
}

export default SearchBar
