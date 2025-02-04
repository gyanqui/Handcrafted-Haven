import { MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { SlLogout } from "react-icons/sl";
import Link from "next/link";

interface SideMenuProps {
  toggleOpen: () => void;
}
export default function SideMenu({ toggleOpen }: SideMenuProps) {
  return (
    <div className="bg-black text-custom-yellow flex flex-col items-center h-full justify-between">
      {/* logo */}
      <div>
        <Link href="/home" onClick={toggleOpen}>
          <h1 className="font-extrabold text-4xl">Handcrafted Haven</h1>
        </Link>
      </div>

      {/* items */}
      <div className="flex-grow py-8 flex flex-col justify-evenly text-2xl">
        <div>
          <Link href="/home/dashboard" onClick={toggleOpen}>
            <RxAvatar className="inline m-4" />
            Dashboard
          </Link>
        </div>
        <div>
          <Link href='/home/shopping-cart' onClick={toggleOpen}>
          <BsCart className="inline m-4" />
          Shopping Cart
          </Link>
        </div>
        <div>
          <Link href='/home/artists' onClick={toggleOpen}>
          <LuUsersRound className="inline m-4" />
          Artists
          </Link>
        </div>
        <div>
          <Link href='/home/products' onClick={toggleOpen}>
          <AiOutlineProduct className="inline m-4" />
          Products
          </Link>
        </div>
        <div>
          <SlLogout className="inline m-4" />
          Log Out
        </div>
      </div>

      {/* close button */}
      <div>
        <MdClose onClick={toggleOpen} className="cursor-pointer text-4xl" />
      </div>
    </div>
  );
}
