import HeroSection from "./ui/landing/hero-section";
import ArtisanStory from "./ui/landing/artisan-story";
import {
  Heading,
  ArrivalCard,
  NewPopularCard,
} from "@/app/ui/landing/PromotionComponents";
import Footer from "./ui/landing/footer";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { getArtisanStory, listCategories } from "./lib/data";
import { CategoryCardProps } from "./lib/definitions";

export default async function Home() {
  const session = await auth();
  const artisan= await getArtisanStory()
  const categories: CategoryCardProps[] | [] = await listCategories()

  return (
    <>
    <SessionProvider session={session}>
      <HeroSection categories={categories}/>
    </SessionProvider>
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
