import CategoryCard from "@/app/ui/home/CategoryCard";
import { listCategories } from "@/app/lib/data";
import { Breadcrumb } from "antd";
import Link from "next/link";

export default async function Page() {
  const categories = await listCategories();
  const breadcrumbItems = [
    { title: <Link href="/home">Home</Link> },
    { title: <Link href="/home/categories">Category</Link> }, // show all categories
  ];

  return (
    <div className="px-8 py-4">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-center text-2xl font-extrabold m-4">
        Category Listing
      </h1>
      <div className="flex flex-row flex-wrap gap-8 px-8">
        {categories &&
          categories.map((category) => (
            <CategoryCard
              key={category.category_id}
              category_id={category.category_id}
              category={category.category}
              category_url={category.category_url}
            />
          ))}
      </div>
    </div>
  );
}
