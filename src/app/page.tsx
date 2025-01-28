import { HeroSection } from "./ui/hero-section";
import { ArtistStory } from "./ui/artist-story";
import { ArrivalCard } from "./ui/home/arrival-card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-60 bg-white md:h-96 lg:h-[450px]">
        <h2 className="text-black text-xl font-extrabold ml-10 pt-5 pb-2 md:text-5xl md:pb-7 lg:ml-24">
          New Arrivals
        </h2>
        <div className="flex justify-evenly">
          <ArrivalCard />
          <ArrivalCard />
          <ArrivalCard />
        </div>
      </div>
      <ArtistStory />
    </>
  );
}
