"use server";

import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from "uuid";
import postgres from "postgres";
import {
  Review,
  Product,
  ProductFormValues,
  ArtisanStoryProps,
  ProductProps,
  CategoryCardProps,
  UserData,
  Seller
} from "./definitions";

const query = postgres({ ssl: "require" });

export async function fetchProductById(id: string) {
  try {
    const data = await query<Product[]>`
      SELECT
        product_id,
        name,
        price,
        quantity,
        description,
        image_url,
        seller_id,
        category_id
      FROM products
      WHERE product_id = ${id};
    `;
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchReviewsByProductId(id: string) {
  try {
    const data = await query<Review[]>`
      SELECT
        p.product_id,
        review_id,
        r.user_id,
        title,
        rating,
        review,
        firstname,
        lastname
      FROM products p
      INNER JOIN reviews r
      ON p.product_id = r.product_id
      INNER JOIN users u
      ON u.user_id = r.user_id
      WHERE p.product_id = ${id};
    `;

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function listCategories() {
  try {
    const data = await sql<CategoryCardProps>`
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

export async function getUserBasicDataByUserId(user_id: string) {
  try {
    if (!user_id) return;
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
    console.error("Failed to get the user's basic data: ", error);
    return null;
  }
}

export async function getSellerIdByUserId(user_id: string) {
  try {
    const data = await sql<{seller_id: string}>`
          SELECT s.seller_id
          FROM sellers s
          JOIN users u ON s.user_id = u.user_id
    
          WHERE u.user_id = ${user_id}
        `;
        
    return data.rows[0];
  } catch (error) {
    console.error("Failed to get seller ID by user ID: ", error);
    return null;
  }
}

export async function addProduct(formData: ProductFormValues) {
  const {
    name,
    price,
    quantity,
    description,
    image_url,
    category_id,
    seller_id,
    created_at,
  } = formData;

  const newSellerId = seller_id || uuidv4();
  const productId = uuidv4()
  try {
    await sql`
      INSERT INTO products (product_id, name, price, quantity, description, image_url, category_id, seller_id, created_at)
      VALUES (
        ${productId},
        ${name},
        ${Number(price)},
        ${Number(quantity)},
        ${description},
        ${image_url || null},
        ${category_id},
        ${newSellerId},
        ${created_at}
      )
    `;
  } catch (error) {
    console.error("Failed to add a product: ", error);
  }
}

export async function getArtisanStory() {
  try {
    const data = await sql<ArtisanStoryProps>`
      SELECT s.seller_id, s.introduction, u.firstname, u.lastname, u.profile_image_url
      FROM sellers s
      JOIN users u ON s.user_id = u.user_id

      ORDER BY RANDOM()
      LIMIT 1`;
    return data.rows[0];
  } catch (error) {
    console.error("Failed to get artist story: ", error);
    // return null;
  }
}

export async function deleteProduct(product_id: string) {
  try {
    await sql`
      DELETE FROM products
      WHERE product_id = ${product_id}
    `;
  } catch (error) {
    console.error("Failed to delete product: ", error);
    throw new Error("Failed to delete product");
  }
}

export async function listProducts() {
  try {
    const data = await sql<ProductProps>`
      SELECT p.product_id, p.name, p.image_url, p.price, ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
      FROM products p
      LEFT JOIN reviews r ON p.product_id = r.product_id
      GROUP BY p.product_id  
      ORDER BY p.created_at DESC
    `;
    return data.rows;
  } catch (error) {
    console.error("Failed to list all products: ", error);
    throw new Error("Failed to list all products");
  }
}

export async function fetchAllSellers() {
  try {
    const data = await sql`
      SELECT s.seller_id, u.profile_image_url, u.firstname, u.lastname, s.seller_email, s.address, s.introduction
      FROM sellers s
      JOIN users u ON s.user_id = u.user_id
    `;
    return data.rows;
  } catch (error) {
    console.error("Failed to fetch sellers: ", error);
    return [];
  }
}

export async function fetchSellerById(sellerId: string) {
  try {
    const data = await query<Seller[]>`
      SELECT u.user_id, u.firstname, u.lastname, u.email, s.seller_id, s.address, s.seller_email, s.introduction
      FROM users u
      JOIN sellers s ON s.user_id = u.user_id
      WHERE s.seller_id = ${sellerId};
    `;
    return data[0];
  } catch (error) {
    console.error("Failed to fetch seller by ID: ", error);
    return null;
  }
}

export async function fetchProductsBySellerId(sellerId: string) {
  try {
    const data = await query<Product[]>`
      SELECT p.product_id, p.name, p.price, p.quantity, p.description, p.image_url, p.category_id
      FROM products p
      WHERE p.seller_id = ${sellerId};
    `;
    return data;
  } catch (error) {
    console.error("Failed to fetch products by seller ID: ", error);
    return [];
  }
}

export async function fetchReviewsBySellerId(sellerId: string) {
  try {
    const data = await query<Review[]>`
      SELECT r.review_id, r.title, r.rating, r.review, r.product_id, u.firstname, u.lastname
      FROM reviews r
      JOIN products p ON p.product_id = r.product_id
      WHERE p.seller_id = ${sellerId};
    `;
    return data;
  } catch (error) {
    console.error("Failed to fetch reviews by seller ID: ", error);
    return [];
  }
}

export async function listProductsByCategoryId(
  category_id: string
) {
  try {
    const data = await sql<ProductProps>`
      SELECT 
        p.product_id, 
        p.name, 
        p.image_url, 
        p.price, 
        ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
      FROM products p
      LEFT JOIN reviews r ON p.product_id = r.product_id
      JOIN categories c ON c.category_id = p.category_id
      
      WHERE p.category_id = ${category_id}
      GROUP BY p.product_id
    `;
    return data.rows;
  } catch (error) {
    console.error("Failed to list product by category ID: ", error);
    throw new Error("Failed to list product by category ID");
  }
}


export async function getUserBasicDataByEmail(email: string) {
  try {
    if (!email) return;
    const data = await sql<UserData>`
      SELECT u.username, 
      u.user_id, 
      u.firstname, 
      u.lastname, 
      u.profile_image_url, 
      COALESCE(s.seller_email, 'Unknown') AS seller_email, 
      COALESCE(s.address, 'Unknown') AS address, 
      COALESCE(s.introduction, 'Unknown') AS introduction
      FROM users u
      LEFT JOIN sellers s ON u.user_id = s.user_id

      WHERE u.email = ${email}
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Failed to get the user's basic data: ", error);
    return null;
  }
}
