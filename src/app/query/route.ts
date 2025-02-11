import { sql } from "@vercel/postgres";
const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a";
async function listData() {
  const data = await sql`
      SELECT s.seller_id
      FROM sellers s
      JOIN users u ON s.user_id = u.user_id

      WHERE u.user_id = ${user_id}
    `;
  return data.rows[0];
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
