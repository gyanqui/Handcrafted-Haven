// This file contains type definitions for your data.

import { UUID } from "crypto";

// It describes the shape of the data, and what data type each property should accept.
export type Seller = {
  seller_id: string;
  seller_email: string;
  address: string;
  status: string;
  introduction: string;
};

export type Product = {
  product_id: UUID;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image_url: string;
  seller_id: UUID;
  category_id: UUID;
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
  profile_image_url: string;
};

export type Category = {
  category_id: string;
  name: string;
};
export type Rating = {
  rating_id: string;
  title: string;
  created_at: Date;
  rating: number;
  review: string;
  product_id: string;
  user_id: string;
};

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
};

export type ProductWrapperProps = {
  products: ProductProps[];
};

export type ArtisanCardProps = {
  seller_id: string;
  profile_image_url: string | null;
  firstname: string;
  lastname: string;
  seller_email: string;
  address: string;
  introduction: string;
};

export type ArtisanWrapperProps = {
  sellers: ArtisanCardProps[];
};

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

export type Review = {
  product_id: UUID;
  review_id: UUID;
  user_id: UUID;
  title: string;
  rating: number;
  review: string;
	firstname: string;
	lastname: string;
}

export type ReviewWrapperProps = {
  reviewData: ReviewProps[];
};

export type SideMenuProps = {
  toggleOpen: () => void;
};

export type CategoryCardProps = {
  category_id: string;
  category: string;
  category_url: string;
};

export type CategoryNavProps = {
  categories: CategoryCardProps[];
};

export type ProductListProps = {
  productResult: ProductProps[];
  query: string;
};

export type ArtisanListProps = {
  artisanResult: ArtisanCardProps[];
  query: string;
};

export type ReviewListProps = {
  reviewResult: ReviewProps[];
  query: string;
};

export type AddProductFormProps = {
  categories: Category[];
  seller_id: string | null;
  user_id: string | null;
};

export type ProductFormValues = {
  seller_id: string;
  created_at: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  image_url?: string;
  category_id: string;
};

export type ArtisanStoryProps = {
  seller_id: string | null;
  introduction: string | null;
  firstname: string | null;
  lastname: string | null;
  profile_image_url : string | null;
};
