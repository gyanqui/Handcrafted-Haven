import React from "react";
import TopNav from "../ui/home/TopNav";
import Footer from "../ui/home/Footer";
export const experimental_ppr = true;
import { auth } from '@/auth';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <TopNav session={session ? session : null}/>
      </div>
      <div className="flex-grow mx-0">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
