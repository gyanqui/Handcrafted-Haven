type Params = {
    id: string;
}

export default function Page({params}: {params: Params}) {
    
    return (
        <>User ID: {params.id} profile</>
    )
}