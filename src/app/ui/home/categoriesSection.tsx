import Link from 'next/link';

const allCategories = [
  { name: 'Jewelry & Accessories', href: '/jewelry-accessories' },
  { name: 'Home Decor', href: '/home-decor' },
  { name: 'Wearable Art', href: '/wearable-art' },
  { name: 'Stationery & Paper Crafts', href: '/stationery-paper-crafts' },
  { name: 'Category 5', href: '/category-5' },
  { name: 'Category 6', href: '/category-6' },
  { name: 'Category 7', href: '/category-7' },
  { name: 'Category 8', href: '/category-8' },
  { name: 'Category 9', href: '/category-9' },
  { name: 'Category 10', href: '/category-10' },
  { name: 'Category 11', href: '/category-11' }
];

const CategoriesSection = () => {
  return (
    <section className="md:bg-black py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-row justify-start items-center w-full overflow-x-auto scrollbar-hide">
          {allCategories.map((category, index) => (
            <div key={index} className="min-w-max border-r border-black last:border-none">
              <Link href={category.href}>
                <p className="text-custom-yellow font-bold text-lg cursor-pointer py-3 px-5 hover:text-white">{category.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
