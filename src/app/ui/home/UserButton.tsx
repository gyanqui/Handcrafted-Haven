'use client'

// import { signOut, signIn } from 'next-auth/react';
import { signOut, useSession, signIn } from 'next-auth/react';
// import { signOut, useSession } from 'next-auth/react';
// import { useSession } from 'next-auth/react';
// import { signIn } from '@/helpers';
import Link from 'next/link';
import { RxAvatar } from "react-icons/rx";
import { useState, useEffect } from 'react';

export function  UserButton() {
  const { data: session } = useSession();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (session) 
      setIsClient(true);
  }, [session]);
  // if (!isClient) {
  //   return null; // or a loading spinner
  // }
  useEffect(() => {
    console.log(`isClient: ${isClient}, session: ${session}`)
  }, [isClient, session])

  if (session && isClient) {
    return (
      <>
        <div className="hidden lg:flex flex flex-row gap-4 px-2">
        <Link href="/home/dashboard" className='content-center'>
          <RxAvatar className="inline text-2xl" />
        </Link>
        <button onClick={() => {signOut()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button>
        </div>
      {/* <div> */}
        {/* {session?.user?.name} */}
      {/* </div> */}
      </>
    )
  }
  return (
    <>
    <button onClick={() => {signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Login</button>
    </>
  );
}






  // if (session) {
  //   return session?.user ? (
  //     <div className="flex flex-row gap-4 px-2 items-center justify-center ">
  //       <div>
  //       <Link href="/home/dashboard">
  //           <RxAvatar className="inline text-2xl" />
  //       </Link>
  //       </div>
  //       {/* {session?.user?.name} */}
  //       <button onClick={() => {signOut();signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button>
  //     </div>
  //     ) : (
  //       <button onClick={() => {signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Login</button>
  //   );






//   const session = useSession();
//   // const { data: session } = useSession();
//   // const session = await getSession(req);
//   // const [message, setLikes] = useState();

//   const [signedin, setSignedin] = useState(false)

//   const handleSignin = async () => {
//       setSignedin(false);
//       await signIn();
//   }

//   const handleSignout = () => {
//       setSignedin(true);
//       signOut();
//   }

//   return (
//     <div>
//       {/* { signedin ? (  */}
//       { session ? ( 
//       <div>
//           <div className="flex flex-row gap-4 px-2 items-center justify-center ">
//               <div>
//                   <Link href="/home/dashboard">
//                       <RxAvatar className="inline text-2xl" />
//                   </Link>
//               </div>
//               {/* {session?.user?.name} */}
//               {/* <button onClick={handleSignout => {signOut();signIn()}} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button> */}
//               <button onClick={handleSignout} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Sign Out</button>
//           </div>
//       </div>
//       ) :(
//       <div>
//         <button onClick={handleSignin} className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">Login</button>
//         {/* <button type="button"onClick={handleSignin}>Sign In</button> */}
//       </div>)
//            }
//     </div>
//   )
// }
