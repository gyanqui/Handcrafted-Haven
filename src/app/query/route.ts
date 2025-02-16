import { sql } from "@vercel/postgres";
const user_id = "3958dc9e-712f-4377-85e9-fec4b6a6442a";
async function listData() {
  const data = await sql`
    SELECT * from products`
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
