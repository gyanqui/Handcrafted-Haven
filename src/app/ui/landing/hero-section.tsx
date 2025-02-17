"use client";

import Image from "next/image";
import { poppins } from "../font";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Form from "next/form";
import { CategoryNav } from "./categoryNav";
import { CategoryCardProps } from "@/app/lib/definitions";
import { SessionProvider } from "next-auth/react";
import { UserButton } from '../home/UserButton';
import { useSession } from "next-auth/react";

export default function HeroSection({categories}: {categories: CategoryCardProps[] | []}) {
  const session = useSession().data;

  return (
    <div className="bg-custom-yellow md:px-12 md:pt-12 lg:px-24 lg:pt-24">
      <div className="bg-white md:rounded-t-3xl px-2 pt-2 md:px-4 md:pt-4 lg:px-6 lg:pt-6 flex flex-col gap-4">
        {/* header section(begin) */}
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <nav className="flex flex-col md:flex-row flex-grow">
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
                <p className={`${poppins.className} text-2xl px-2`}>
                  Handcrafted Haven
                </p>
              </Link>
            </div>

            {/* nav bar */}
            <ul
              className={`${poppins.className} text-lg flex flex-row flex-grow justify-evenly items-center py-4 lg:py-0 space-x-2`}
            >
              <Link href="/home/artisans" className="hover:underline">
                <li>Artisans</li>
              </Link>
              <Link href="/home/products" className="hover:underline">
                <li>Products</li>
              </Link>
              <Link href="/home/reviews" className="hover:underline">
                <li>Reviews</li>
              </Link>
            </ul>
          </nav>
          <div className="flex flex-row items-center">
            {/* search bar */}
            <Form action='/home/search'
              className="relative flex flex-grow items-center px-2 w-fit h-[30px]"
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
                className="absolute top-1 right-3 p-1 bg-custom-yellow rounded-full"
              >
                <FaSearch />
              </button>
            </Form>

            {/* login button */}
            <SessionProvider session={session}>
              <UserButton/>
            </SessionProvider>
            

            {/* <div>
              <button className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-custom-yellow hover:text-black transition-all duration-300">
                <Link href='/home/login'>Log In</Link>
              </button>
            </div> */}

          </div>
        </div>
        {/* header section(end) */}

        {/* hero section (begin) */}
        <div className="flex justify-center relative">
          <Image
            src="/hero-image.webp"
            priority={true}
            width={1000}
            height={700}
            alt="image of a variety of handcrafted items"
            className="opacity-50"
          />
          <Link href="/home/sign-up">
            <button
              className={`bg-custom-yellow text-black ${poppins.className} text-xl md:text-3xl lg:text-7xl rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 hover:bg-black hover:text-custom-yellow transition-all duration-300`}
            >
              Be part of us
            </button>
          </Link>
        </div>
        {/* hero section (end) */}

      </div>
        {/* category nav section (begin) */}
        <CategoryNav categories={categories}/>

        {/* category nav section (end) */}
    </div>
  );
}
