import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function ContactBar() {
    return (
        <div className='flex max-w-1/3  justify-center items-center text-[#3d081bbf] gap-4 lg:gap-6 text-2xl ' >
            <Link to={""} className='underline hidden md:inline text-lg'>(416) 623-0317</Link>
            <Link to={"search-page"} className=' hover:scale-125 duration-200'><CiSearch /></Link>
            <Link to={"login-page"} className=' hover:scale-125 duration-200 hidden md:block'><CiUser /></Link>
            <Link to={"cart-page"} className=' hover:scale-125 duration-200'><LiaShoppingBagSolid /></Link>
        </div>
    )
}

export default ContactBar;