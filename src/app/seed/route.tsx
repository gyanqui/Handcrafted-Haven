
import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
import postgres from 'postgres';
import { sellers, products, users, categories, reviews } from '../lib/placeholder-data';
import { v4 as uuidv4 } from 'uuid';

// const client = await db.connect();
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedSellers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // await sql`CREATE TYPE status AS ENUM ('Active', 'Inactive', 'Suspended')`; 
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
  } catch(error) {
      console.error("Error seeding sellers:", error);
      throw error;
    }
}

async function seedProducts() {
  try {
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
          INSERT INTO products (product_id, created_at, name, price, quantity, description, seller_id, category_id)
          VALUES (${product.product_id ?? uuidv4()}, ${product.created_at}, ${product.name}, ${product.price}, ${product.quantity}, ${product.description}, ${product.seller_id}, ${product.category_id})
          ON CONFLICT (product_id) DO NOTHING;
        `;
      }),
    );
  
    return insertedProducts;
  } catch(error) {
      console.error("Error seeding Products:", error);
      throw error;
    }
}
async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      created_at DATE NOT NULL,
      password TEXT NOT NULL
      firstname VARCHAR(255) NOT NULL,
      lastname TEXT NOT NULL,
      type ENUM("User", "Seller", "Admin"),
      profile_image_url TEXT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (user_id, username, email, created_at, password, firstname, lastname, type)
        VALUES (${user.user_id}, ${user.username}, ${user.email}, ${user.created_at}, ${hashedPassword}, ${user.firstname}, ${user.lastname}, ${user.type})
        ON CONFLICT (user_id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedSellers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS sellers (
      seller_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      seller_email TEXT NOT NULL UNIQUE,
      address TEXT NOT NULL,
      status TEXT CHECK (status IN ('active', 'inactive', 'suspended')),
      introduction TEXT NOT NULL,
      user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
    );
  `;

  const insertedSellers = await Promise.all(
    sellers.map(async (seller) => {
      return client.sql`
        INSERT INTO sellers (seller_id, seller_email, address, status, introduction, user_id)
        VALUES (${seller.seller_id}, ${seller.seller_email}, ${seller.address}, ${seller.status}, ${seller.introduction}, ${seller.user_id})
        ON CONFLICT (seller_id) DO NOTHING;
      `;
    }),
  );

  return insertedSellers;
}

async function seedCategories() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
      category_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      category TEXT NOT NULL
    );
  `;

  const insertedCategories = await Promise.all(
    categories.map(
      (category) => client.sql`
        INSERT INTO categories (category_id, category)
        VALUES (${category.category_id}, ${category.category})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCategories;
}

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DOUBLE PRECISION NOT NULL,
      quantity INT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NULL,
      created_at TIMESTAMPTZ NOT NULL,
      seller_id  UUID NOT NULL REFERENCES sellers(seller_id) ON DELETE CASCADE,
      category_id UUID NOT NULL REFERENCES categories(category_id) ON DELETE CASCADE
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      return client.sql`
        INSERT INTO products (product_id, name, price, quantity, description, image_url, created_at, seller_id, category_id)
        VALUES (${product.product_id}, ${product.name}, ${product.price}, ${product.quantity}, ${product.description}, ${product.image_url}, ${product.created_at}, ${product.seller_id}, ${product.category_id})
        ON CONFLICT (product_id) DO NOTHING;
      `;
    }),
  );

  return insertedProducts;
}

async function seedReview() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS reviews (
      review_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL UNIQUE,
      created_at DATE NOT NULL,
      rating ENUM("1", "2", "3", "4", "5") NOT NULL
      review VARCHAR(MAX) NOT NULL,
      product_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
    );
  `;

  const insertedUsers = await Promise.all(
    reviews.map(async (review) => {
      return client.sql`
        INSERT INTO reviews (review_id, username, email, created_at, password, firstname, lastname, type)
        VALUES (${review.review_id}, ${review.title}, ${review.created_at}, ${review.rating}, ${review.review}, ${review.product_id}, ${review.user_id})
        ON CONFLICT (review_id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

export async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });
    try {
      await client.sql`BEGIN`;
      await seedSellers();
      await seedProducts();
      await seedUsers();
      await seedCategories();
      await seedReview();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
 


