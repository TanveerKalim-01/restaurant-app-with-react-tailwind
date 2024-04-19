import React from 'react';


function Banner() {

    return (
        <>
            <div className="bg-contain bg-right bg-no-repeat bg-slate-100 h-screen w-full border border-t " style={{ backgroundImage: `url(assests/burger.jpg)` }}>

                <div className='w-3/4 mx-auto flex flex-wrap items-center mt-64 h-fit'>
                    <h1 className='tracking-widest w-full h-fit text-[#3d0818] text-4xl font-bold'>
                        LESS CARBS, MORE <br /> DELICIOUS...
                    </h1>

                    <p className='text-[#3D081BBF] font-semibold h-fit mx-auto md:mx-0 md:bg-[#7e60817e] w-fit mt-4 text-xl md:font-thin'>
                        KETO FRIENDLY • LOW CARB • 100% GLUTEN FREE
                    </p>

                    <div className='w-full mt-4 text-center md:text-start'>
                        <button className='px-4 py-2 h-fit text-white rounded-full w-fit  bg-[#94619A]'>
                            Order Online
                        </button>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Banner;