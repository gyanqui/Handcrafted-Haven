import React from "react";
import TopNav from "../ui/home/TopNav";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <div>
        <TopNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
