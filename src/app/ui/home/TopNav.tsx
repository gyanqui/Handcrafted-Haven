"use client";

import Image from "next/image";
import { useDebouncedCallback } from "use-debounce";
import { poppins } from "../font";
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import SideMenu from "./SideMenu";
import { Drawer } from "antd";
import { useState } from "react";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)  // side menu open status
  
  const toggleOpen = () => setIsOpen((current) => !current)

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
  }, 300);
  return (
    <div className="min-w-[390px] flex flex-row justify-between items-center bg-custom-yellow h-12 p-1 md:p-2 lg:px-8">
      {/* responsive menu */}
      <div className="p-2 text-2xl cursor-pointer lg:hidden">
        {isOpen ? <MdClose onClick={toggleOpen}/> : <GiHamburgerMenu onClick={toggleOpen}/>}
      </div>
      {/* logo */}
      <div>
        <Image
          src="/logo.webp"
          width={30}
          height={30}
          alt="logo picture"
          className="md:hidden"
        />
        <p
          className={`${poppins.className} text-xl font-extrabold md:block hidden`}
        >
          HandCrafted Haven
        </p>
      </div>
      {/* artists and products */}
      <div className="lg:flex flex-row gap-4 px-4 hidden">
        <div>
          <LuUsersRound className="inline" />
          <span>Artists</span>
        </div>
        <div>
          <AiOutlineProduct className="inline" />
          <span>Products</span>
        </div>
      </div>
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
          className="absolute top-1 right-3 lg:top-1 lg:right-3 transform p-1 bg-custom-yellow rounded-full"
        >
          <FaSearch />
        </button>
      </div>
      {/* management dashboard */}
      <div className="hidden lg:block">
        <div className="flex flex-row gap-4 px-2">
          <RxAvatar className="inline text-2xl" />
          <BsCart className="inline text-2xl" />
        </div>
      </div>
        {/* sign out  */}
      <div className="hidden lg:block">
        <button className="bg-black text-white rounded-md px-2 py-1">Log Out</button>
      </div>
      <Drawer placement="left" open={isOpen} onClose={toggleOpen} width="100%" closable={false} style={{backgroundColor: "black", color: "white"}}>
        <SideMenu toggleOpen={toggleOpen}/>
      </Drawer>
    </div>
  );
}
