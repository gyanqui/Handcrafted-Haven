import { sql } from "@vercel/postgres";
async function listData() {
    const data = await sql`
        SELECT p.name, r.review
        FROM products p
        JOIN reviews r ON p.product_id = r.product_id
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