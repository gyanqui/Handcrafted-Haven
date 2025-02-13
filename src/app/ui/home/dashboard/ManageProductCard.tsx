'use client'

import { Rate } from "antd";
import Image from "next/image";
import { ProductProps } from "@/app/lib/definitions";
import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteProduct } from "@/app/lib/data";
import { useRouter } from "next/navigation";

export default function ManageProductCard({
  name,
  image_url,
  price,
  averageRate,
  product_id,
}: ProductProps) {
    const router = useRouter()
    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(product_id)
            alert('product deleted successfully') 
            router.refresh()
        } catch (error) {
            console.error("Error deleting product: ", error)
        }
    }

  return (
    <div className="border border-custom-grey rounded-t-3xl w-[200px] relative">
        <button><RiDeleteBin5Fill className="absolute top-2 right-3 text-2xl" onClick={handleDeleteProduct} /></button>
      <Link href={`/home/products/${product_id}`}>
        <Image
          src={image_url && (image_url.startsWith('http') || image_url.startsWith('/')) ? image_url : "/placeholder/product-placeholder.webp"}
          alt={`picture of ${name}`}
          width={300}
          height={300}
          className="rounded-t-3xl"
        />
        <p className="h-12 flex items-start justify-center font-base text-center p-2 leading-4">
          {name}
        </p>
        <div className="flex flex-row justify-between">
          <div className="px-2">
            <Rate
              disabled
              allowHalf
              defaultValue={averageRate}
              style={{ fontSize: ".9rem" }}
            />
          </div>
          <div className="text-right text-xl font-bold px-2">
            <span className="text-sm">$</span>
            {price}
          </div>
        </div>
      </Link>
    </div>
  );
}
