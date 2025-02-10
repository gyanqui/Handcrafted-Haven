import Image from "next/image";
import { Rate } from "antd";
import Link from "next/link";
import { ReviewProps } from "@/app/lib/definitions";

export default function ReviewCard({product_id, image_url, username, rating, created_at, product_name, review }: ReviewProps) {
  return (
    <div className="flex flex-row border border-custom-yellow rounded-2xl min-w-[380px]">
      {/* product image container */}
      <div className="w-[150px] min-w-[150px]">
        <Link href={`/home/products/${product_id}`}>
            <Image
            src={image_url}
            width={150}
            height={150}
            alt={`${product_name}`}
            className="rounded-l-2xl"
            />
        </Link>
      </div>

      {/* review data */}
      <div className="flex flex-col flex-shrink w-[250px] h-[150px] overflow-hidden p-1">
        <div>
            <span className="font-bold">{username}</span>
            <span className="text-xs px-2">{created_at}</span>
        </div>
        <div><Rate allowHalf disabled defaultValue={rating}/></div>
        <div className="text-gray-500 text-sm line-clamp-4">{review}</div>
      </div>
    </div>
  );
}
