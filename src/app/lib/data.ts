import postgres from 'postgres';
import { Review, Product } from './definitions';

const sql = postgres({ ssl: "require" });

export async function fetchProductById(id: string) {
  try {
    const data = await sql<Product[]>`
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
    `
    return data[0];
  } catch (error) {
    console.log(error);
  } 
}

export async function fetchReviewsByProductId(id: string) {
  try {
    const data = await sql<Review[]>`
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