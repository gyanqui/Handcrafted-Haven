import ProductCard from "./ProductCard";
import { ProductWrapperProps } from "@/app/lib/definitions";

export default function ProductWrapper({ products }: ProductWrapperProps) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.product_id}
          product_id={product.product_id}
          name={product.name}
          image_url={product.image_url}
          price={product.price}
          averageRate={product.averageRate}
        />
      ))}
    </div>
  );
}
