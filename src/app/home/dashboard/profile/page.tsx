
import { auth } from "@/auth";
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Profile'
  }
// type Params = {
//     id: string | null;
// }

// export default function Page({params}: {params: Params}) {
export default async function Page() {
    const session = await auth();
    
    if (!session) {
        return (
            redirect('/home/login')
        )
    }
    const memberSince = formatISODateToMDY(session.user.created_at);
    
    return (
        <>
        {/* <p className="mx-6 my-4">
            User ID: {session?.user.user_id}

        </p> */}
        <fieldset className="bg-gray-50 mx-4 my-4 rounded-xl">
            <legend className="mx-6 text-xl ">Personal information</legend>
        {/* <section className="mx-6 my-4 border-2 border-custom-grey rounded-lg"> */}
        <section className="mx-6 my-4 border-2 rounded-lg">
                <div className="my-2 flex justify-center">
                    <div>
                    {/* <b>Your Image</b>: */}
                    <Image
                        src={session?.user.profile_image_url || "/placeholder/user-placeholder.webp"}
                        width={100}
                        height={100}
                        alt={`${session?.user.firstname} ${session?.user.lastname}'s photo`}
                        className="object-contain rounded-full"
                        loading= "lazy"
                        />
                    <p className="justify-center">
                    {session?.user.firstname} {session?.user.lastname} 
                    </p>

                    </div>
                </div>
            {/* <div className="mx-4 my-4 flex flex-col "> */}
            <div className="mx-4 my-4 grid md:grid-cols-2 ">
            {/* <div className="mx-4 my-4 grid auto-cols-1 grid-flow-col"> */}
                {/* <p className="flex  gap-10 m-auto justify-between"> */}
                {/* <p className="grid "> */}
                    <span className="my-2 md:pl-20 lg:pl-[14rem] ">
                        <b>First name</b>: 
                    </span>
                    <span className="my-2">
                        {session?.user.firstname} 
                    </span>
                {/* </p> */}
                {/* <p className="flex  gap-10 m-auto justify-between"> */}
                {/* <p className="grid "> */}
                    <span className="my-2 md:pl-20 lg:pl-[14rem] ">
                        <b>Lastname</b>: 
                    </span>
                    <span className="my-2">
                       {session?.user.lastname} 
                    </span>
                {/* </p> */}
                {/* <p className="flex  gap-10 m-auto justify-between"> */}
                {/* <p className="grid "> */}
                    <span className="my-2 md:pl-20 lg:pl-[14rem] ">
                        <b>Username</b>:
                    </span>
                    <span className="my-2">
                        {session?.user.username}
                    </span>
                {/* </p> */}
                {/* <p className="flex  gap-10 m-auto justify-between"> */}
                {/* <p className="grid "> */}
                    <span className="my-2 md:pl-20 lg:pl-[14rem] ">
                        <b>Member since</b>:
                    </span>
                    <span className="my-2">
                        {memberSince} 
                    </span>
                {/* </p> */}
                {/* <p className="flex  gap-10 m-auto justify-between"> */}
                {/* <p className="grid "> */}
                    <span className="my-2 md:pl-20 lg:pl-[14rem] ">
                        <b>Email</b>:
                    </span>
                    <span className="my-2">
                        {session?.user.email} 
                    </span>
                {/* </p> */}
            </div>
        </section>
        </fieldset>
        </>
    )
}

function formatISODateToMDY(isoDate: string): string {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' }); // This will give the full name of the month
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${month}-${day}-${year}`;
  }