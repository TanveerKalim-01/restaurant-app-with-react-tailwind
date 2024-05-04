import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function AnnounceMentBar() {
    return (
        <>
            <Link href="" className='text-center py-0 px-2 lg:px-6 block text-sm bg-[#512b55] w-full'>
                <p className=' text-white  flex justify-center items-center group font-semibold'>
                    Order now and enjoy instant delivery for orders over $25
                    <PiArrowRightBold className='transition duration-100 ease-in-out transform origin-left group-hover:scale-x-110 md:text-lg m-3 text-2xl' />
                </p>
            </Link>

        </>
    )
}

export default AnnounceMentBar;