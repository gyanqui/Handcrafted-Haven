// import { signOut } from "next-auth/react";
import { signOut, signIn, useSession } from 'next-auth/react';
import Link from 'next/link';


export function ComponentLogIn() {
    const { data: session } = useSession();
    if (session) {
      return (
        // <p> 
        //     still woriking
        // </p>
        // <form
        //     action={async () => {
        //     // 'use server';
        //     await signOut({ redirectTo: '/' });
        //     }}
        // >
        //     <button className="bg-black text-white rounded-md px-2 py-1">
        //     Log Out
        //     </button>
        // </form>

        <>
          Signed in as {session?.user?.email ?? 'Unknown'} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    } else
    return (
        <>
            {/* Not signed in <br /> */}
            <button className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300">
                <Link href='/login'>Log In</Link>
            </button>
            {/* <button onClick={() => signIn()}>Sign in</button> */}
        </>
    )
} 

// button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
// type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

