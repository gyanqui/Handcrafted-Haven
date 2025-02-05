import Image from "next/image"
import Link from "next/link";
import { CategoryCardProps } from "@/app/lib/definitions";

export default function CategoryCard({name, url, id} : CategoryCardProps) {
    return (
        <div>
            <Link href={`/home/categories/${id}`}>
                <div className="border border-custom-grey rounded-t-xl w-[150px]">
                    <Image src={url} alt={`${name} picture`} width={150} height={200} className="rounded-t-xl"/>
                    <p className="h-12 flex items-start justify-center font-bold text-center p-2 leading-4">{name}</p>
                </div>
            </Link>
        </div>
    )
}