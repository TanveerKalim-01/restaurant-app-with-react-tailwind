import { FaStar } from "react-icons/fa6";
import Img from "./Img"
import { Link } from "react-router-dom";




function Card({ info }) {

  return (
      <Link className='group'>
        <div className="border-[#3D0818] border-2 border-b-8 rounded-xl  w-full h-fit overflow-hidden">
          <Img url={info.url} />
        </div>
        <div className="px-2 my-2 ">
          <h3 className=' text-sm md:text-lg group-hover:underline font-semibold'>{info.title}</h3>
          <p className=' text-sm text-slate-500'>{info.discription}</p>

          <div className="flex gap-2 mt-2 text-lg ">
            <div className=" text-sm text-gray-500 gap-1 flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="text-black">({info.rating})</p>
            </div>
          </div>
          <p className="">{info.price}</p>
        </div>
      </Link>
  )
}

export default Card;