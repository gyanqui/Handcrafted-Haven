'use client'

import { signOut, useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { RxAvatar } from "react-icons/rx";

export function  UserButton() {
  const { data: session } = useSession();

  if ( session ) {
    return (
      <>
        <div className="hidden lg:flex flex-row gap-4 px-2">
        <Link href="/home/dashboard" className='content-center'>
          <RxAvatar className="inline text-2xl" />
        </Link>
        <button onClick={() => {signOut()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button>
        </div>
      </>
    )
  }
  return (
    <>
    <button onClick={() => {signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Login</button>
    </>
  );
}