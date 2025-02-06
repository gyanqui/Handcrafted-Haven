import ReviewCard from "./ReviewCard";
import { ReviewWrapperProps } from "@/app/lib/definitions";

export default function ReviewWrapper({reviewData}: ReviewWrapperProps) {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center">
      {reviewData.map((review) => (
        <ReviewCard key={review.review_id} {...review} />
      ))}
    </div>
  );
}
