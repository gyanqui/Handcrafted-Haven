import { getNameByUserId } from "@/app/lib/data"
import Link from "next/link"
import { ProductOutlined } from "@ant-design/icons"
import { TfiCommentAlt } from "react-icons/tfi";


export default async function Layout({children}: {children: React.ReactNode}) {
    // dummy user
    const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a"
    const result = await getNameByUserId(user_id) as { username: string }  //get user info

    return (
        <div className="flex flex-row">
            {/* side menu */}
            <div className="flex flex-col h-[calc(100vh-96px)]">
                <div className="h-8 md:h-24 w-30 md:w-48 px-2 md:px-4 m-1 bg-black text-white md:font-bold flex justify-center items-center rounded-lg">
                    <p className="text-base lg:text-xl">Hello, {result.username}</p>
                </div>

                {/* managements */}
                <div className="flex-grow flex flex-col gap-8 py-4 border border-custom-yellow m-1 px-4 rounded-lg md:text-xl">
                    <div>
                        <Link href={`/home/dashboard/products/${user_id}`}>
                        <ProductOutlined className="inline mr-2" />Products
                        </Link>
                    </div>
                    <div>
                        <Link href={`/home/dashboard/reviews/${user_id}}`}>
                        <TfiCommentAlt className="inline mr-2"/>Reviews
                        </Link>
                    </div>
                </div>

            </div>
            {/* main content */}
            <div>
                {children}
            </div>
        
        </div>
    )
}