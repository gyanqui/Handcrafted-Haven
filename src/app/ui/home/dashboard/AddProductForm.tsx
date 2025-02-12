"use client";

import { addProduct } from "@/app/lib/data";
import { AddProductFormProps } from "@/app/lib/definitions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductForm({
  categories,
  seller_id,
  user_id,
}: AddProductFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    image_url: "",
    category_id: "",
    seller_id: seller_id,
    created_at: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please input a product name";
    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Please input a price";
    if (!formData.quantity || Number(formData.quantity) <= 0)
      newErrors.quantity = "Please input product quantity";
    if (!formData.description)
      newErrors.description = "Please input product description";
    if (!formData.category_id)
      newErrors.category_id = "Please select a category";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true means no errors
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const updatedFormData = {
      ...formData,
      created_at: new Date().toISOString(),
    };
    try {
      await addProduct(updatedFormData);
      router.push(`/home/dashboard/products/${user_id}`);
    } catch (error) {
      console.error("Unable to add a product: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto">
      <h1 className="text-2xl font-bold">Add a Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-4">
        {/* product name */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
          {errors.name ? (
            <div className="text-red-600 text-xs">{errors.name}</div>
          ) : (
            <div className="text-xs invisible">No errors</div>
          )}
        </div>

        {/* price */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
          {errors.price ? (
            <div className="text-red-600 text-xs">{errors.price}</div>
          ) : (
            <div className="text-xs invisible">No errors</div>
          )}
        </div>

        {/* quantity */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
          {errors.quantity ? (
            <div className="text-red-600 text-xs">{errors.quantity}</div>
          ) : (
            <div className="text-xs invisible">No errors</div>
          )}
        </div>

        {/* description */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Description
          </label>
          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          />
          {errors.description ? (
            <div className="text-red-600 text-xs">{errors.description}</div>
          ) : (
            <div className="text-xs invisible">No errors</div>
          )}
        </div>

        {/* image url */}
        <div className="flex flex-col">
          <label>Image URL</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="border rounded-md mt-1 p-1"
          />
        </div>

        {/* category */}
        <div className="flex flex-col">
          <label className="after:content-['*'] after:text-red-600">
            Category
          </label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="border rounded-md mt-1 p-1"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category_id ? (
            <div className="text-red-600 text-xs">{errors.category_id}</div>
          ) : (
            <div className="text-xs invisible">No errors</div>
          )}
        </div>

        {/* hidden seller_id & created_at */}
        <input type="hidden" name="seller_id" value={formData.seller_id} />
        <input type="hidden" name="created_at" value="" />

        <button type="submit" className="bg-custom-yellow rounded-md mt-1 p-1">
          Add Product
        </button>
      </form>
    </div>
  );
}
