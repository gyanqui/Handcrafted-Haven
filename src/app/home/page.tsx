import ArtisanStory from "../ui/landing/artisan-story";
import CategoryNav from "../ui/home/CategoryNav";
import PromotionWrapper from "../ui/home/PromotionWrapper";
import { fetchNewProducts, fetchPopularProducts } from "../lib/data";

export default async function Page() {
  const [ newProducts, popularProducts ] = await Promise.all([
    fetchNewProducts(),
    fetchPopularProducts()
  ]);
  
  return (
    <div className="min-w-[390px]">
      <CategoryNav />
      <ArtisanStory />
      <PromotionWrapper data={newProducts} title="What's New" />
      <PromotionWrapper data={popularProducts} title="What's Popular" />
    </div>
  );
}
