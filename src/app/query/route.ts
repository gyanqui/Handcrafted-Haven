import { sql } from "@vercel/postgres";
const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a";
async function listData() {
  const data = await sql`
    SELECT s.seller_id, s.introduction, u.firstname, u.lastname, u.profile_image_url
    FROM sellers s
    JOIN users u ON s.user_id = u.user_id

    ORDER BY RANDOM()
    LIMIT 1`
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
