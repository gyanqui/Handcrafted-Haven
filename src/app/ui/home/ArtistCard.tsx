import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { BsShopWindow } from "react-icons/bs";
import Link from "next/link";

interface ArtistCardProps {
  seller_id: string;
  profile_picture: string | null;
  firstname: string;
  lastname: string;
  seller_email: string;
  address: string;
  introduction: string;
}

export default function ArtistCard({
  seller_id,
  profile_picture,
  firstname,
  lastname,
  seller_email,
  address,
  introduction,
}: ArtistCardProps) {
  return (
    <div
      className="flex flex-row w-fit border border-black rounded-xl"
      key={seller_id}
    >
      <div className="w-[150px] h-[200px]">
        <Link href={`/home/artists/${seller_id}`}>
          <Image
            src={profile_picture || '/placeholder/user-placeholder.webp'}
            alt={`${firstname} ${lastname}'s photo`}
            width={300}
            height={400}
            className="rounded-l-lg"
          />
        </Link>
      </div>
      <div className="px-4 w-[300px] h-[200px] overflow-hidden relative">
        <p className="text-center">
          <span className="font-extrabold text-2xl">
            {firstname} {lastname}
          </span>
          <a href={`mailto:${seller_email}`}>
            <FiMail className="inline mx-1" />
          </a>
        </p>
        <p className="text-sm py-4 text-center">
          <BsShopWindow className="inline mx-1" />
          <span>{address}</span>
        </p>
        <p className="line-clamp-3">{introduction}</p>
        <Link href={`/home/artists/${seller_id}`}>
          <div className="bg-white absolute bottom-0 right-5 px-4">more</div>
        </Link>
      </div>
    </div>
  );
}
