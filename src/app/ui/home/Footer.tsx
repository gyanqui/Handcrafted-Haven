import Link from "next/link";
import { poppins } from "../font";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <div className="bg-black text-white flex flex-row items-center justify-between px-4 h-12">
            <div className="flex flex-col flex-grow md:flex-row">
                <p className={`${poppins.className} font-extrabold`}>Handcrafted Haven</p>
                <p className="text-custom-grey md:ml-4">&copy;{thisYear} WDD430 Group 11</p>
            </div>
            <div className="flex flex-row flex-wrap gap-1">
                <Link href="https://facebook.com" target="_blank" className="bg-custom-yellow p-1 rounded-lg"><FaFacebookF className=" text-black text-xl"/></Link>
                <Link href="https://instagram.com" target="_blank" className="bg-custom-yellow p-1 rounded-lg"><FaInstagram className=" text-black text-xl"/></Link>
                <Link href="https://twitter.com" target="_blank" className="bg-custom-yellow p-1 rounded-lg"><FaTwitter className=" text-black text-xl"/></Link>
                <Link href="https://linkedin.com" target="_blank" className="bg-custom-yellow p-1 rounded-lg"><FaLinkedinIn className=" text-black text-xl"/></Link>
            </div>
        </div>
    )
}