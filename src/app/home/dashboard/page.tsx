'use server'

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await auth();
    if (!session) {
        return (
            redirect('/home/login')
        )
    }
    return (
        <>Dashboard page</>
    )
}