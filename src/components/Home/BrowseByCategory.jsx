import React from 'react'
import Img from './shared/Img'
import { Link } from 'react-router-dom'
import { PiArrowRightBold } from "react-icons/pi";

function BrowseByCategory() {
    return (
        <div className='bg-[#f5eff5] py-6 mt-2'>
            <h1 className='w-5/6 mx-auto my-6 text-[#3D081B] text-4xl font-semibold'>Browse By Category</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 w-5/6 mx-auto gap-4'>
                <Link className='group'>
                    <div className="border-[#3D0818] border-2 border-b-8 rounded-xl  w-full h-fit overflow-hidden">
                        <Img url={"../assests/HomeImg/browseByCategoryImg/Img1.webp"} />
                    </div>
                    <h3 className='text-[#3D081B] text-xl  flex items-center font-semibold'>
                    All Day Keto Breakfast
                    <PiArrowRightBold className='transition duration-100 ease-in-out transform origin-left group-hover:scale-x-110 m-3 text-lg' /></h3>
                </Link>

                <Link className='group'>
                <div className="border-[#3D0818] border-2 border-b-8 rounded-xl  w-full h-fit overflow-hidden ">
                    <Img url={"../assests/HomeImg/browseByCategoryImg/Img2.webp"} />
                </div>
                <h3 className='text-[#3D081B] text-xl  flex items-center font-semibold'>Keto Pastas
                    <PiArrowRightBold className='transition duration-100 ease-in-out transform origin-left group-hover:scale-x-110  m-3 text-lg' /></h3>
                </Link>
                <Link className='group'>
                    <div className="border-[#3D0818] border-2 border-b-8 rounded-xl  w-full h-fit overflow-hidden ">
                        <Img url={"../assests/HomeImg/browseByCategoryImg/Img3.webp"} />
                    </div>
                    <h3 className='text-[#3D081B] text-xl  flex items-center font-semibold'>
                    Keto Pizzas
                    <PiArrowRightBold className='transition duration-100 ease-in-out transform origin-left group-hover:scale-x-110  m-3 text-lg' /></h3>

                </Link>
                <Link className='group'>
                    <div className="border-[#3D0818] border-2 border-b-8 rounded-xl  w-full h-fit overflow-hidden">
                        <Img url={"../assests/HomeImg/browseByCategoryImg/Img4.webp"} />
                    </div>
                    <h3 className='text-[#3D081B] text-xl  flex items-center font-semibold'>Keto Mains      <PiArrowRightBold className='transition duration-100 ease-in-out transform origin-left group-hover:scale-x-110  m-3 text-lg' /></h3>
                </Link>
            </div>
        </div>
    )
}

export default BrowseByCategory