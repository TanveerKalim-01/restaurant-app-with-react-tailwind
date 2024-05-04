import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ReviewsCard() {
    return (
        <Link className='bg-[#F5EFF5] text-center relative basis-[100%] md:basis-1/2  lg:basis-1/3 shrink-0 items-start h-fit shadow  hover:shadow-2xl'>
            <div className='py-6 px-4 '>
                <h1 className='text-4xl font-semibold'>&#8220; Best keto <br /> Pizza in the <br /> city &#8221;</h1>

                <div className="text-gray-500 gap-1 flex items-center justify-center my-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <h2 className=' mx-auto w-fit text-xl border border-white rounded-full p-2 bg-[#E6E6E6] relative' >
                    MS
                    <span className="absolute top-[30px] left-[30px] text-sm text-[#8c8980]"><FaCircleCheck /></span>
                </h2>
                <h2 className='font-semibold mt-4'>Mani S.</h2>
                <p className="mt-2 text-xs">21/04/2023</p>
            </div>

        </Link>
    )
}

export default ReviewsCard