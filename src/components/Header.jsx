import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function Header() {
    return (
        <div className='bg-[#512b55] text-white text-xs md:text-base flex py-2 items-center justify-center font-medium'>
            <div >
                Order now and enjoy instant delivery for orders over $25 
            </div>
            <div className='ml-2 hover:scale-x-125 duration-200 cursor-pointer'><FaArrowRight /></div> 
        </div>
    )
}

export default Header