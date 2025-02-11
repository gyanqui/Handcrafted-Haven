import ProductWrapper from "@/app/ui/home/ProductWrapper";
import EmptyProductCard from "@/app/ui/home/dashboard/EmptyProductCard";
import { getUserProducts } from "@/app/lib/data";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
    const userProducts = await getUserProducts(params.id)
  return (
    <div>
      <p>User ID {params.id} products</p>
      <div className="flex justify-center py-4">
        <EmptyProductCard />
      </div>

      {/* product listing */}
      <div>
        {userProducts.length > 0 ? (
          <ProductWrapper
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
