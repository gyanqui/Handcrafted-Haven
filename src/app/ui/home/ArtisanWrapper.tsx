import { ArtisanWrapperProps } from "@/app/lib/definitions";
import ArtisanCard from "./ArtisanCard";
export default function ArtisanWrapper({sellers}: ArtisanWrapperProps) {

  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center">
      {sellers.map((seller) => (
        <ArtisanCard
            key={seller.seller_id}
          seller_id={seller.seller_id}
          seller_email={seller.seller_email}
          introduction={seller.introduction}
          address={seller.address}
          firstname={seller.firstname}
          lastname={seller.lastname}
          profile_image_url={seller.profile_image_url}
        />
      ))}
    </div>
  );
}
