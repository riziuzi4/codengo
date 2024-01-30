import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';


export default function Navbar() {
    const [toggleMenu, settoggleMenu] = useState(false)
    const renderNavItem = (text, link) => (
        <div className="navItem flex items-center w-2/3 px-3 py-2 justify-center hover:shadow-md hover:bg-skin-primary200 rounded-lg transition ease-in-out  duration-300 mx-5">
            <a className="navLink  text-base text-center font-bold text-skin-text200 whitespace-nowrap w-full justify-center flex" href={link}>
                {text}
            </a>
        </div>
    );

    return (
        <div>
            <Helmet>
                <title>CodaNGO - Navbar</title>

                <meta name="description" content="Discover the navigation elements and options on CodaNGO's website navbar. Navigate through educational content and courses with ease." />
                <meta name="keywords" content="navbar, navigation, options, CodaNGO, educational platform" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="CodaNGO - Navbar" />
                <meta property="og:description" content="Discover the navigation elements and options on CodaNGO's website navbar. Navigate through educational content and courses with ease." />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CodaNGO - Navbar" />
                <meta name="twitter:description" content="Discover the navigation elements and options on CodaNGO's website navbar. Navigate through educational content and courses with ease." />
            </Helmet>
            <div className="flex h-12 my-5">
                <div className="header z-10 flex justify-center w-full items-center relative">
                    <a className="w-52 absolute" href="/welcome">
                        <img className='hover:cursor-pointer' src="./img/logo.svg" alt="Logo" />
                    </a>
                    <div onClick={() => { settoggleMenu(prev => !prev) }} className="toggleMenu p-1 hover:cursor-pointer hover:scale-110 hover:shadow-2xl shadow-green-700 text-skin-text200 border border-green-500 shadow-xl rounded-full right-[5%] absolute">
                        {!toggleMenu ? (<>Menu</>) : (<>UnMenu</>)}
                    </div>
                </div>
                <div className={`w-full py-24 z-0 h-full absolute bg-skin-bg100 flex flex-col items-center ${toggleMenu ? (`left-[0%]`) : (`left-[-100%]`)}  duration-200`}>
                    {renderNavItem("Products", "/welcome")}
                    {renderNavItem("Projects", "/JournalAI")}
                    {renderNavItem("Knowledge base", "/resource")}
                    {renderNavItem("About", "/about")}
                </div>
            </div>
        </div>

    );
}
