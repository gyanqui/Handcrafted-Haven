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
  }
}
