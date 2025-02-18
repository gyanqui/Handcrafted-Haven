import { fetchProductById, fetchReviewsByProductId, listProductName } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Review } from '@/app/lib/definitions';
import { auth } from "@/auth";
import ReviewForm from '@/app/ui/home/ProductDetails/ReviewForm';
import { Metadata } from 'next';

type Params = {
    id: string
}

export async function generateMetadata(
    {params}: {params: Promise<Params>}
): Promise<Metadata> {
    const id = (await params).id;
    const product = await listProductName(id)

    return {
        title: product?.name
    }
}

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const param = await props.params;
    const id = param.id;

    const [ product, reviews ] = await Promise.all([
        fetchProductById(id),
        fetchReviewsByProductId(id)
    ]);

    if (!product) {
        notFound(); 
    }

    const session = await auth();

    const {
        name,
        price,
        quantity,
        description,
        image_url
    } = product;

    return (
        <>
            <section className='flex flex-col items-center my-7 gap-5'>
                <Image className='w-full rounded-2xl shadow-xl md:w-1/2 lg:w-1/3'
                    src={image_url || "https://picsum.photos/300/300"}
                    width={300}
                    height={400}
                    alt={name + "image."}
                />
                <aside className='min-w-[80%] mx-5 md:mx-16 lg:shadow-xl lg:rounded-2xl lg:mx-24 lg:p-5'>
                    <h3 className='text-2xl mb-3'>{name}</h3>
                    {quantity > 0 && <span className='bg-slate-300 py-0.5 px-2 rounded-xl'>In Stock</span>}
                    <p className='mt-3 text-4xl font-medium'>${price}.00</p>
                    <p className='my-3'>
                        <span className='block underline decoration-slate-800 underline-offset-4'>Description</span>
                        {description}
                    </p>
                </aside>
            </section>
            <section className='bg-gray-200 py-5'>
                <h3 className='text-2xl font-medium ml-5 mb-3 md:ml-16 lg:ml-24'>Reviews</h3>
                {reviews?.length ? <Reviews reviews={reviews} /> 
                    : <p className='ml-5 md:ml-16 lg:ml-24'>No reviews yet, be the first to write a review!</p>
                }
                {session?.user?.user_id && <ReviewForm productId={id} userId={session.user.user_id} />}
            </section>
        </>
    );
}

function Reviews({ reviews } : { reviews: Review[] }) {
    return (
        <>
            {reviews.map(review => (
                <article key={review.review_id} className='rounded-xl bg-white mb-5 mx-5 p-5 md:mx-16 lg:shadow-xl lg:rounded-2xl lg:mx-24 lg:p-5'>
                    <h3 className='font-bold text-xl'>{review.title}</h3>
                    <span className='underline decoration-slate-800 underline-offset-4'>{review.lastname}, {review.firstname}</span>
                    <p>{review.review}</p>
                </article>
            ))}
        </>
    );
}