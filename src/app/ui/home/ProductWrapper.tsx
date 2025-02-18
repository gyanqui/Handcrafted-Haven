import ProductCard from "./ProductCard";
import { ProductProps } from "@/app/lib/definitions";

export default function ProductWrapper({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.product_id}
            product_id={product.product_id as `${string}-${string}-${string}-${string}-${string}`}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
            rating={product.averageRate}
          />
        ))}
    </div>
  );
}
