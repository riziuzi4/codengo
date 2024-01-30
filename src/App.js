import { useEffect, useState } from "react";
import { seedData } from "./seedData";
import ProductCard from "./Components/ProductCard/ProductCard";
import Navbar2 from "./Components/Navbar2";
import Navbar from "./Components/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>CodaNGO - Learn and Grow</title>

        <meta name="description" content="Unlock a world of knowledge with CodaNGO. Explore educational content and courses to enhance your skills." />
        <meta name="keywords" content="education, coding, programming, courses, learning platform, CodaNGO" />

        <meta property="og:title" content="CodaNGO - Learn and Grow" />
        <meta property="og:description" content="Unlock a world of knowledge with CodaNGO. Explore educational content and courses to enhance your skills." />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodaNGO - Learn and Grow" />
        <meta name="twitter:description" content="Unlock a world of knowledge with CodaNGO. Explore educational content and courses to enhance your skills." />
      </Helmet>

      <div className="MDNav hidden md:block">
        <Navbar2 />
      </div>
      <div className="Nav md:hidden">
        <Navbar />
      </div>
      <div className="mainBackground w-full flex justify-center">
        <div className="background w-full justify-center sm:w-11/12 flex">
          <div className="left flex  flex-col w-3/4 mt-12">
            <input className="search rounded-3xl text-skin-text100 shadow-md flex items-center w-11/12 h-[60px] py-5 px-10" placeholder="Search" />
            <div className="categories flex mt-5">
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300 hover:cursor-pointer hover:bg-skin-bg300 hover:shadow-lg hover:shadow-green-700">
                Python Courses
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md  mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300 hover:cursor-pointer hover:bg-skin-bg300 hover:shadow-lg hover:shadow-green-700">
                JavaScript Learning
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300 hover:cursor-pointer hover:bg-skin-bg300 hover:shadow-lg hover:shadow-green-700">
                Web Development Workshops
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300 hover:cursor-pointer hover:bg-skin-bg300 hover:shadow-lg hover:shadow-green-700">
                Algorithm and Data Structures
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300 hover:cursor-pointer hover:bg-skin-bg300 hover:shadow-lg hover:shadow-green-700">
                Software Engineering Essentials
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300 hover:cursor-pointer hover:bg-skin-bg300 hover:shadow-lg hover:shadow-green-700">
                AI and Machine Learning Basics
              </div>
            </div>



            <div className="Products text-skin-text200 text-2xl font-bold mt-5 ml-3">Products</div>
            <div className="productMarket flex-col mt-10 grid grid-cols-1 lg:grid-cols-2">
              {
                seedData.map((data, index) => (
                  <ProductCard key={index} data={data} />
                ))
              }
            </div>
          </div>
          <div className="right hidden flex-col h-[calc(100vh-140px)] sticky top-28 mt-4 w-1/4 items-end px-16 min-w-8 md:flex ">
            <div className="navbar w-[25%] min-w-10 rounded-xl  flex flex-col justify-evenly items-center flex-1 shadow-lg shadow-green-700">
              <div className="option px-2">
                <img src="./img/heart.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
              </div>
              <div className="option px-2">
                <img src="./img/cart.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
              </div>
              <div className="option px-2">
                <img src="./img/profile.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
              </div>
              <div className="option px-2">
                <img src="./img/heart.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
              </div>
              <img src="./img/hide.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
            </div>

          </div>
        </div>
      </div>
      <div className="footer h-[100vh] flex flex-col bg-skin-bg100 bg-[url(../public/imgHome/starsHome.svg)] mt-3">
        <div className="row1 flex justify-center my-24">
          <div className="message flex text-3xl font-sans font-bold text-skin-text100 mr-64">Learn with CodeNGO</div>
          <button className="GetStarted w-64 my-1 p-2 text-sm font-bold font-sans text-skin-text100 bg-skin-primary300 rounded-xl">GET STARTED</button>
        </div>
        <div className="row2 flex justify-evenly">
          <div className="col1 flex flex-col w-44">
            <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3 ">About CodeNGO</div>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Mission</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Approach</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Team</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Brand Guidelines</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contact Us</a>
          </div>
          <div className="col2 flex flex-col w-44">
            <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Educational Products</div>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Coding Courses</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Programming Workshops</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Web Development Tools</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Tech News</a>
          </div>
          <div className="col3 flex flex-col w-44">
            <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Help and Support</div>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">FAQs</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Status</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Feedback</a>
            <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contact Support</a>
          </div>
          <div className="col4 flex flex-col w-44">
            <div className="row1 flex flex-col">
              <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Privacy and Terms</div>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Community Guidelines</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Terms of Service</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Privacy Policy</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Do Not Sell My Personal Information</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contribution FAQs</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Contact Us</a>
            </div>
            <div className="row2 flex flex-col">
              <div className="title flex text-1xl text-skin-text100 font-sans font-bold my-3">Connect with Us</div>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Instagram</a>
              <a className="message hover:cursor-pointer hover:no-underline my-1 flex text-xs text-skin-text200 font-sans">Twitter</a>
            </div>
          </div>
        </div>
        <div className="copyrights mt-40 flex justify-center text-xs text-skin-text200 font-sans">Copyright © 2023-2024 CodeNGO</div>
      </div>

    </>

  );
}

export default App;



