import { sql } from "@vercel/postgres";
const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a";
async function listData() {
  const data = await sql`
    SELECT p.product_id, p.name, p.image_url, ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
      FROM products p
      LEFT JOIN reviews r ON p.product_id = r.product_id
      GROUP BY p.product_id  
      ORDER BY p.created_at DESC
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
