import AddProductForm from "@/app/ui/home/dashboard/AddProductForm"
import { getSellerIdByUserId, listCategories } from "@/app/lib/data"

type Params = {
    id: string;
}

export default async function Page({params}: {params: Params}) {
    const user_id = params.id
    const [seller, categories] = await Promise.all([
        getSellerIdByUserId(user_id),
        listCategories().then(rows => rows.map((row) => ({
            category_id: row.category_id,
            name: row.category
            
        })))
    ])
    
    return (
        <div>
            
            {seller && <AddProductForm categories={categories} seller_id={seller.seller_id}/>}
        </div>
    )
}