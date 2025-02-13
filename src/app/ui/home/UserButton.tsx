'use client'

import { signOut, useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { RxAvatar } from "react-icons/rx";

// function getFirstTwoLetters(str?: string | null) {
//     const match = (str ?? "").match(/[A-Z]/g);
//     return match ? match.slice(0, 2).join('') : '';
// }

export function UserButton() {
    // const session = useSession();
    const { data: session } = useSession();
    
    if (session) {
      return (
        <>
        {/* <div className="hidden lg:block"> */}
            <div className="flex flex-row gap-4 px-2">
            <Link href="/home/dashboard">
                <RxAvatar className="inline text-2xl" />
            </Link>
            </div>
        {/* </div> */}
        <div>
          {session?.user?.name}
          <button onClick={() => signOut()} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button>
        </div>
        </>
      )
    }
    return (
        <>
      {/* <button className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300"> */}
        <button onClick={() => signIn()} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Login</button>
        {/* <Link href='/login'>Log In</Link> */}
      {/* </button> */}
    
      </>
    );
}