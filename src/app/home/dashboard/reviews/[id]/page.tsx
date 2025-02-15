type Params = {
    id: string;
}

export default async function Page({params}: { params: Promise<Params> }) {
    const {id} = await params
    return (
        <>User ID: {id}  reviews</>
    )
}