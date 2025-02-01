import Link from 'next/link';

const CategoriesSection = () => {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center">
          <Link href="/jewelry-accessories">
            <p className="text-custom-yellow font-bold text-lg hover:underline cursor-pointer">Jewelry & Accessories</p>
          </Link>
          <Link href="/home-decor">
            <p className="text-custom-yellow font-bold text-lg hover:underline cursor-pointer">Home Decor</p>
          </Link>
          <Link href="/wearable-art">
            <p className="text-custom-yellow font-bold text-lg hover:underline cursor-pointer">Wearable Art</p>
          </Link>
          <Link href="/stationery-paper-crafts">
            <p className="text-custom-yellow font-bold text-lg hover:underline cursor-pointer">Stationery & Paper Crafts</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
