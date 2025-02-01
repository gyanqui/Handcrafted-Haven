import { HeroSection } from "./ui/hero-section";
import { ArtistStory } from "./ui/artist-story";
import { 
  Heading,
  ArrivalCard,
  NewPopularCard
} from "@/app/ui/home/PromotionComponents";
import Footer from "./ui/home/footer"
import CategoriesSection from "./ui/home/categoriesSection"


export default function Home() {
  return (
    <>
      <HeroSection />
      <div><CategoriesSection/></div>
      <div className="p-5 bg-white md:h-96 lg:h-[450px]">
        <Heading content="New Arrivals" />
        <div className="flex justify-evenly my-5">
          <ArrivalCard />
          <ArrivalCard />
          <ArrivalCard />
        </div>
      </div>
      <ArtistStory />
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
