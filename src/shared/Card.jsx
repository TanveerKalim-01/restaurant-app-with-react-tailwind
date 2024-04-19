import { FaStar } from "react-icons/fa6";
import Img from "./Img.jsx";



function Card({ info }) {
  return (
    <>
      <div className="container mt-2">

        <a className='group'>

          <Img url={info.url} />

          <h3 className='text-lg group-hover:underline mt-6 font-semibold'>{info.title}</h3>
          <p className=' text-slate-500'>{info.discription}</p>

          <div className="flex gap-2 mt-4 text-lg ">
            <div className="text-gray-500 gap-1 flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>({info.price})</p>
          </div>
          <p className="text-lg">{info.price}</p>
        </a>
        <hr />
      </div>


    </>
  )
}

export default Card