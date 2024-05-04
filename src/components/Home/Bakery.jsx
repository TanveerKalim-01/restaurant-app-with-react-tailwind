import React from 'react'

function Bakery() {
    return (
        <div className='py-16 text-[#3D081B]'>

            <div className=" w-5/6 mx-auto grid md:grid-cols-2 border-2 border-b-8 rounded-xl border-[#3d081b] ">
                <div className='flex justify-center items-center border-t md:border-r border-[#3d081b] p-2 md:p-12 order-2 md:order-1'>
                    <div className='w-fit h-fit'>
                        <p className='text-xl opacity-50'>Form our bakery</p>
                        <h1 className='text-4xl font-semibold my-4'>Keto Red Velvet Cake 8"</h1>
                        <p className='text-xl opacity-50'>Sugar-free low carb red velvet cake is naturally colored and sugar-free.</p>
                    </div>
                </div>
                <div className='border-b md:border-t md:order-2 border-[#3d081b]'>
                    <img className='w-full rounded-t-xl md:rounded-r-xl md:aspect-square' src="../assests/HomeImg/BakeryImg/BakeryImg.webp" alt="" />
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-16 ">
                <h1 className='text-4xl font-semibold mb-6'>When yummy meets healthy</h1>
                <p className='text-lg mt-4'>
                    Keto is not about dieting. It's about choosing the best possible food to fuel your body and mind.  And, of course, pleasure is always part of the mix.
                </p>
                <p className='text-lg mt-4'>
                    Based in Toronto, Ketodelia offers 100% gluten-free delicious low-carb cuisine. We take pride in selecting the very best ingredients for each and every meal. The meat we cook comes exclusively from local farms so that we can make sure it's of the finest quality.
                </p>
            </div>
        </div>
    )
}

export default Bakery