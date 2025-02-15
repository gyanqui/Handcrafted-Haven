"use client";

import Image from "next/image";
import { poppins } from "../font";
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import SideMenu from "./SideMenu";
import { Drawer } from "antd";
import { useState } from "react";
import Link from "next/link";
import Form from "next/form";
import { Session } from "@/app/lib/definitions";
import { SessionProvider } from "next-auth/react";
import { UserButton } from "./UserButton";
// import UserButtonServer from '@/app/ui/SignOut.Server';

export default function TopNav({ session }: {session?: Session}) {
  
  
  // const session = useSession();
  const [isOpen, setIsOpen] = useState(false); // side menu open status
  const toggleOpen = () => setIsOpen((current) => !current); // toggle side menu

  return (
    <div className="min-w-[390px] flex flex-row justify-between items-center bg-custom-yellow h-12 p-1 md:p-2 lg:px-8">
      {/* responsive menu */}
      <div className="p-2 text-2xl cursor-pointer lg:hidden">
        {isOpen ? (
          <MdClose onClick={toggleOpen} />
        ) : (
          <GiHamburgerMenu onClick={toggleOpen} />
        )}
      </div>

      {/* logo */}
      <div>
        <Link href="/home">
          <Image
            src="/logo.webp"
            width={30}
            height={30}
            alt="logo picture"
            className="md:hidden"
          />
        </Link>
        <Link href="/home">
          <p
            className={`${poppins.className} text-xl font-extrabold md:block hidden`}
          >
            HandCrafted Haven
          </p>
        </Link>
      </div>

      {/* artisans and products */}
      <div className="lg:flex flex-row gap-4 px-4 hidden">
        <div>
          <Link href="/home/artisans">
            <LuUsersRound className="inline" />
            <span>Artisans</span>
          </Link>
        </div>
        <div>
          <Link href="/home/products">
            <AiOutlineProduct className="inline" />
            <span>Products</span>
          </Link>
        </div>
      </div>

      {/* search bar */}
      <Form
        action="/home/search"
        className="relative flex flex-grow items-center px-2 w-fit"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          name="query"
          className="border border-gray-400 rounded-3xl px-2 text-lg w-full"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute top-1 right-3 lg:top-1 lg:right-3 transform p-1 bg-custom-yellow rounded-full"
        >
          <FaSearch />
        </button>
      </Form>

      {/* sign out  */}
      {session ? (
        <SessionProvider>
          <UserButton/>
        </SessionProvider>
      ) : (
        <div className="hidden lg:block">
          <Link href="/home/login">
            <button className="bg-black text-white rounded-md px-2 py-1 w-20">
              Log In
            </button>
          </Link>
        </div>
      )}

      {/* side menu */}
      <Drawer
        placement="left"
        open={isOpen}
        onClose={toggleOpen}
        width="100%"
        closable={false}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <SideMenu toggleOpen={toggleOpen} session={session} />
      </Drawer>
    </div>
  );
}
