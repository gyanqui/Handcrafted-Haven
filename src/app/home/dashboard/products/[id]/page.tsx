import ManageProductWrapper from "@/app/ui/home/dashboard/ManageProductWrapper";
import EmptyProductCard from "@/app/ui/home/dashboard/EmptyProductCard";
import { getUserProducts, getUserBasicDataByUserId } from "@/app/lib/data";
import Link from "next/link";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
    const [userBasicData, userProducts] = await Promise.all([
        getUserBasicDataByUserId(params.id), getUserProducts(params.id)
    ])
    
  return (
    <div>
      {userBasicData && 
        <p className="text-center text-2xl p-4">{userBasicData.username}&apos;s Product Listing</p>}
        <div className="h-[2px] w-[150px] md:w-[350px] bg-custom-yellow mx-auto"></div>
      <div className="flex justify-center py-4">
        <Link href={`/home/dashboard/products/${params.id}/add`}>
            <EmptyProductCard />
        </Link>
      </div>

      {/* product listing */}
      <div>
        {userProducts.length > 0 ? (
          <ManageProductWrapper
            products={userProducts.map((product) => ({
              product_id: product.product_id,
              name: product.name,
              price: product.price,
              image_url: product.image_url,
              averageRate: typeof product.averageRate === "number" ? product.averageRate : parseFloat(product.averageRate),
            }))}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
