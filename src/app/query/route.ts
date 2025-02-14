import { sql } from "@vercel/postgres";
const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a";
async function listData() {
  const data = await sql`
    SELECT 
        p.product_id, 
        p.name, 
        p.image_url, 
        p.price, 
        ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
      FROM products p
      LEFT JOIN reviews r ON p.product_id = r.product_id
      JOIN categories c ON c.category_id = p.category_id
      
      WHERE p.category_id = 'f40f68b8-e8c3-473a-b6b3-324684703c19'
      GROUP BY p.product_id
  `;
  return data.rows;
}

export async function GET() {
  try {
    const data = await listData();
    return Response.json({
      data,
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
