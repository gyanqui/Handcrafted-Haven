import { sql } from "@vercel/postgres";
async function listData() {
    const data = await sql`
        SELECT * FROM users
    `;
    return data.rows
}

export async function GET() {
    try {
        const categories = await listData()
        return Response.json({ 
            categories, 
        })
        ;
    } catch (error) {
        return Response.json({error}, {status: 500})
    }
}