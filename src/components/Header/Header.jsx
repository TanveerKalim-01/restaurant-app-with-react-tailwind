import React, { useState } from 'react';
import ContactBar from './ContactBar';
import Hamburger from './Hamburget';

import AnnounceMentBar from './AnnounceMentBar';
import ResponsiceNav from './ResponsiceNav';
import Logo from './Logo';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const nav = [
    {
        id: "Menu",
        name: "Menu"
    },
    {
        id: "FAQ",
        name: "FAQ"
    },
    {
        id: "About",
        name: "About"
    },
    {
        id: "Gift Cards",
        name: "Gift-Cards"
    },
    {
        id: "Contact",
        name: "Contact"
    },
    {
        id: "Location",
        name: "Location"
    }
]

function Header() {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <>
            <header>
                <AnnounceMentBar />
                <div className='flex justify-center items-center h-[100px] relative w-full'>

                    <div className='w-11/12 mx-auto flex lg:justify-center justify-between items-center gap-4 lg:gap-16 '>

                        {/* menu button */}

                        <Hamburger isToggle={isToggle} setIsToggle={setIsToggle} />

                        {/* logo */}

                        <Logo />

                        {/* navbar */}

                        <Navbar isToggle={isToggle} nav={nav} />

                        {/* contact bar */}

                        <ContactBar />
                    </div>


                    {/* <ResponsiceNav /> */}

                    <ResponsiceNav nav={nav} isToggle={isToggle} setIsToggle={setIsToggle} />

                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header;

