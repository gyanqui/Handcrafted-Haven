"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SellerFormValues } from "@/app/lib/definitions";
import { addSeller } from "@/app/lib/data";

export default function AddSellerForm({
  user_id,
  email,
}: {
  user_id: string;
  email: string;
}) {
  const router = useRouter();
  const [isLoginEmail, setIsLoginEmail] = useState(false);
  const [formData, setFormData] = useState<SellerFormValues>({
    seller_email: "",
    address: "",
    introduction: "",
    status: "active",
    user_id: user_id,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // toggle email checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsLoginEmail(isChecked);
    setFormData((prev) => ({
      ...prev,
      seller_email: isChecked ? email : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // console.log('form: ', formData)
      await addSeller(formData)
      alert("You are a seller now.  Let's add a product post. Redirecting...")
      setTimeout(() => {
        router.refresh();
      }, 2000);
    } catch (error) {
      console.error("Unable to become a seller: ", error);
    }
  };
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto">
      <h1 className="text-2xl font-bold mt-4">Become a Seller</h1>
      <p className="bg-gray-200 p-2 rounded">
        You have to fill out the seller form first to start your business. Once
        the seller form is submitted successfully, you can start to post a
        product.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-4">
        {/* seller_email */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Email
            <div className="inline ml-4 space-x-2 text-gray-500 text-sm">
              <input
                type="checkbox"
                id="email"
                checked={isLoginEmail}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="email">Use your login email</label>
            </div>
          </label>
          <input
            type="email"
            name="seller_email"
            value={formData.seller_email}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
        </div>

        {/* address */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
        </div>

        {/* introduction */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Introduction
          </label>
          <input
            type="text"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
        </div>

        {/* hidden area */}
        {/* user_id */}
        <input type="hidden" name="user_id" value={formData.user_id} />

        {/* status */}
        <input type="hidden" name="status" value={formData.status} />

        <button type="submit" className="bg-custom-yellow rounded-md mt-1 p-1">
          Become a Seller
        </button>
      </form>
    </div>
  );
}
