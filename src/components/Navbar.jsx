import React from 'react'
import { GoHome } from "react-icons/go";
import { FaRegNewspaper,FaRegUser,FaRegListAlt,FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <div className='min-w-2'>
        <nav className="bg-white flex flex-col flex-wrap justify-between items-end h-screen w-16 px-4 text-white">
            <div className="flex-col justify-between items-center mb-4">
              <div className="font-bold text-xl"><img src={logo} className='w-8 mt-5' alt="Company Logo" /></div>
              <div className='font-bold mt-5 mb-16 ml-1'>          
               <a href="#" className="text-gray-400 "><FaSearch size={22}/></a>        
              </div>
            
            <ul className="space-y-4">
                  <li>
                  <a href="#" ><GoHome className=" text-gray-400 hover:bg-customPurple hover:text-white rounded-lg transition duration-300 ease-in-out p-1.5 " size={40}/></a>       
                  </li>
                  <li>          
                  <a href="#" ><FaRegNewspaper className=" text-gray-400 hover:bg-customPurple hover:text-white rounded-lg transition duration-300 ease-in-out p-1.5 " size={38} /></a>        
                  </li>
                  <li>
                  <a href="#" ><FaRegListAlt className=" text-gray-400 hover:bg-customPurple hover:text-white rounded-lg transition duration-300 ease-in-out p-2 " size={38} />
                  </a>
                   </li>      
                   <li>  
                  <a href="#" ><FaRegUser className=" text-gray-400 hover:bg-customPurple hover:text-white rounded-lg transition duration-300 ease-in-out p-2 " size={38} /></a>
                  </li>
                  
                 
            </ul>
            </div>
            
            <ul className='flex flex-col justify-between -mb-36 gap-5'>
              <li>
                  <a href="#" className="text-gray-400 inline-flex flex-row-reverse ">
                  <div class="w-2 h-2 flex items-center justify-center rounded-full bg-sky-400">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V12M12 12V5L19 12L12 19ZM12 12H5L12 12Z"></path>
                  </div>
                  <GoBell size={27}/></a>
              </li> 
              <li>
                  <a href="#" className="text-gray-400 "><IoLogOutOutline size={27}/></a>
              </li>
            </ul>
        </nav>
     </div>
  )
}

export default Navbar
