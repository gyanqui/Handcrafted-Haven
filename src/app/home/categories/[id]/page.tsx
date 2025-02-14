import { Breadcrumb } from "antd";
import Link from "next/link";
import { listCategories, listProductsByCategoryId } from "@/app/lib/data";
import ProductWrapper from "@/app/ui/home/ProductWrapper";

export default async function Page({params}: {params: {id: string}}) {
  const id = params.id
  const categories = await listCategories()
  const productByCategory = await listProductsByCategoryId(id)
  const category = categories.find(category => category.category_id === id);
  const categoryName = category ? category.category : 'Unknown Category';
  
  const breadcrumbItems = [
    { title: <Link href="/home">Home</Link> },
    { title: <Link href="/home/categories">Category</Link> }, // show all categories
    { title: categoryName }, // show products belonging to this category
  ];
  return (
    <div className="px-8 py-4">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-center text-2xl font-extrabold m-4">{categoryName}</h1>
      <ProductWrapper products={productByCategory}/>
    </div>
  );
}
