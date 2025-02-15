'use client';
 
// import { useState } from 'react';
// import { useSession, signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { signOut, signIn } from '@/helpers';
// import { signOut, signIn } from '../../../auth';
import Link from 'next/link';
import { RxAvatar } from "react-icons/rx";
 
export default function LoginButton() {
  const session = useSession();
//   const [message, setLikes] = useState();
 
//   function handleClick() {
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
            <button onClick={() => {signOut();signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button>
        </div>
        </>
        )
    }
    return (
        <>
        {/* <button className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300"> */}
        <button onClick={() => {signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Login</button>
        {/* <Link href='/login'>Log In</Link> */}
        {/* </button> */}
    
        </>
    );
//     if (session) {
//       signOut();
//     } else {
//       signIn();
//     }
//   }

    
 
//   return <button onClick={handleClick}>({message})</button>;
    // }
}
