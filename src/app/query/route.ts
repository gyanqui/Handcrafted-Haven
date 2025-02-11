import { sql } from "@vercel/postgres";
const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a";
async function listData() {
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
