import { MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { SlLogout } from "react-icons/sl";
import Link from "next/link";
import { SideMenuProps } from "@/app/lib/definitions";

export default function SideMenu({ toggleOpen, session }: SideMenuProps) {
  return (
    <div className="bg-black text-custom-yellow flex flex-col items-center h-full justify-between">
      {/* logo */}
      <div>
        <Link
          href="/home"
          onClick={toggleOpen}
          className="text-custom-yellow active:text-custom-grey"
        >
          <h1 className="font-extrabold text-4xl text-center">
            Handcrafted Haven
          </h1>
        </Link>
      </div>

      {/* items */}
      <div className="flex-grow py-8 flex flex-col justify-evenly text-2xl">
        {session && (
          <div>
            <Link href="/home/dashboard" className="hover:text-white text-white" onClick={toggleOpen}>
              <RxAvatar className="inline m-4" />
              Dashboard
            </Link>
          </div>
        )}
        <div>
          <Link href="/home/artisans" className="hover:text-white text-white" onClick={toggleOpen}>
            <LuUsersRound className="inline m-4" />
            Artisans
          </Link>
        </div>
        <div>
          <Link href="/home/products" className="hover:text-white text-white" onClick={toggleOpen}>
            <AiOutlineProduct className="inline m-4" />
            Products
          </Link>
        </div>
        {session ? (
          
          <div>
            <Link href={'/api/auth/signout'} className="hover:text-white text-white">
              <SlLogout className="inline m-4" />
              Log Out
            </Link>
          </div>
        ) : (
          <Link href="/home/login" className="hover:text-white text-white" onClick={toggleOpen}>
            <div>
                <SlLogout className="inline m-4" />
              Log In
            </div>
          </Link>
        )}
        {/* <div>
          <SlLogout className="inline m-4" />
            Log Out
          </div> */}

        
      </div>

      {/* close button */}
      <div>
        <MdClose onClick={toggleOpen} className="cursor-pointer text-4xl text-white" />
      </div>
    </div>
  );
}
