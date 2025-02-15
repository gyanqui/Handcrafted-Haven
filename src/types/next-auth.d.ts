import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
        id: number;
        name: string;
        email: string;
        image: string;
        user_id: string;
        username: string;
        created_at: string;
        firstname: string;
        lastname: string;
        type: string;
        profile_image_url: string;
        };
    }
}