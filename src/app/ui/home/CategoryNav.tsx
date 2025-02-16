import { listCategories } from "@/app/lib/data";
import CategoryCard from "./CategoryCard";

export default async function CategoryNav() {

  const categories = await listCategories();

  return (
    <div className="flex flex-row items-center mx-8 my-4 p-1 gap-4 overflow-x-auto h-[280px]">
      {categories && categories.map((category) => (
        <CategoryCard
          key={category.category_id}
          category_id={category.category_id}
          category={category.category}
          category_url={category.category_url}
        />
      ))}
    </div>
  );
}
