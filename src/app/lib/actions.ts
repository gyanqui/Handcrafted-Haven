'use server';

import { z } from "zod";
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
export type State = {
  errors?: {
    username?: string[] | undefined; 
    email?: string[] | undefined; 
    password?: string[] | undefined; 
    firstname?: string[] | undefined; 
    lastname?: string[] | undefined; 
  };
  message?: string | null;
};
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { UUID } from "crypto";

const FormSchema = z.object({
    user_id: z.string({invalid_type_error: 'Invalid User.'}),
    username: z.string(),
    email: z.string(),
    created_at: z.string(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    type: z.string(),
    profile_image_url: z.string(),
  });

const CreateUser = FormSchema.omit({ created_at: true, profile_image_url: true, user_id: true, type: true });

export async function createUser(prevState: State, formData: FormData) {
    // const { customerId, amount, status} = CreateInvoice.parse({
    const validatedFields = CreateUser.safeParse({
      // user_id: formData.get('user_id'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.'
        }
    }
    const { username, email, password, firstname, lastname } = validatedFields.data;
    const created_at = new Date().toISOString().split('T')[0];
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await sql`
            INSERT INTO users (username, created_at, email, password, firstname, lastname, type )
            VALUES (${username}, ${created_at}, ${email}, ${hashedPassword}, ${firstname}, ${lastname}, 'User' )
        `;
    } catch (error) {
        console.error('Error creating new user:', error);
    }

    revalidatePath('/sign-up');
    redirect('/home/login');
    
}



export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }


const FormReviewSchema = z.object({
  userId: z.string({
    invalid_type_error: 'You must log in.',
  }),
  productId: z.string({
    invalid_type_error: 'Invalid product ID.',
  }),
  rate: z.coerce
    .number()
    .min(0, { message: 'The min. rate value allowed is $0.' })
    .max(5, { message: 'The max. rate value allowed is $0.' }),
  title: z.string()
    .nonempty({ message: 'Write a title.'}),
    review: z.string()
    .nonempty({ message: 'Write a title.'}),
});

export type ReviewState = {
  errors?: {
    userId?: string[];
    productId?: string[];
    rate?: string[];
    title?: string[];
    review?: string[];
  };
  message?: string | null;
};

export async function createReview(prevState: ReviewState, formData: FormData) {
  const validatedFields = FormReviewSchema.safeParse({
    userId: formData.get('userId'),
    productId: formData.get('productId'),
    rate: formData.get('rate'),
    title: formData.get('title'),
    review: formData.get('review'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Review.',
    };
  }

  const { userId, productId, rate, title, review } = validatedFields.data;
  const created_at = new Date().toISOString().split('T')[0];
    
  try {
    await sql`
    INSERT INTO reviews (title, created_at, rating, review, product_id, user_id)
    VALUES (${title}, ${created_at}, ${rate}, ${review}, ${productId}, ${userId})
    `;
  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Review.',
    };
  }

  revalidatePath(`/home/products/${productId}`);
  redirect(`/home/products/${productId}`);
}

export async function deleteReviewById(reviewId: UUID, user_id: string) {
  try {
    const resp = await sql`
    DELETE FROM reviews WHERE review_id = ${reviewId};`;
    console.log(resp);
  } catch (error) {
    console.error(error);
    throw new Error("Error Deleting Review.")
  }

  revalidatePath(`/home/dashboard/reviews/${user_id}`);
  redirect(`/home/dashboard/reviews/${user_id}`);
}