import React from 'react'
import { IoHeart } from "react-icons/io5";
import { GiBeachBag } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <header className='bg-white'>
      <nav className='max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center'>
        {/* logo */}
        <a href='#' className='text-3xl font-bold'>Taza<span className='text-green-500 '>Roots</span></a>
        <ul className='flex items-center gap-x-15'>
          <li><a href='#' className='font-semibold tracking-wider text-green-500'>Home</a></li>
          <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-green-500'>About</a></li>
          <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-green-500'>Process</a></li>
          <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-green-500'>Contact Us</a></li>
        </ul>
        {/* nav action */}
        <div className='flex items-center gap-x-5'>
          {/* input field */}
          <div className='flex  p-1 border-2 border-green-500 rounded-full'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-dark-green-600 to-green-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
              <IoIosSearch />
            </button>
          </div>
          <a href='#' className='text-zinc-800 text-2xl'>
            <IoHeart />
            </a>
          <a href='#' className='text-zinc-800 text-2xl'>
            <GiBeachBag />

          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
