'use client'

import { AddProductFormProps, ProductFormValues} from "@/app/lib/definitions"
import { useState } from "react"

export default function AddProductForm({categories, seller_id}: AddProductFormProps) {
    const [formData, setFormData] = useState({seller_id: seller_id ?? ""})
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedFormData = {
            ...formData, created_at: new Date().toISOString()
        }
        console.log('updatedFormData: ', updatedFormData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <label>Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="flex flex-row">
                    <label>Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required/>
                </div>
                <div className="flex flex-row">
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required/>
                </div>
                <div className="flex flex-row">
                    <label>Description</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required/>
                </div>
                <div className="flex flex-row">
                    <label>Image URL</label>
                    <input type="text" name="image_url" value={formData.image_url} onChange={handleChange}/>
                </div>
                <div className="flex flex-row">
                    <label>Category</label>
                    <select name="category_id" value={formData.category_id} onChange={handleChange} required>
                        <option value="" disabled>Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.category_id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <input type="hidden" name="seller_id" value={formData.seller_id} />
                <input type="hidden" name="created_at" value="" />

                <button type="submit" className="bg-custom-yellow">Add Product</button>
            </form>
        </div>
    )
}