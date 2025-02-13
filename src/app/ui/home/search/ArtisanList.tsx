import ArtisanWrapper from "../ArtisanWrapper";
import { ArtisanListProps } from "@/app/lib/definitions";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ArtisanList({
  artisanResult,
  query,
}: ArtisanListProps) {
  return (
    <div  className="px-1 md:px-2 lg:px-8">
      {artisanResult.length > 0 ? (
        <ArtisanWrapper
          sellers={artisanResult.map((artisan) => ({
            seller_id: artisan.seller_id,
            seller_email: artisan.seller_email,
            introduction: artisan.introduction,
            username: artisan.username,
            firstname: artisan.firstname,
            lastname: artisan.lastname,
            profile_image_url: artisan.profile_image_url,
            address: artisan.address,
          }))}
        />
      ) : (
        <div className="text-xl text-center">
          <FaExclamationTriangle className="inline text-custom-yellow mx-2" />
          No data related to &quot;{query}&quot; found in our artisans
        </div>
      )}
    </div>
  );
}
