import { fetchReviewsByUserId  } from "@/app/lib/data";
import DeleteReviewForm from "@/app/ui/home/dashboard/DeleteReviewForm";
import { Rate } from "antd";
import { auth } from '@/auth'
import { redirect } from "next/navigation";

export default async function Page(props : { params: Promise<{id: string}>}) {
    const session = await auth();
        
        if (!session) {
            return (
                redirect('/home/login')
            )
        }

    const userId = (await props.params).id
    const reviews = await fetchReviewsByUserId(userId); 

    return (
        <section className="m-10">
                <h2 className="text-center text-xl">Your Reviews</h2>   
                <div className="">
                    {reviews?.length ? reviews.map(review => (
                        <article key={review.review_id} className="bg-slate-200 p-3 rounded-xl mb-3 flex justify-between items-center gap-3">
                            <div>
                                <h3 className="font-bold">{review.title}</h3>
                                <Rate 
                                    defaultValue={review.rating}
                                    disabled={true}
                                />
                                <p>{review.review}</p>
                            </div>
                            <DeleteReviewForm reviewId={review.review_id} userId={userId}/>
                        </article>
                    )) :
                    <h2>No reviews yet!</h2>}
                </div>
        </section>
    );
}