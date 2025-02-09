import postgres from 'postgres';

const sql = postgres({ ssl: "require" });

export async function fetchProductById(id: string) {
  try {
    const data = await sql`
      select
        product_id,
        name,
        price,
        quantity,
        description,
        image_url,
        seller_id,
        category_id
      from products
      where product_id = ${id};
    `
    return data[0];
  } catch (error) {
    console.log(error);
  }
}