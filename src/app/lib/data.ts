"use server";

import { sql } from "@vercel/postgres";

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
            LEFT JOIN categories c ON p.category_id = c.category_id
            LEFT JOIN reviews r ON r.product_id = p.product_id

            WHERE p.name ILIKE ${sqlQuery}
                OR c.category ILIKE ${sqlQuery}
                OR p.description ILIKE ${sqlQuery}
            GROUP BY p.product_id
        `;

    return data.rows;
  } catch (error) {
    console.error("Failed to search products:", error);
    return [];
  }
}

export async function searchArtisans(query: string) {
  try {
    if (!query) return [];

    const sqlQuery = `%${query}%`;

    const data = await sql`
      SELECT s.seller_id, s.seller_email, s.introduction, u.username, u.firstname, u.lastname, u.profile_image_url, s.address
      FROM sellers s
      JOIN users u on s.user_id = u.user_id
      
      WHERE s.seller_email ILIKE ${sqlQuery}
      OR s.introduction ILIKE ${sqlQuery}
      OR u.username ILIKE ${sqlQuery}
      OR u.firstname ILIKE ${sqlQuery}
      OR u.lastname ILIKE ${sqlQuery}
      OR s.address ILIKE ${sqlQuery}
    `;

    return data.rows;
  } catch (error) {
    console.error("Failed to get artisans search result: ", error);
    return [];
  }
}

export async function searchReviews(query: string) {
  try {
    if (!query) return [];

    const sqlQuery = `%${query}%`;

    const data = await sql`
      SELECT r.review_id, r.product_id, p.image_url, u.username, p.name AS product_name, r.created_at, r.rating, r.review
      FROM reviews r
      JOIN products p ON r.product_id = p.product_id
      JOIN sellers s ON p.seller_id = s.seller_id
      JOIN users u ON s.user_id = u.user_id

      WHERE r.title ILIKE ${sqlQuery}
      OR r.review ILIKE ${sqlQuery}
      OR p.name ILIKE ${sqlQuery}
    `;
    return data.rows;
  } catch (error) {
    console.error("Failed to get reviews search result: ", error);
    return [];
  }
}

export async function getNameByUserId(user_id: string) {
  try {
    const data = await sql`
      SELECT u.username
      FROM users u
      WHERE u.user_id = ${user_id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Failed to get username by user ID: ", error);
    return [];
  }
}

export async function getUserProducts(user_id: string) {
  try {
    const data = await sql`
      SELECT p.product_id, p.name, p.image_url, p.price, ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
      FROM users u
      LEFT JOIN sellers s ON s.user_id = u.user_id
      JOIN products p ON p.seller_id = s.seller_id
      LEFT JOIN reviews r ON r.product_id = p.product_id
      
      WHERE u.user_id = ${user_id}
      
      GROUP BY p.product_id
    `;
    return data.rows;
  } catch (error) {
    console.error(`Failed to get the user's product listing: `, error);
    return [];
  }
}

export async function getUserBasicData(user_id: string) {
  try {
    if (!user_id) return
    const data = await sql`
      SELECT u.username, 
      u.email, 
      u.firstname, 
      u.lastname, 
      u.profile_image_url, 
      COALESCE(s.seller_email, 'Unknown') AS seller_email, 
      COALESCE(s.address, 'Unknown') AS address, 
      COALESCE(s.introduction, 'Unknown') AS introduction
      FROM users u
      LEFT JOIN sellers s ON u.user_id = s.user_id

      WHERE u.user_id = ${user_id}
    `;
  return data.rows[0];
  } catch (error) {
    console.error("Failed to get the user's basic data: ", error)
    return null
  }
}

export async function getSellerIdByUserId(user_id: string) {
  try {
    const data = await sql`
          SELECT s.seller_id
          FROM sellers s
          JOIN users u ON s.user_id = u.user_id
    
          WHERE u.user_id = ${user_id}
        `;
      return data.rows[0];
  } catch (error) {
    console.error('Failed to get seller ID by user ID: ', error)
    return null
  }
}