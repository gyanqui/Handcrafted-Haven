import ArtisanStory from "../ui/landing/artisan-story";
import CategoryNav from "../ui/home/CategoryNav";
import PromotionWrapper from "../ui/home/PromotionWrapper";
export default function Page() {
  const categories = [
    {
      category_id: 'd8e9f8b6-7cb4-4fbb-bc07-23dfeff30c2d',
      category: 'Pottery & Ceramics',
      category_url: '/category/pottery.webp'
    },
    {
      category_id: 'b9e1a526-77c1-4a9a-8e0f-6599b6e2f00c',
      category: 'Woodcraft & Carving',
      category_url: '/category/woodcraft.webp'
    },
    {
      category_id: '712e774e-0ad4-4c10-8a1a-981f9df5f7e8',
      category: 'Textile & Fiber Arts',
      category_url: '/category/textile.webp'
    },
    {
      category_id: 'f40f68b8-e8c3-473a-b6b3-324684703c19',
      category: 'Glass Creations',
      category_url: '/category/glass.webp'
    },
    {
      category_id: 'a5f1749f-89be-44e1-a6e1-f2c21b5eb930',
      category: 'Metal Art & Jewelry',
      category_url: '/category/metal.webp'
    },
    {
      category_id: '21dff6d8-3a79-4882-b8ef-78412b7ba946',
      category: 'Leather Goods',
      category_url: '/category/leather.webp'
    },
    {
      category_id: 'c1a6319c-5825-4d83-8989-c05b4a3cb3cb',
      category: 'Paper & Stationery',
      category_url: '/category/paper.webp'
    },
    {
      category_id: 'f65053b2-3d83-4ef4-a6fa-e3b34f43f3d7',
      category: 'Candles & Scents',
      category_url: '/category/candles.webp'
    },
    {
      category_id: '8761b01c-b6c3-4f3d-901a-196451de41fa',
      category: 'Bath & Body',
      category_url: '/category/bath.webp'
    },
    {
      category_id: '34a76a1b-6d4c-4911-9f93-093129c3a4b6',
      category: 'Mosaic & Mixed Media',
      category_url: '/category/mixed-media.webp'
    },
    {
      category_id: 'e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3',
      category: 'Other',
      category_url: '/category/other.webp'
    },
  ]
  
  const newItems = [
    {
      product_id: "1",
      name: "Luxury Bath Soap Set",
      price: 25.0,
      image_url: "/products/bath-bath-set.webp",
      averageRate: 4.5,
    },
    {
      product_id: "2",
      name: "Aromatic Bath Bomb Set",
      price: 15.0,
      image_url: "/products/bath-bathball.webp",
      averageRate: 5,
    },
    {
      product_id: "3",
      name: "Herbal Lightening Cream",
      price: 18.0,
      image_url: "/products/bath-lightening-cream.webp",
      averageRate: 4,
    },
  ];
  
  const popularItems = [
    {
      product_id: "5",
      name: "Handcrafted Jelly Candles",
      price: 20.0,
      image_url: "/products/candles-jelly-candle.webp",
      averageRate: 5,
    },
    {
      product_id: "6",
      name: "Gold Number Birthday Candles",
      price: 5.0,
      image_url: "/products/candles-number-candle.webp",
      averageRate: 5,
    },
    {
      product_id: "7",
      name: "Handcrafted Glass Candle Holders",
      price: 35.0,
      image_url: "/products/glass-candle-holder.webp",
      averageRate: 4.8,
    },
  ];


  return (
    <div className="min-w-[390px]">
      <CategoryNav categories={categories} />
      <ArtisanStory />
      <PromotionWrapper products={newItems} title="What's New" />
      <PromotionWrapper products={popularItems} title="What's Popular" />
    </div>
  );
}
