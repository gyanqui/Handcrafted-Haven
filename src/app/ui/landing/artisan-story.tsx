import { ArtisanStoryProps } from "@/app/lib/definitions";
import Link from "next/link";
import { poppins } from "../font";
import Image from "next/image";

export default function ArtisanStory({artisan}: ArtisanStoryProps) {
  return (
    <div className={`bg-custom-yellow py-8 md:px-12 lg:px-24 md:py-4 lg:py-8`}>
      <h2
        className={`${poppins.className} text-3xl mb-4 text-center md:text-left`}
      >
        ARTISAN STORY
      </h2>
      <div className="flex flex-col items-center md:items-start md:flex-row">
        <div className="max-w-72 h-auto flex-none mb-8 md:mb-0 md:mr-8">
          <Image
            src={
              artisan?.profile_image_url || "/placeholder/user-placeholder.webp"
            }
            width={300}
            height={400}
            alt={`Artisan ${artisan?.firstname} ${artisan?.lastname}'s photo`}
            className="object-contain"
          />
        </div>
        <div className={`flex flex-col justify-between`}>
          <div className="h-[250px] overflow-hidden">
            <h3 className={`${poppins.className} text-2xl mb-4`}>
              {artisan?.firstname} {artisan?.lastname}
            </h3>
            <p className="leading-8 p-2 md:p-0 indent-12">
              {artisan?.introduction}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href={`/home/artisans/${artisan?.seller_id}`}>
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Check it out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
