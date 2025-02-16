import HeroSection from "./ui/landing/hero-section";
import ArtisanStory from "./ui/landing/artisan-story";
import Footer from "./ui/landing/footer";
import { 
  fetchNewProducts,
  fetchPopularProducts
} from "./lib/data";
import PromotionWrapper from "./ui/home/PromotionWrapper";

export default async function Home() {
  const [newProducts, popularProducts ] = await Promise.all([
    fetchNewProducts(),
    fetchPopularProducts()
  ]);
  
  return (
    <>
      <HeroSection />
      <div className="p-5 bg-white md:h-96 lg:h-[450px]">
        <PromotionWrapper data={newProducts} title="New Arrivals" />
      </div>
      <ArtisanStory />
      <PromotionWrapper data={popularProducts} title="Top Products" />
      <Footer />
    </>
  );
}
