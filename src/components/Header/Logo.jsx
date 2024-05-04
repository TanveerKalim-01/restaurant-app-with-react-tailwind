import {Link} from "react-router-dom";

function Logo() {
    return (
        
        <Link to={"/"} className='max-w-fit md:min-w-fit '>
             <img className=" h-[75px] " src="../assests/headerImg/Ketodelia_Logo_1b.avif" alt="logo" />
        </Link>
    )
}

export default Logo