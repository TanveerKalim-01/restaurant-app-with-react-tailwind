
import { CiUser } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResponsiceNav({ isToggle, nav, setIsToggle }) {
  return (
      <div className={`text-[#3d081bbf] text-xl  lg:hidden  w-5/6 md:w-1/2 h-[500px] bg-white border-r-8 border-[#3d081bbf] overflow-y-auto transition-all duration-1000 delay-200 ease-in-out absolute top-[100px]
                  ${isToggle ? 'left-0' : '-left-full'}`}>
        <ul>
          {nav.map((item) => {
            return (
              <Link to={`${item.name.toLowerCase()}-page`} key={item.id} className=' block px-5 ml-4 py-5 font-semibold hover:bg-slate-200' onClick={() => setIsToggle(false)}>
                {item.name}
              </Link>
            )
          })}
        </ul>

        <div>
          <Link  className='flex items-center px-4 py-5 ml-4 font-semibold mt-8 group' to={"login-page"}>
            <CiUser className='text-3xl group-hover:scale-110 duration-200' />
            <p className='ml-2 cursor-pointer'>Log in</p>
          </Link>
          
        </div>

        <div className='flex px-4 py-5 ml-4 font-semibold mt-8 gap-8'>
          <Link to={"https://www.facebook.com/ketodelia"}><AiFillFacebook className='text-3xl hover:scale-110 duration-200' /></Link>
          <Link to={"https://www.pinterest.ca/ketodeliatoronto/"}><FaPinterest className='text-3xl hover:scale-110 duration-200' /></Link>
          <Link to={"https://www.instagram.com/ketodelia/"}><FaInstagram className='text-3xl hover:scale-110 duration-200' /></Link>
          <Link to={"https://www.tiktok.com/@ketodelia"}><FaTiktok className='text-3xl hover:scale-110 duration-200' /></Link>
          <Link to={"https://www.youtube.com/@ketodeliaketorestaurant"}><FaYoutube className='text-3xl hover:scale-110 duration-200' /></Link>
        </div>
      </div>
  )
}

export default ResponsiceNav