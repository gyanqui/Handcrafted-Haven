import Image from "next/image";
import Link from "next/link";
import { CategoryCardProps } from "@/app/lib/definitions";

export default function CategoryCard({
  category_id,
  category,
  category_url,
}: CategoryCardProps) {
  return (
    <div key={category_id}>
      <Link href={`/home/categories/${category_id}`}>
        <div className="border border-custom-grey rounded-t-xl w-[150px]">
          <Image
            src={category_url}
            alt={`${category} picture`}
            width={150}
            height={200}
            className="rounded-t-xl"
          />
          <p className="h-12 flex items-start justify-center font-bold text-center p-2 leading-4">
            {category}
          </p>
        </div>
      </Link>
    </div>
  );
}
