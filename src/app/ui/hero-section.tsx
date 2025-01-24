"use client";

import Image from "next/image";
import { poppins_black } from "./font";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";

export function HeroSection() {
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
  }, 300);
  return (
    <div className="bg-yellow-300 p-8 outline">
      <div className="bg-white rounded-t-3xl p-6">
        <div className="header flex flex-row outline">
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
          <ul className="flex flex-row">
            <li>Artists</li>
            <li>Products</li>
            <li>Reviews</li>
          </ul>
          <div className="relative flex flex-row items-center">
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
              className="absolute top-1 right-1 p-1 bg-yellow-300 rounded-full"
            >
              <FaSearch />
            </button>
          </div>
          <div>
            <button className="bg-black text-white py-2 px-4">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
