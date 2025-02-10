import { Params } from "next/dist/server/request/params";

export default function Page({params}: {params: Params}) {
    return (
        <>User ID {params.id} products</>
    )
}