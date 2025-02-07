import { fetchProductById } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const param = await props.params;
    const id = param.id;

    const product = await fetchProductById(id);

    console.log(product);

    return (
        <>Product ID {id} page</>
    )
}