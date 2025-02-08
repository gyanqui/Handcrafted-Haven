import { sql } from "@vercel/postgres";
async function listCategories() {
    const data = await sql`
        SELECT * from categories`;

    return data.rows;
}

async function listUsers() {
    const data = await sql`
        SELECT * from Users
    `

    return data.rows
}

async function listSellers() {
    const data = await sql`
        SELECT * FROM sellers
    `
    return data.rows
}

async function listProducts() {
    const data = await sql`
        SELECT * FROM products
    `
    return data.rows
}

async function listReviews() {
    const data = await sql`
        SELECT * FROM reviews
    `
    return data.rows
}

export async function GET() {
    try {
        const [categories, users, sellers, products, reviews] = await Promise.all([
            listCategories(), listUsers(), listSellers(), listProducts(), listReviews()
        ])
        return Response.json({ categories, users, sellers, products, reviews })
        ;
    } catch (error) {
        return Response.json({error}, {status: 500})
    }
}