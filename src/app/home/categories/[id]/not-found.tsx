"use client";

import { useRouter } from "next/navigation";
import { FaRegFaceFrown } from "react-icons/fa6";
export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center p-8 text-2xl space-x-2">
        <FaRegFaceFrown />
        <p>Oops...The page is not available</p>
      </div>
      <div className="flex justify-center">
        <button onClick={() => router.back()}>Go Back</button>
      </div>
    </>
  );
}
