import ProductWrapper from "@/app/ui/home/ProductWrapper"
import { ProductProps } from "@/app/lib/definitions"
import { listProducts } from "@/app/lib/data"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Products'
}
export default async function Page() {
    const products: ProductProps[] = await listProducts()
    
    return (
        <div className="py-4">
            <h1 className="text-center text-2xl font-extrabold m-4">Product Listing</h1>
            <div className="px-4">
                <ProductWrapper products={products}/>
            </div>
        </div>
    )
}