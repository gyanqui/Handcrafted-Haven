'use client'
import Image from "next/image";
export default function EmptyProductCard() {
  return (
    <div className="border border-custom-grey rounded-t-3xl w-[200px]">
      <Image
        src="/placeholder/add.webp"
        alt={`add new product`}
        width={300}
        height={300}
        className="rounded-t-3xl"
      />
      <p className="h-12 flex items-start justify-center font-base text-center p-2 leading-4">
        + Add New Product
      </p>
    </div>
  );
}
