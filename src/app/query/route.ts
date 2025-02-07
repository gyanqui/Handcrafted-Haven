import { sql } from "@vercel/postgres";
async function listSellers() {
    const data = await sql`
    SELECT * from sellers`;

    return data.rows;
}

export async function GET() {
    try {
        return Response.json(await listSellers());
    } catch (error) {
        return Response.json({error}, {status: 500})
    }
}