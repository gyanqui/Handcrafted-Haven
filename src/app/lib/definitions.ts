// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Seller = {
    seller_id: string;
    seller_email: string;
    address: string;
    status: string;
    introduction: string;
  };

export type Products = {
    product_id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image_url: string;
    seller_id:string;
    category_id: string;
}

export type User = {
    user_id: string;
    username: string;
    email: string;
    registration_date: Date;
    password: string;
    firstname: string;
    lastname: string;
    type: string;
    profile_picture: string;
  };
  
export type Category = {
  category_id: string;
  name: string;
};
export type Rating = {
  rating_id: string;
  title: string;
  created_at: Date;
  rating: string;
  review: string;
  product_id: string;
  user_id: string;
}


  

  