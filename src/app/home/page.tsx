import ArtisanStory from "../ui/landing/artisan-story";
import CategoryNav from "../ui/home/CategoryNav";
import PromotionWrapper from "../ui/home/PromotionWrapper";
import { listCategories } from "../lib/data";
import { getArtisanStory } from "../lib/data";

export default async function Page() {
  const categories = (await listCategories() || []).map(category => ({
    category_id: category.category_id,
    category: category.category,
    category_url: category.category_url
  }));
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

  const artisan = await getArtisanStory();

  return (
    <div className="min-w-[390px]">
      <CategoryNav categories={categories} />
      <ArtisanStory artisan={artisan}/>
      <PromotionWrapper products={newItems} title="What's New" />
      <PromotionWrapper products={popularItems} title="What's Popular" />
    </div>
  );
}
