"use client";

import Image from "next/image";
import { poppins_black, poppins_medium } from "./font";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";

export function HeroSection() {
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
  }, 300);
  return (
    <div className="bg-yellow-300 p-8">
      <div className="bg-white rounded-t-3xl p-6 flex flex-col gap-4">
        {/* header section(begin) */}
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-end">
            <Image
              src="/logo.webp"
              alt="Logo picture"
              width={100}
              height={100}
              className="w-8 h-8"
            />
            <p className={`${poppins_black.className} text-2xl px-2`}>
              Handcrafted Haven
            </p>
          </div>
          <ul className="flex flex-row flex-grow justify-evenly items-center">
            <li>Artists</li>
            <li>Products</li>
            <li>Reviews</li>
          </ul>
          <div className="relative flex flex-row items-center px-2">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              className="border border-gray-400 rounded-3xl px-2"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-2 right-3 p-1 bg-yellow-300 rounded-full"
            >
              <FaSearch />
            </button>
          </div>
          <div>
            <button className="bg-black text-white py-2 px-4 rounded-lg">
              Log In
            </button>
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
          <button
            className={`bg-yellow-300 text-black ${poppins_black.className} text-7xl rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6`}
          >
            Be part of us
          </button>
        </div>
        {/* hero section (end) */}
      </div>
    </div>
  );
}
