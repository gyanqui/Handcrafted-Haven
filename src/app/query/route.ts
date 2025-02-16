import { sql } from "@vercel/postgres";
async function listData() {
  const data = await sql`
    SELECT * FROM sellers  
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
