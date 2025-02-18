import { sql } from "@vercel/postgres";
async function listData() {
  const data = await sql`
    SELECT 
	      p.product_id,
	      p.name,
	      p.image_url,
	      p.price,
	      ROUND(COALESCE(AVG(r.rating), 0), 1) AS "rating"
      FROM products p
      LEFT JOIN reviews r
      ON r.product_id = p.product_id
      GROUP BY p.product_id, p.created_at
      ORDER BY p.created_at DESC
      LIMIT 3;
  `
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
