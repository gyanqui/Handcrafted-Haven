import React from "react";
import TopNav from "../ui/home/TopNav";
import Footer from "../ui/home/Footer";
import { auth } from "@/auth";
import {Session} from '../lib/definitions'
export const experimental_ppr = true;

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth() as Session
  
  return (
    <div className="flex flex-col max-w-screen min-h-screen">
      <div>
        <TopNav session={session ?? undefined} />
      </div>
      <div className="flex-grow bg-white w-full">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
