import { Rate } from "antd";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  url: string;
  price: number;
  rate: number;
}
export default function ProductCard({
  name,
  url,
  price,
  rate,
}: ProductCardProps) {
  return (
    <div>
      <div className="border border-custom-grey rounded-t-3xl w-[300px]">
        <Image
          src={url}
          alt={`picture of ${name}`}
          width={300}
          height={300}
          className="rounded-t-3xl"
        />
        <p className="h-12 flex items-start justify-center font-bold text-center p-2 leading-4">
          {name}
        </p>
        <div className="flex flex-row justify-between">
          <div className="px-2"><Rate disabled allowHalf defaultValue={rate}/></div>
          <div className="text-right text-xl font-bold px-2">${price}</div>
        </div>
      </div>
    </div>
  );
}
