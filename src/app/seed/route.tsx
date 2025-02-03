import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { sellers, products, users, categories, reviews } from '../lib/placeholder-data';

const client = await db.connect();

async function seedSellers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS sellers (
      seller_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      seller_email TEXT NOT NULL UNIQUE,
      address TEXT NOT NULL,
      status ENUM(Active, Inactive, Suspended),
      introduction TEXT NOT NULL,
    );
  `;

  const insertedSellers = await Promise.all(
    sellers.map(async (seller) => {
      return client.sql`
        INSERT INTO sellers (seller_id, seller_email, address, status, introduction)
        VALUES (${seller.seller_id}, ${seller.seller_email}, ${seller.address}, ${seller.status}, ${seller.introduction})
        ON CONFLICT (seller_id) DO NOTHING;
      `;
    }),
  );

  return insertedSellers;
}

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DOUBLE NOT NULL,
      quantity INT NOT NULL,
      description VARCHAR(MAX) NOT NULL,
      image TEXT NULL,
      seller_id  TEXT NOT NULL UNIQUE,
      category_id TEXT NOT NULL,
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      return client.sql`
        INSERT INTO products (product_id, name, price, quantity, description, seller_id, category_id)
        VALUES (${product.product_id}, ${product.name}, ${product.price}, ${product.quantity}, ${product.description}, ${product.seller_id}, ${product.category_id})
        ON CONFLICT (product_id) DO NOTHING;
      `;
    }),
  );

  return insertedProducts;
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
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }