"use server";

import { sql } from "@vercel/postgres";
import { ProductProps } from "./definitions";

export async function listCategories() {
  try {
    const data = await sql`
        SELECT category_id, category, category_url FROM categories
        `;
    return data.rows;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to list categories: ", error.message);
    } else {
      console.error("Failed to list categories: ", error);
    }
    return [];
  }
}

export async function searchProducts(query: string) {
  try {
    if (!query) return [];

    const sqlQuery = `%${query}%`;

    const data = await sql`
            SELECT p.product_id, p.name, p.price, p.image_url AS image_url, 
                   ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
            FROM products p
            LEFT JOIN reviews r ON p.product_id = r.product_id
            LEFT JOIN sellers s ON p.seller_id = s.seller_id
            LEFT JOIN users u ON s.user_id = u.user_id
            LEFT JOIN categories c ON p.category_id = c.category_id

            WHERE p.name ILIKE ${sqlQuery}
                OR c.category ILIKE ${sqlQuery}
                OR u.firstname ILIKE ${sqlQuery}
                OR u.lastname ILIKE ${sqlQuery}
                OR u.username ILIKE ${sqlQuery}
            GROUP BY p.product_id
        `;

    return data.rows;
  } catch (error) {
    console.error("Failed to search products:", error);
    return [];
  }
}
