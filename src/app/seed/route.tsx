import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
import postgres from 'postgres';
import { sellers, products, users, categories, reviews } from '../lib/placeholder-data';

// const client = await db.connect();
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedSellers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TYPE status AS ENUM ('Active', 'Inactive', 'Suspended')`; 
  await sql`
    CREATE TABLE IF NOT EXISTS sellers (
      seller_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      seller_email TEXT NOT NULL UNIQUE,
      address TEXT NOT NULL,
      status status NOT NULL,
      introduction TEXT NOT NULL
    );
  `;

  const insertedSellers = await Promise.all(
    sellers.map(async (seller) => {
      return sql`
        INSERT INTO sellers (seller_id, seller_email, address, status, introduction)
        VALUES (${seller.seller_id}, ${seller.seller_email}, ${seller.address}, ${seller.status}, ${seller.introduction})
        ON CONFLICT (seller_id) DO NOTHING;
      `;
    }),
  );

  return insertedSellers;
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price NUMERIC NOT NULL,
      quantity INT NOT NULL,
      description TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL,
      image TEXT NULL,
      seller_id  TEXT NOT NULL,
      category_id TEXT NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      return sql`
        INSERT INTO products (created_at, name, price, quantity, description, seller_id, category_id)
        VALUES (${product.created_at}, ${product.name}, ${product.price}, ${product.quantity}, ${product.description}, ${product.seller_id}, ${product.category_id})
        ON CONFLICT (product_id) DO NOTHING;
      `;
    }),
  );

  return insertedProducts;
}
async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TYPE user_type AS ENUM ('User', 'Seller', 'Admin')`; 
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      created_at DATE NOT NULL,
      password TEXT NOT NULL
      firstname VARCHAR(255) NOT NULL,
      lastname TEXT NOT NULL,
      user_type user_type NOT NULL,
      profile_image_url TEXT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (user_id, username, email, created_at, password, firstname, lastname, user_type)
        VALUES (${user.user_id}, ${user.username}, ${user.email}, ${user.created_at}, ${hashedPassword}, ${user.firstname}, ${user.lastname}, ${user.user_type})
        ON CONFLICT (user_id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      category_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      category TEXT NOT NULL
    );
  `;

  const insertedCategories = await Promise.all(
    categories.map(
      (category) => sql`
        INSERT INTO categories (category_id, category)
        VALUES (${category.category_id}, ${category.category})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCategories;
}

async function seedReview() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TYPE rating AS ENUM ('1', '2', '3', '4', '5')`; 
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      created_at DATE NOT NULL,
      rating rating NOT NULL
      review TEXT NOT NULL,
      product_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
    );
  `;

  const insertedUsers = await Promise.all(
    reviews.map(async (review) => {
      return sql`
        INSERT INTO reviews (review_id, title, created_at, rating, review, product_id, user_id)
        VALUES (${review.review_id}, ${review.title}, ${review.created_at}, ${review.rating}, ${review.review}, ${review.product_id}, ${review.user_id})
        ON CONFLICT (review_id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

export async function GET() {
    try {
      const result = await sql.begin((sql) => [
      seedSellers(),
      seedCategories(),
      seedUsers(),
      seedProducts(),
      seedReview(),
      ]);
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }