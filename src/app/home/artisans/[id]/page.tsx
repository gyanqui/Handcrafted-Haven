'use client'
import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams();
    const id = params.id;
    return (
        <>Artisan ID <span className="font-bold">{id}</span> page</>
    )
}