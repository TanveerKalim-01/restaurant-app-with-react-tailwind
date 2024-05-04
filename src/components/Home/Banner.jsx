import React from 'react';


function Banner() {

    return (
        <>
            <section className="bg-cover md:bg-right bg-no-repeat border border-black bg-[#3D081B1A] h-[50vh] md:h-[90vh] w-full flex items-center justify-center " style={{ backgroundImage: `url(assests/HomeImg/bannerSecImg/burger.webp)` }}>

                <div className='w-3/4  flex flex-wrap items-center gap-4 h-fit'>
                    <h2 className=' w-full h-fit text-[#512B55] md:text-[#3d0818] text-3xl md:text-4xl font-semibold'>
                        LESS CARBS, MORE <br /> DELICIOUS...
                    </h2>

                    <p className='text-[#3D081BBF] font-semibold h-fit mx-auto md:mx-0 w-fit   md:text-lg md:font-thin'>
                        KETO FRIENDLY • LOW CARB • 100% GLUTEN FREE
                    </p>

                    <div className='w-full  text-center md:text-start'>
                        <button className='px-7 py-3 h-fit text-white rounded-full w-fit  bg-[#94619A]'>
                            Order Online
                        </button>
                    </div>

                </div>

            </section>

        </>

    )
}

export default Banner;