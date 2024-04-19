import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const nav = [
    {
        id: "Menu",
        name: "Menu"
    },
    {
        id: "FAQ",
        name: "FAQ"
    },
    {
        id: "About",
        name: "About"
    },
    {
        id: "Gift Cards",
        name: "Gift Cards"
    },
    {
        id: "Conatct",
        name: "Conatct"
    },
    {
        id: "Location",
        name: "Location"
    }
]

function Navbar() {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div className='flex justify-center items-center h-[100px] relative'>

            <div className=' w-5/6 mx-auto flex justify-center items-center gap-16 '>

                {/* menu button */}
                <div onClick={() => setIsToggle(!isToggle)} className=' h-fit  text-4xl lg:hidden mr-8'>
                    {isToggle ? <AiOutlineClose /> :  <CiMenuBurger />}
                </div>



                {/* logo */}
                <div className=' min-w-44 '>
                    <img className=" h-[75px]" src="../assests/Ketodelia_Logo_1b.avif" alt="logo" />
                </div>
                {/* menu bar */}
                <div className='w-1/2 hidden lg:block'>
                    <ul className='flex justify-center items-center h-full gap-3 text-[#3d081bbf] text-lg'>
                        {nav.map((item) => {
                            return (
                                <li key={item.id} >
                                    <a href="" className='hover: text-black-300 hover:underline hover:font-semibold'>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* contact bar */}
                <div className='flex w-1/3 justify-center items-center text-[#3d081bbf] gap-6 text-2xl font-semibold' >
                    <div className='underline hidden md:block'>
                        <a href="">(416) 623-0317</a>
                    </div>
                    <div className=' hover:scale-125 duration-200'>
                        <a href=""><CiSearch /></a>
                    </div>
                    <div className=' hover:scale-125 duration-200'>
                        <a href=""><CiUser /></a>
                    </div>
                    <div className=' hover:scale-125 duration-200'>
                        <a href=""><LiaShoppingBagSolid /></a>
                    </div>
                </div>
            </div>
            {/* responsive menu-bar */}

            {


                <div className={`text-[#3d081bbf] text-xl absolute top-[100px] lg:hidden left-0 duaration-400  w-1/2 h-[580px] bg-white border-r-8 border-[#3d081bbf] overflow-y-scroll duration-700 ease-linear 
                  ${isToggle ? 'left-0' : '-left-[100%]'}`}>

                    <ul className=' '>
                        {nav.map((item) => {
                            return (
                                <li key={item.id} className='px-5 ml-4 py-5 font-semibold hover:bg-slate-200'>
                                    <a href="" >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className=' flex items-center px-4 py-5 ml-4 font-semibold mt-8'>
                        <a href=""><CiUser className='text-3xl hover:scale-110 duration-200' /></a>
                        <p className='ml-2 cursor-pointer'>Log in</p>
                    </div>

                    <div className='flex px-4 py-5 ml-4 font-semibold mt-8 gap-8'>
                        <AiFillFacebook className='text-3xl hover:scale-110 duration-200' />
                        <FaPinterest className='text-3xl hover:scale-110 duration-200' />
                        <FaInstagram className='text-3xl hover:scale-110 duration-200' />
                        <FaTiktok className='text-3xl hover:scale-110 duration-200' />
                        <FaYoutube className='text-3xl hover:scale-110 duration-200' />
                    </div>
                </div>
                
            }
        </div>

    )
}

export default Navbar

