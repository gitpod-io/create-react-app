import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaHackerrank, FaCode} from 'react-icons/fa';
import {BsArrowClockwise} from 'react-icons/bs';
import {MdComputer} from 'react-icons/md';
import {AiOutlineProject} from 'react-icons/ai';
import { Link } from "react-scroll";

//Potential logo import declaration

const NavigationBar = () => {
    const [navi, setNavi] = useState(false)
    const hClick = () => setNavi(!navi)
    
    return(
        <div className ='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            {/* Potential Logo */}
        </div>
        {/* Navigation Menu */}
            <ul className='hidden md:flex'>
            <li>
            <Link className="group hover:text-[#2a7a80] duration-300" to="base" smooth={true} duration={500}>
            <BsArrowClockwise className='ml-2 group-hover:rotate-180 duration-500' size={25}/>
            </Link>
            </li>
            <li>
            <Link className="group hover:text-[#e9da50] duration-300" to="experience" smooth={true} duration={500}>
            <MdComputer className='ml-2 group-hover:rotate-180 duration-500' size={25}/>
            </Link>
            </li>
            <li>
            <Link className="group hover:text-[#b13131] duration-300" to="projects" smooth={true} duration={500}>
            <AiOutlineProject className='ml-2 group-hover:rotate-180 duration-500' size={25}/>
            </Link>
            </li>
                <li className="group hover:text-[#0072b1] duration-300">
                    <a className="flex justify-between items-center w-full"
                    href="https://www.linkedin.com/in/v%C3%ADctor-conde-85538222b">LinkedIn 
                    <FaLinkedin className='ml-2 group-hover:rotate-180 duration-500' size={25} /></a>
                    </li>
                <li className="group hover:text-[#333333] duration-300">
                    <a className="flex justify-between items-center w-full"
                    href="https://github.com/ProfesorV">
                    Github <FaGithub className='ml-2 group-hover:rotate-180 duration-500' size={25}/>
                    </a>
                </li>
                <li className="group hover:text-[#FC6A03] duration-300">
                    <a className="flex justify-between items-center w-full"
                    href="https://leetcode.com/ProfesorV/">
                    LeetCode <FaCode className='ml-2 group-hover:rotate-180 duration-500' size={25}/>
                    </a>
                </li>
                <li className="group hover:text-[#00FF00] duration-300">
                    <a a className="flex justify-between items-center w-full"
                    href="https://www.hackerrank.com/xavierfisico">
                    Hackerrank <FaHackerrank className='ml-2 group-hover:rotate-180 duration-500' size={25}/>
                </a>
                </li>
            </ul>

        {/* Icon for Menu*/}
        <div onClick={hClick} className='md:hidden z-10'>
            {!navi ? <FaBars className='hover:rotate-180 duration-500 hover:fill-red-600'/> : <FaTimes className='hover:rotate-180 duration-500 hover:fill-red-600'/>}
        </div>
        {/* Mobile Navigation Menu */}
        <ul className={!navi ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-left'}>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#2a7a80]'><Link onClick={hClick} className='flex justify-between items-center w-full text-white' to="base" smooth={true} duration={500}>Top<BsArrowClockwise className='ml-2 group-hover:rotate-180 duration-500' size={25}/></Link></li>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#e9da50]'><Link onClick={hClick} className='flex justify-between items-center w-full text-white' to="experience" smooth={true} duration={500}>Experience<MdComputer className='ml-2 group-hover:rotate-180 duration-500' size={25}/></Link></li>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#b13131]'><Link onClick={hClick} className='flex justify-between items-center w-full text-white' to="projects" smooth={true} duration={500}>Projects<AiOutlineProject className='ml-2 group-hover:rotate-180 duration-500' size={25}/></Link></li>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0072b1]'><a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/v%C3%ADctor-conde-85538222b">LinkedIn <FaLinkedin size={25}/></a></li>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'><a className='flex justify-between items-center w-full text-white' href="https://github.com/ProfesorV">Github <FaGithub size={25}/></a></li>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#FC6A03]'><a className='flex justify-between items-center w-full text-white' href="https://leetcode.com/ProfesorV/">LeetCode <FaCode size={25}/></a></li>
        <li className='py-4 text 6xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#00FF00]'><a className='flex justify-between items-center w-full text-white' href="https://www.hackerrank.com/xavierfisico">Hackerrank <FaHackerrank size={25}/></a></li>
        </ul>
        </div>
    )
}


export default NavigationBar