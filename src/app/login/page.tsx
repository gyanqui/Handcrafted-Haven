import HandCraftedLogo from '@/app/ui/handcrafted-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import Link from 'next/link';
// import { revalidatePath } from 'next/cache';
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title : 'Login'
}
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        {/* <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36 "> */}
        <div className="flex h-20 w-full items-end rounded-lg bg-custom-yellow p-3 md:h-36 ">
          <div className="w-32 text-white md:w-36">
            <HandCraftedLogo />
          </div>
        </div>
        <LoginForm />
        <div >
            <span className='px-4 text-sm' >
                Not a member yet?&nbsp;
                <Link href={'/sign-up'}>
                    <span className='text-blue-400 hover:text-purple-500 underline'>
                        Sign up now!   
                    </span>
                </Link> 
            </span>
        </div>
      </div>
    </main>
  );
}