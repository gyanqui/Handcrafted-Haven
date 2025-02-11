import { sql } from "@vercel/postgres";
async function listData() {
  const data = await sql`
        SELECT p.product_id, p.name, p.image_url, p.price, ROUND(COALESCE(AVG(r.rating), 0), 1) AS averageRate
        FROM users u
        LEFT JOIN sellers s ON s.user_id = u.user_id
        JOIN products p ON p.seller_id = s.seller_id
        LEFT JOIN reviews r ON r.product_id = p.product_id
        
        WHERE u.user_id = '3958dc9e-712f-4377-85e9-fec4b6a6442a'
        
        GROUP BY p.product_id
    `;
  return data.rows;
}

export async function GET() {
  try {
    const categories = await listData();
    return Response.json({
      categories,
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
