'use client'
import { useParams } from "next/navigation"
export default function Page() {
    const {id} = useParams()

    return (
        <>Product ID {id} page</>
    )
}