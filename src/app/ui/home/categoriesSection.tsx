import Link from 'next/link';

const CategoriesSection = () => {
  return (
    <section className="bg-custom-yellow md:bg-black py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-center">
          <div className="w-full border-b border-black">
            <Link href="/jewelry-accessories">
              <p className="text-black md:text-custom-yellow font-bold text-lg cursor-pointer py-3 hover:text-white">Jewelry & Accessories</p>
            </Link>
          </div>
          <div className="w-full border-b border-black">
            <Link href="/home-decor">
              <p className="text-black md:text-custom-yellow font-bold text-lg cursor-pointer py-3 hover:text-white">Home Decor</p>
            </Link>
          </div>
          <div className="w-full border-b border-black">
            <Link href="/wearable-art">
              <p className="text-black md:text-custom-yellow font-bold text-lg cursor-pointer py-3 hover:text-white">Wearable Art</p>
            </Link>
          </div>
          <div className="w-full">
            <Link href="/stationery-paper-crafts">
              <p className="text-black md:text-custom-yellow font-bold text-lg cursor-pointer py-3 hover:text-white">Stationery & Paper Crafts</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
