import React from 'react'

function Banner2() {
    return (
        <div className='relative'>
            <div className='h-fit md:h-[34rem] overflow-clip'>
                <img className='w-full h-full md:h-auto' src="../assests/HomeImg/Banner2Img/Banner2Img.webp" alt="img" />
            </div>
            <div className='sm:text-2xl md:text-3xl text-[#3D081B] text-center p-8 md:w-[500px] mx-auto border-y-2 md:border-2 border-[#3d081b] md:border-b-8 md:rounded-xl md:absolute top-[50%] left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 bg-white'>
                Our Locations & Hours
            </div>
        </div>
    )
}

export default Banner2