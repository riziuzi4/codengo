import React from 'react';
import { useState } from 'react';
import { ProductOptions } from '../seedData';
import { Helmet } from 'react-helmet';

const NavElements = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleMouseOver = () => {
        setIsVisible(true);
    };
    const handleMouseOut = () => {
        setIsVisible(false);
    };
    const renderNavItem = (text, link) => (
        <div className="navItem hover:cursor-pointer flex items-center px-3 py-2 justify-center hover:shadow-md hover:bg-skin-primary200 rounded-lg transition ease-in-out duration-300">
            <a className="navLink  text-base text-center font-bold text-skin-text200 whitespace-nowrap w-full justify-center flex" href={link}>
                {text}
            </a>
        </div>
    );
    return (
        <>
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


            <div className="flex flex-col group mx-2">
                <div className="hello " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {renderNavItem(data.title, "/welcome")}
                </div>
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <div className='bridge bg-transparent flex absolute h-52 w-24'></div>
                    <div className="upAnimation z-10 ml-12 absolute top-[72px] w-4 h-4 bg-skin-primary200 rotate-45 shadow-md"></div>
                    <div className="options z-10 grid gap-3 lg:grid-cols-2 grid-cols-1 bg-skin-primary200 absolute top-20 shadow-md text-skin-text200 mr-10 p-5 rounded-lg">
                        {data.options.map((data2, index) => (
                            <div key={index} className="border hover:cursor-pointer hover:shadow-lg rounded-md border-transparent border-b-orange-500 p-1 flex text-center">
                                {data2.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default function Navbar2() {
    const renderNavItem = (text, link) => (
        <div className="navItem hover:cursor-pointer flex items-center px-3 py-2 justify-center hover:shadow-md hover:bg-skin-primary200 rounded-lg transition ease-in-out duration-300">
            <a className="navLink  text-base text-center font-bold text-skin-text200 whitespace-nowrap w-full justify-center flex" href={link}>
                {text}
            </a>
        </div>
    );

    return (
        <>

            <div className="flex justify-center md:justify-between md:flex h-12 my-5">
                <a className="w-32 mx-6" href="/welcome">
                    <img className='hover:cursor-pointer' src="./img/logo.svg" alt="Logo" />
                </a>
                <div className="dummy flex items-center mx-10">
                    {ProductOptions.map((data, index) => (
                        <NavElements key={index} data={data} />
                    ))}
                    <div className="flex mx-2">
                        {renderNavItem("Knowledge base", "/resource")}
                    </div>
                    <div className="flex mx-2">
                        {renderNavItem("About", "/about")}
                    </div>
                </div>


            </div>
        </>
    );
}
