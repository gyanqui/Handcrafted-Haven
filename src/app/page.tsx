import HeroSection from "./ui/landing/hero-section";
import ArtisanStory from "./ui/landing/artisan-story";
import Footer from "./ui/landing/footer";
import { 
  fetchNewProducts,
  fetchPopularProducts
} from "./lib/data";
import PromotionWrapper from "./ui/home/PromotionWrapper";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { listCategories } from "./lib/data";
import { CategoryCardProps } from "./lib/definitions";

export default async function Home() {
  const [newProducts, popularProducts ] = await Promise.all([
    fetchNewProducts(),
    fetchPopularProducts()
  ]);
  
  const session = await auth();
  const categories: CategoryCardProps[] | [] = await listCategories()

  return (
    <>
    <SessionProvider session={session}>
      <HeroSection categories={categories}/>
    </SessionProvider>
      <div className="p-5 bg-white md:h-96 lg:h-[450px]">
        <PromotionWrapper data={newProducts} title="New Arrivals" />
      </div>
      <ArtisanStory />
      <PromotionWrapper data={popularProducts} title="Top Products" />
      <Footer />
    </>
  );
}
