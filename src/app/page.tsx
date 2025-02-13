import HeroSection from "./ui/landing/hero-section";
import ArtisanStory from "./ui/landing/artisan-story";
import {
  Heading,
  ArrivalCard,
  NewPopularCard,
} from "@/app/ui/landing/PromotionComponents";
import Footer from "./ui/landing/footer";
import { getArtisanStory } from "./lib/data";

export default async function Home() {
  const artisan = await getArtisanStory()
  return (
    <>
      <HeroSection />
      <div className="p-5 bg-white md:h-96 lg:h-[450px]">
        <Heading content="New Arrivals" />
        <div className="flex justify-evenly my-5">
          <ArrivalCard />
          <ArrivalCard />
          <ArrivalCard />
        </div>
      </div>
      {artisan && <ArtisanStory artisan={artisan}/>}
      <div className="bg-white p-5 md:flex justify-evenly">
        <NewPopularCard />
        <NewPopularCard />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
