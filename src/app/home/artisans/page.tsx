import ArtisanWrapper from "@/app/ui/home/ArtisanWrapper";
import { ArtisanCardProps } from "@/app/lib/definitions";
import { fetchAllSellers } from "@/app/lib/data";

export default async function Page() {
  const sellers: ArtisanCardProps[] = await fetchAllSellers();

  return (
    <div className="py-4">
      <h1 className="text-center text-2xl font-extrabold m-4">Artisan Listing</h1>
      <div className="px-4">
        <ArtisanWrapper sellers={sellers} />
      </div>
    </div>
  );
}
