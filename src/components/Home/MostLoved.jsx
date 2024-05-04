import Card from "./shared/Card";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef, useState } from "react";
import { info } from "../../../data/data";


function MostLoved() {
    const scrollRef = useRef(null);
    const cardRef = useRef();
    const [count, setCount] = useState(1);

    function scrollLeft() {
        let gap = cardRef.current.firstChild.clientWidth;
        scrollRef.current.scrollLeft -= gap;
        if (count <= info.length - 1 && count > 1) {
            setCount(count - 1)
        }
    }

    function scrollRight() {
        let gap = cardRef.current.firstChild.clientWidth;
        scrollRef.current.scrollLeft += gap;
        if (count >= 1 && count < info.length - 1) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <section className="lg:w-5/6 w-full  mx-auto pt-8 pl-4 ">

                <h1 className="text-5xl text-[#3D0818] font-semibold mb-7">Most Loved</h1>
                <div
                    className="overflow-hidden"
                    style={{ scrollBehavior: "smooth" }}
                    ref={scrollRef}
                >
                    <div ref={cardRef} className="grid grid-cols-4 gap-3 w-[200%] lg:w-full" >

                        {info.map((el, idx) => {
                            return <Card key={idx} info={el} />
                        })}
                    </div>


                </div>
                <div className="lg:hidden flex justify-center items-center md:h-40 h-20 ">
                    <MdOutlineKeyboardArrowLeft onClick={scrollLeft} className="mx-4 cursor-pointer text-xl" />
                    <p >{count}/{info.length - 1}</p>
                    <MdOutlineKeyboardArrowRight onClick={scrollRight} className="mx-4 cursor-pointer text-xl" />
                </div>


            </section>

        </>


    )
}


export default MostLoved;