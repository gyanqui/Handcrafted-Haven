// import HandCraftedLogo from '@/app/ui/handcrafted-logo';
import SignUpForm from '@/app/ui/sign-up-form';
import { Metadata } from 'next';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title : 'Sign-Up'
}
 
export default async function SignUpPage() {
  const session = await auth();
    if (session) {
      redirect('/home');
    }
  return (
    // <main className="flex items-center justify-center md:h-screen">
    <main className="flex items-center justify-center md:h-full">
      {/* <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4"> */}
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-30">
        {/* <div className="flex h-20 w-full items-end rounded-lg bg-custom-yellow p-3 md:h-32 ">
          <div className="w-32 text-white md:w-36 ">
            <HandCraftedLogo />
          </div>
        </div> */}
        <SignUpForm />
        <div>
            <Link href='/home/login'>
                <span className='text-blue-500 hover:text-purple-500 text-sm mt-5 mb-3 px-4 '>
                    Already have an account?
                </span>
            </Link>
        </div>
      </div>
    </main>
  );
}