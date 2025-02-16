import ProductCard from "./ProductCard";
import { poppins } from "../font";
import { ProductPromotion } from "@/app/lib/definitions";

export default function PromotionWrapper({ title, data }: { title: string, data: ProductPromotion[]}) {
  return (
    <div className="flex flex-col gap-4 px-4 bg-white py-2">
      <h1
        className={`${poppins.className} font-extrabold text-center text-xl md:text-2xl lg:text-4xl md:py-2 lg:py-4`}
      >
        <span className="border-b-4 border-custom-yellow">{title}</span>
      </h1>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-evenly my-3">
        {data.map((product) => (
          <ProductCard
            key={product.product_id}
            product_id={product.product_id}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
