import Image from "next/image"

interface CategoryCardProps {
    name: string;
    url: string;
}
export default function CategoryCard({name, url} : CategoryCardProps) {
    return (
        <div>
            <div className="border border-custom-grey rounded-t-xl w-[150px]">
                <Image src={url} alt={`${name} picture`} width={150} height={200}/>
                <p className="h-12 flex items-center justify-center font-bold text-center">{name}</p>
            </div>
        </div>
    )
}