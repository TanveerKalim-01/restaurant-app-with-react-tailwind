import { FaStar } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import ReviewsCard from "./shared/ReviewsCard";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Review() {
    const scrollRef = useRef(null);
    const cardRef = useRef();

    function scrollLeft() {
        let width= scrollRef.current.offsetWidth;
        scrollRef.current.scrollLeft -= width;
    }

    function scrollRight() {
        let width= scrollRef.current.offsetWidth;
        scrollRef.current.scrollLeft += width;
    }
    return (
        <>
            <div 
                style={{ scrollBehavior: "smooth" }}
                ref={scrollRef} 
                 className='mt-8 w-5/6 mx-auto overflow-hidden'
                >

                <div className='flex gap-2 '>

                    <Link className='bg-[#F5EFF5] basis-[100%] md:basis-1/2 lg:basis-1/3 shrink-0 h-fit text-center shadow hover:shadow-2xl mb-4'>
                        <div className="relative">
                        <img src="assests/HomeImg/reviewsImg/1DQjqNfAx.jpg" alt="/" className="w-full" />
                        <h1 className='w-fit text-xl border border-white rounded-full p-2 bg-[#E6E6E6] absolute top-[86%] left-[44%]' >
                            HG
                            <span className="absolute top-[30px] left-[30px] text-sm text-[#8c8980]"><FaCircleCheck /></span>
                        </h1>
                        </div>
                       
                        <h1 className="text-xl font-semibold mt-7">Henriette G.</h1>
                        <p className="  text-xs">21/04/2023</p>

                        <p className="mt-5">"  Great we user it for my <br /> birthday cake. Delicious cake.   "</p>
                        <div className="text-gray-500 gap-1 flex items-center justify-center my-5">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </Link>

                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                </div>

            </div>
            <div className="flex justify-between mt-16 w-5/6 mx-auto">
                <FaAngleLeft onClick={scrollLeft} className="text-3xl" />
                <button className="border border-black px-2 transition-all duration-200 hover:bg-black hover:text-white">Show more reviews</button>
                <FaAngleRight onClick={scrollRight} className="text-3xl" />
            </div>
        </>
    )
}

export default Review