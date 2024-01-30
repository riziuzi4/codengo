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
          <div className="right hidden flex-col h-[calc(100vh-140px)] sticky top-28 mt-4 w-1/4 items-end px-16 min-w-8 md:flex">
            <div className="navbar w-[25%] min-w-10 rounded-xl shadow-md  flex flex-col justify-evenly items-center flex-1">
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
    </>

  );
}

export default App;






<div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-with-dividers" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    Actions
    <svg class="hs-dropdown-open:rotate-180 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
  </button>

  <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-dividers">
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Newsletter
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Purchases
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Downloads
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Team Account
      </a>
    </div>
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Upgrade License
      </a>
    </div>
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Account Settings
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">
        Sign out
      </a>
    </div>
  </div>
</div>