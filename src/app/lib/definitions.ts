// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Seller = {
    id: string;
    firstname: string;
    lastname: string;
    birthday: Date;
    email: string;
    password: string;
  };

export type Products = {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    description: string;
    image_url: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  
  export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string;
  };
  
  export type CustomersTableType = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
  };
  
  export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
  };
  
  export type CustomerField = {
    id: string;
    name: string;
  };
  

  