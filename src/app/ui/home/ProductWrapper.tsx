import ProductCard from "./ProductCard";
import { poppins } from "../font";
import Image from "next/image";
export interface ProductProps {
  product_id: string;
  name: string;
  image_url: string;
  price: number;
  averageRate: number;
}

interface ProductWrapperProps {
  products: ProductProps[];
  title: string;
}

export default function ProductWrapper({
  products,
  title,
}: ProductWrapperProps) {
  return (
    <div className="flex flex-col gap-4 py-2 px-4">
      <h1
        className={`${poppins.className} font-extrabold text-center text-xl md:text-2xl lg:text-4xl md:py-2 lg:py-4`}
      >
        <span className="border-b-4 border-custom-yellow">{title}</span>
      </h1>
      <div className="flex flex-row overflow-auto lg:justify-center gap-4">
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
    </div>
  );
}
