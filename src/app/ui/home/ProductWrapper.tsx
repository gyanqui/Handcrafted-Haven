import ProductCard from "./ProductCard";
import { Rate } from "antd";
import { Poppins } from "next/font/google";
import { poppins } from "../font";

export default function ProductWrapper() {
  const products = [
    {
      product_id: "1",
      name: "Luxury Bath Soap Set",
      price: 25.0,
      image_url: "/products/bath-bath-set.webp",
      averageRate: 4.5,
    },
    {
      product_id: "2",
      name: "Aromatic Bath Bomb Set",
      price: 15.0,
      image_url: "/products/bath-bathball.webp",
      averageRate: 5,
    },
    {
      product_id: "3",
      name: "Herbal Lightening Cream",
      price: 18.0,
      image_url: "/products/bath-lightening-cream.webp",
      averageRate: 4,
    },
  ];
  return (
    <div className="flex flex-col gap-4 py-2 px-4">
      <h1 className={`${poppins.className} font-extrabold text-center text-xl md:text-2xl lg:text-4xl md:py-2 lg:py-4`}>What's New</h1>
      <div className="flex flex-row overflow-auto lg:justify-center gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            name={product.name}
            url={product.image_url}
            price={product.price}
            rate={product.averageRate}
          />
        ))}
      </div>
    </div>
  );
}
