// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
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


export type ProductProps = {
  product_id: string;
  name: string;
  image_url: string;
  price: number;
  averageRate: number;
}

export type PromotionWrapperProps = {
  products: ProductProps[];
  title: string;
}

export type ProductWrapperProps = {
  products: ProductProps[]
}

export type ArtisanCardProps = {
  seller_id: string;
  profile_picture: string | null;
  firstname: string;
  lastname: string;
  seller_email: string;
  address: string;
  introduction: string;
}

export type ArtisanWrapperProps = {
  sellers: ArtisanCardProps[]
}

export type ReviewProps = {
  review_id: string,
  product_id: string,
  image_url: string,
  username: string,
  rating: number,
  created_at: string,
  product_name: string
  review: string
}

export type ReviewWrapperProps = {
  reviewData: ReviewProps[]
}

export type SideMenuProps = {
  toggleOpen: () => void;
}

export type CategoryCardProps = {
  name: string;
  url: string;
  id: string
}