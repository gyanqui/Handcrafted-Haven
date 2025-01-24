"use client";

import Image from "next/image";
import { poppins_black, poppins_medium } from "./font";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

export function HeroSection() {
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
  }, 300);
  return (
    <div className="bg-yellow-300 md:p-12 lg:p-24">
      <div className="bg-white md:rounded-t-3xl p-2 md:p-4 lg:p-6 flex flex-col gap-4">
        {/* header section(begin) */}
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="flex flex-col md:flex-row flex-grow">
            {/* logo section */}
            <div className="flex flex-row justify-center md:justify-start items-center">
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="Logo picture"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
              </Link>
              <Link href="/">
                <p className={`${poppins_black.className} text-2xl px-2`}>
                  Handcrafted Haven
                </p>
              </Link>
            </div>

            {/* nav bar */}
            <ul
              className={`${poppins_medium.className} text-lg flex flex-row flex-grow justify-evenly items-center py-4 lg:py-0`}
            >
              <li className="hover:underline">Artists</li>
              <li className="hover:underline">Products</li>
              <li className="hover:underline">Reviews</li>
            </ul>
          </div>
          <div className="flex flex-row">
            {/* search bar */}
            <div className="relative flex flex-grow items-center px-2 w-fit">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-3xl px-2 text-lg w-full"
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-2 right-3 lg:top-2 lg:right-3 transform translate-y-0.5 p-1 bg-yellow-300 rounded-full"
              >
                <FaSearch />
              </button>
            </div>
            {/* login button */}
            <div>
              <button className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">
                Log In
              </button>
            </div>
          </div>
        </div>
        {/* header section(end) */}

        {/* hero section (begin) */}
        <div className="flex justify-center relative">
          <Image
            src="/hero-image.webp"
            width={1000}
            height={700}
            alt="image of a variety of handcrafted items"
            className="opacity-50"
          />
          <Link href="/">
            <button
              className={`bg-yellow-300 text-black ${poppins_black.className} text-xl md:text-3xl lg:text-7xl rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 hover:bg-black hover:text-yellow-300 transition-all duration-300`}
            >
              Be part of us
            </button>
          </Link>
        </div>
        {/* hero section (end) */}
      </div>
    </div>
  );
}
