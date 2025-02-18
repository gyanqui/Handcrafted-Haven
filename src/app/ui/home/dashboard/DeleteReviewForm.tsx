'use client';
import { deleteReviewById } from "@/app/lib/actions";
import { UUID } from "crypto";

export default function DeleteReviewForm({reviewId, userId}: {reviewId:UUID; userId: string;}) {
    const handleClick = () => {
        deleteReviewById(reviewId, userId);
    };
    return (
        <button type="submit" className="bg-red-500 p-2 rounded-lg text-white"
        onClick={handleClick}>
            Delete
        </button>
    );
}