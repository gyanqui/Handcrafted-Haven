import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Handcraftd Haven</h2>
          <p className="md:text-left">Celebrate, Explore and Showcase the Beauty of Handmade Crafts</p>
          <div className="flex mt-4">
            <Link href="https://facebook.com"><p className="p-2 bg-yellow-500 rounded-lg mr-3"><FaFacebookF className="text-xl text-black" /></p></Link>
            <Link href="https://instagram.com"><p className="p-2 bg-yellow-500 rounded-lg mr-3"><FaInstagram className="text-xl text-black" /></p></Link>
            <Link href="https://twitter.com"><p className="p-2 bg-yellow-500 rounded-lg mr-3"><FaTwitter className="text-xl text-black" /></p></Link>
            <Link href="https://linkedin.com"><p className="p-2 bg-yellow-500 rounded-lg mr-3"><FaLinkedinIn className="text-xl text-black" /></p></Link>
          </div>

        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Company</h3>
          <p>About</p>
          <p>Contact us</p>
          <p>Support</p>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Legal</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
