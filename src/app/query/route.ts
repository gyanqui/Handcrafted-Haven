import { db } from "@vercel/postgres";

const client = await db.connect();

async function listCustomers() {
  const data = await client.sql`
        SELECT * FROM customers`;

  return data.rows;
}

export async function GET() {
  try {
    return Response.json(await listCustomers());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
