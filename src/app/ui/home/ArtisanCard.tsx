import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { BsShopWindow } from "react-icons/bs";
import Link from "next/link";
import { ArtisanCardProps } from "@/app/lib/definitions";

export default function ArtisanCard({
  seller_id,
  profile_image_url,
  firstname,
  lastname,
  seller_email,
  address,
  introduction,
}: ArtisanCardProps) {
  return (
    <div
      className="flex flex-row w-fit border border-black rounded-xl min-w-[390px] mx-2"
      key={seller_id}
    >
      <div className="min-w-[150px] w-[150px] min-h-[200px] h-[200px] ">
        <Link href={`/home/artisans/${seller_id}`}>
          <Image
            src={profile_image_url || '/placeholder/user-placeholder.webp'}
            alt={`${firstname} ${lastname}'s photo`}
            width={300}
            height={400}
            className="rounded-l-xl"
          />
        </Link>
      </div>
      <div className="px-4 w-[300px] overflow-hidden relative">
        <p className="text-center">
          <span className="font-extrabold text-2xl">
            {firstname} {lastname}
          </span>
          <a href={`mailto:${seller_email}`}>
            <FiMail className="inline mx-1" />
          </a>
        </p>
        <p className="text-sm py-2 md:py-4 text-center">
          <BsShopWindow className="inline mx-1" />
          <span>{address}</span>
        </p>
        <p className="line-clamp-2 md:line-clamp-3">{introduction}</p>
        <Link href={`/home/artisans/${seller_id}`}>
          <div className="bg-white absolute bottom-0 right-5 px-4">more</div>
        </Link>
      </div>
    </div>
  );
}
