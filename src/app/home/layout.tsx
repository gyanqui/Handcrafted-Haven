import React from "react";
import TopNav from "../ui/home/TopNav";
import Footer from "../ui/home/Footer";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-screen min-h-screen">
      <div>
        <TopNav />
      </div>
      <div className="flex-grow bg-white w-full">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
