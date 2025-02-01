import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Handcraftd Haven</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores? Eum ea tempora natus.</p>
          <div className="flex mt-4">
            <Link href="https://facebook.com"><p className="p-2 bg-custom-yellow rounded-lg mr-3"><FaFacebookF className="text-xl text-black" /></p></Link>
            <Link href="https://instagram.com"><p className="p-2 bg-custom-yellow rounded-lg mr-3"><FaInstagram className="text-xl text-black" /></p></Link>
            <Link href="https://twitter.com"><p className="p-2 bg-custom-yellow rounded-lg mr-3"><FaTwitter className="text-xl text-black" /></p></Link>
            <Link href="https://linkedin.com"><p className="p-2 bg-custom-yellow rounded-lg mr-3"><FaLinkedinIn className="text-xl text-black" /></p></Link>
          </div>
          

        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Company</h3>
          <Link href="/about"><p>About</p></Link>
          <Link href="/contact"><p>Contact us</p></Link>
          <Link href="/support"><p>Support</p></Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Quick Link</h3>
          <Link href="/location"><p>Artists</p></Link>
          <Link href="/orders"><p>Products</p></Link>
          <Link href="/size-guide"><p>Reviews</p></Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Legal</h3>
          <Link href="/terms"><p>Terms & Conditions</p></Link>
          <Link href="/privacy"><p>Privacy Policy</p></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
