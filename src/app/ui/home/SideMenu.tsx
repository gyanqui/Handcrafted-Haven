import { MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { SlLogout } from "react-icons/sl";

interface SideMenuProps {
  toggleOpen: () => void;
}
export default function SideMenu({ toggleOpen }: SideMenuProps) {
  return (
    <div className="bg-black text-custom-yellow flex flex-col items-center h-full justify-between">
      {/* logo */}
      <div>
        <h1 className="font-extrabold text-4xl">Handcrafted Haven</h1>
      </div>

      {/* items */}
      <div className="flex-grow py-8 flex flex-col justify-evenly text-2xl">
        <div>
          <RxAvatar className="inline m-4" />
          Dashboard
        </div>
        <div>
            <BsCart className="inline m-4"/>Shopping Cart
        </div>
        <div>
          <LuUsersRound className="inline m-4" />
          Artists
        </div>
        <div>
          <AiOutlineProduct className="inline m-4" />
          Products
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
