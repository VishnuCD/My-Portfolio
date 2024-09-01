import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoVk } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 item-center'>
            <IoLogoVk size={45} fill='white'/>
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/vishnu-kk-/"><FaLinkedinIn size={20} fill='white'/></a> 
            <a href="https://github.com/VishnuCD"><IoLogoGithub size={20} fill='white'/></a>
        </div>
    </nav>
  )
}

export default Navbar