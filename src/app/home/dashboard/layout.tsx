import { getUserBasicDataByEmail } from "@/app/lib/data"
import Link from "next/link"
import { ProductOutlined } from "@ant-design/icons"
import { TfiCommentAlt } from "react-icons/tfi";
import { HiOutlineIdentification } from "react-icons/hi";
import { auth } from "@/auth";

export default async function Layout({children}: {children: React.ReactNode}) {
   const session = await auth();
   const email: string | null = session?.user?.email ?? null;
   
    const user = email && await getUserBasicDataByEmail(email)
    
    return (
        <div className="flex flex-row mx-1">
            {/* side menu */}
            <div className="flex flex-col h-[calc(100vh-96px)]">
                <div className="h-8 md:h-24 w-30 md:w-48 px-2 md:px-4 m-1 bg-black text-white md:font-bold flex justify-center items-center rounded-lg">
                    <Link href='/home/dashboard/profile'>
                        <p className="text-base lg:text-xl">Hello {`${user ? user.username: ''}`}</p>
                    </Link>
                </div>

                {/* managements */}
                <div className="flex-grow flex flex-col gap-8 py-4 border border-custom-yellow m-1 px-4 rounded-lg md:text-xl">
                    <div>
                        <Link href={`/home/dashboard/profile/${user && user?.user_id}`}>
                            <HiOutlineIdentification className="inline mr-2"/>Profile
                        </Link>
                    </div>
                    <div>
                        <Link href={`/home/dashboard/products/${user && user.user_id}`}>
                            <ProductOutlined className="inline mr-2" />Products
                        </Link>
                    </div>
                    <div>
                        <Link href={`/home/dashboard/reviews/${user && user.user_id}`}>
                            <TfiCommentAlt className="inline mr-2"/>Reviews
                        </Link>
                    </div>
                </div>

            </div>

            {/* main content */}
            <div className="flex-grow h-[calc(100vh-96px)] overflow-auto">
                {children}
            </div>
        
        </div>
    )
}