import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ nav }) {
    const [activeIdx, setActiveIdx] = useState("");
    return (
        <>

            <nav className='min-w-fit w-1/2 hidden lg:block '>
                <ul className='flex justify-center items-center h-full gap-x-5 text-[#3d081bbf] text-md'>
                    {nav.map((item) => {
                        return (
                            <li key={item.id} >
                                <Link
                                    to={`${item.name.toLowerCase()}-page`}
                                    className={`hover:text-black inline-block border-white border-b  hover:border-black ${activeIdx === item.id ? 'border-black border-b-2 text-black' : ''}`}
                                    onClick={() => setActiveIdx(item.id)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </>
    )
}

export default Navbar;