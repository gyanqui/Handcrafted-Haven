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
        <form action={formAction} className='bg-white mx-5 my-7 p-5 rounded-xl md:mx-16 lg:mx-24 '>
        <h2 className="text-xl text-center"><b>Give your Feedback!</b></h2>
            <fieldset className="border border-custom-grey rounded-lg">
                <legend className="mx-2"><b>Rating</b></legend>
                <label htmlFor="rate" className="mx-2 ">
                    <b>Rate</b>:  
                    <Rate 
                        id="rate"
                        allowHalf={true}
                        allowClear={true}
                        defaultValue={0}
                        onChange={(value) => handleOnChange(value)}
                    />
                    <input id="rate_value" name="rate" type="number" defaultValue={rateValue} hidden aria-describedby="status-error"/>
                </label>
                {state.errors?.rate &&
                    state.errors.rate.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
            </fieldset>
            <fieldset className="border border-custom-grey rounded-lg my-2">
            
                    <legend className="mx-2"><b>Review</b></legend>
                    <div className="flex my-2">
                        <label htmlFor="title" className="mx-2">
                            <b>Title</b>: 
                        </label>
                        <input id="title" name="title" type="text" aria-describedby="status-error" className="border rounded-lg w-full me-4"/>
                        {state.errors?.title &&
                            state.errors.title.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                
                    <div className="flex mb-3">
                        <label htmlFor="review" className="mx-2">
                            <b>Review</b>:
                        </label>
                        <textarea name="review" id="review" aria-describedby="status-error" className="border rounded-lg w-full me-4"></textarea>
                        {state.errors?.review &&
                            state.errors.review.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                    
                
            </fieldset>

            <input name="productId" type="text" value={productId} hidden readOnly/>
            <input name="userId" type="text" value={userId} hidden readOnly/>
            <button type="submit"className=" border p-2 border-custom-grey rounded-lg bg-gray-300 hover:bg-gray-200">Send Review</button>
        </form>
    );
}