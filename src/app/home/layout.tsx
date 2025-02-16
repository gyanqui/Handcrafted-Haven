import React from "react";
import TopNav from "../ui/home/TopNav";
import Footer from "../ui/home/Footer";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-screen min-h-screen">
      <TopNav />
      <main className="flex-grow bg-white ">{children}</main>
      <Footer />
    </div>
  );
}
