import { Rate } from "antd";
import Image from "next/image";
import { ProductProps } from "./ProductWrapper";
import Link from "next/link";

export default function ProductCard({
  name,
  image_url,
  price,
  averageRate,
  product_id
}: ProductProps) {
  return (
    <div>
      <div className="border border-custom-grey rounded-t-3xl w-[300px]">
      <Link href={`/home/products/${product_id}`}>
        <Image
          src={image_url}
          alt={`picture of ${name}`}
          width={300}
          height={300}
          className="rounded-t-3xl"
        />
        <p className="h-12 flex items-start justify-center font-bold text-center p-2 leading-4">
          {name}
        </p>
        <div className="flex flex-row justify-between">
          <div className="px-2">
            <Rate disabled allowHalf defaultValue={averageRate} />
          </div>
          <div className="text-right text-xl font-bold px-2">${price}</div>
        </div>
      </Link>
      </div>
    </div>
  );
}
