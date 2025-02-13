import Link from "next/link"
import { CategoryCardProps } from "@/app/lib/definitions"

function CategoryCard({category_id, category}: {category_id: string, category: string}) {
    return (
        <Link href={`/home/categories/${category_id}`}>
            <div className="p-5 font-bold text-lg">{category}</div>
        </Link>
    )
}

export function CategoryNav({categories}: {categories: CategoryCardProps[]}) {
    return (
        <div className="bg-yellow-300 flex flex-row flex-nowrap max-w-screen overflow-auto whitespace-nowrap">
            {categories && categories.map((category) => (
                <CategoryCard key={category.category_id} category_id={category.category_id} category={category.category}/>
            ))}
        </div>
    )
}