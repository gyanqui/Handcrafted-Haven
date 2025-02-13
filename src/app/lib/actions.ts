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
            INSERT INTO users (username, created_at, email, password, firstname, lastname, user_type )
            VALUES (${username}, ${created_at}, ${email}, ${hashedPassword}, ${firstname}, ${lastname}, 'User' )
        `;
    } catch (error) {
        console.error('Error creating new user:', error);
    }

    revalidatePath('/sign-up');
    redirect('/home/profile');
    
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