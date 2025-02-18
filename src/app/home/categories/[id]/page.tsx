import { Breadcrumb } from "antd";
import Link from "next/link";
import { listCategories, listProductsByCategoryId, listCategory } from "@/app/lib/data";
import ProductWrapper from "@/app/ui/home/ProductWrapper";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  id: string;
}

export async function generateMetadata(
  {params}: {params: Promise<Params>}
): Promise<Metadata> {
  const id = (await params).id
  const category = await listCategory(id)

  if (!category) {
    notFound()
  }

    return {
      title: category?.category || "Unknown Category"
    }

}

export default async function Page({params}: {params: Promise<Params>}) {
  const {id} = await params
  const categories = await listCategories()
  const productsByCategory = await listProductsByCategoryId(id)
  
  if (productsByCategory.length ===0 || !productsByCategory) {
    notFound();
  }
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
      <ProductWrapper products={productsByCategory}/>
    </div>
  );
}
