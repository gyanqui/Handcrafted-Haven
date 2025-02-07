import { sql } from "@vercel/postgres";
async function listCategories() {
    const data = await sql`
    SELECT * from categories`;

    return data.rows;
}

export async function GET() {
    try {
        return Response.json(await listCategories());
    } catch (error) {
        return Response.json({error}, {status: 500})
    }
}