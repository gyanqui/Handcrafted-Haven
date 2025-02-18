'use client';
import { Rate } from "antd";
import { useActionState, useState } from "react";
import { createReview, ReviewState } from "@/app/lib/actions";

export default function ReviewForm({ productId, userId }: { productId : string; userId: string}) {
    const initialState: ReviewState = { message: null, errors: {} };
    const [state, formAction] = useActionState(createReview, initialState);

    const [ rateValue, setRateValue ] = useState(0);
    const handleOnChange = (value: number) => {
        setRateValue(value);
    }

    return (
        <form action={formAction} className='bg-white mx-5 my-7 p-5 rounded-xl md:mx-16 lg:mx-24'>
        <h2 className="text-xl text-center">Give your Feedback!</h2>
            <fieldset className="border border-">
                <legend>Rating</legend>
                <label htmlFor="rate">
                    Rate:  
                    <Rate 
                        id="rate"
                        allowHalf={true}
                        allowClear={true}
                        defaultValue={0}
                        onChange={(value) => handleOnChange(value)}
                    />
                    <input id="rate_value" name="rate" type="number" defaultValue={rateValue} hidden />
                </label>
            </fieldset>
            <fieldset>
                <legend>Review</legend>
                <label htmlFor="title">
                    Title: <input id="title" name="title" type="text" aria-describedby="status-error"/>
                </label>
                {state.errors?.title &&
                    state.errors.title.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
                <label htmlFor="review">
                    Review:
                </label>
                <textarea name="review" id="review" aria-describedby="status-error" ></textarea>
                {state.errors?.review &&
                    state.errors.review.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
            </fieldset>
            <input name="productId" type="text" value={productId} hidden readOnly/>
            <input name="userId" type="text" value={userId} hidden readOnly/>
            <button type="submit">Send Review</button>
        </form>
    );
}