import React from 'react'
import Logo from "../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <div className="bg-white-400 text-black p-4 h-20 flex justify-between items-center">

  <div className='flex items-center'>
    <img src = {Logo} alt= "" className="max-w-40 " />
  </div>

  <div className=' h-19 w-250 flex justify-end'>
    <div className=' h-19 w-250 flex justify-between items-center'>

      <nav>
        <ul className=' flex gap-8 items-center w-180'>
            <li className='flex gap-2 items-center text-blue-400 text text-40 font-serif'>
                Home
                <IoIosArrowDown />
            </li>

            <li className='flex gap-2 items-center text text-40 font-serif'>
                About us
                <IoIosArrowDown />
            </li>

            <li className='flex gap-2 items-center text text-40 font-serif'>
                Services
                <IoIosArrowDown />
            </li>

            <li className='flex gap-2 items-center text text-40 font-serif'>
                Projects
            <IoIosArrowDown />
            </li>

            <li className='flex gap-2 items-center text text-40 font-serif'>
                Blog
                <IoIosArrowDown />
            </li>

            <li className='flex gap-2 items-center text text-40 font-serif'>
                Contact
                <IoIosArrowDown />
            </li>

            <li className='  flex gap-2 items-center'>
            <IoIosSearch size={25} fill='black'/>
            </li>
        </ul>
      </nav>

      <div className=' h-19 w-60 flex justify-start items-center'>
    <div className='h-12 w-55 bg-blue-500 rounded-md flex items-center justify-center outline-none'>

       <ul>
        <li className='flex gap-2 items-center  text-10 font-serif text-white'>
            APPOINTMENTS
            <FaPlus  size={25} fill='white'/>
        </li>
       </ul>
    </div>
  </div>
    </div>
  </div>
  {/* <div className='bg-green-700 h-19 w-70 flex justify-start items-center'>
    <div className='h-15 w-50 bg-blue-400 rounded-s'></div>
  </div> */}
  
    </div>
    </>
  )
}

export default Header
