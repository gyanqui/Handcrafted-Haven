import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const param = await props.params;
    const id = param.id;

    const product = await fetchProductById(id);

    // console.log(product); // comment later
    if (!product) {
        notFound(); 
    }

    const {
        name,
        price,
        quantity,
        description,
        image_url
    } = product;

    return (
        <section className='flex flex-col items-center my-5 gap-5'>
            <Image className='w-full rounded-2xl shadow-xl md:w-1/2 lg:w-1/3'
                src={image_url}
                width={300}
                height={400}
                alt={name + "image."}
            />
            <aside className='mx-5 md:mx-16 lg:shadow-xl lg:rounded-2xl lg:mx-24 lg:p-5'>
                <h3 className='text-2xl mb-3'>{name}</h3>
                {quantity > 0 ?
                    <span className='bg-slate-300 py-0.5 px-2 rounded-xl'>In Stock</span> :
                    null
                }
                <p className='mt-3 text-4xl font-medium'>${price}.00</p>
                <p className='my-3'>
                    <span className='block underline decoration-slate-800 underline-offset-4'>Description</span>
                    {description}
                </p>
            </aside>
        </section>
    );
}