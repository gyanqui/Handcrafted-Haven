import ReviewCard from "./ReviewCard";

export default function ReviewWrapper() {
  const reviewData = [
    {
      review_id: "8bdaee39-7c5b-4b5c-a6b0-0c2c7741e123",
      product_id: "1",
      image_url: "/products/bath-bath-set.webp",
      username: "Seller1",
      product_name: "Luxury Bath Soap Set",
      created_at: "2025-01-15",
      rating: 5,
      review:
        "This UltraSoft Pillow is fantastic! It provides excellent support and is incredibly soft. I've never slept better!",
    },
    {
      review_id: "df12b456-7890-4c3d-b9e3-123456789abc",
      product_id: "2",
      image_url: "/products/bath-bathball.webp",
      username: "User1",
      rating: 4,
      created_at: "2025-01-20",
      product_name: "Aromatic Bath Bomb Set",
      review:
        "I really like this UltraSoft Pillow. It's very comfortable and helps me sleep better. Would highly recommend!",
    },
    {
      review_id: "e67a9d32-4c1b-47d9-8f6c-987654321efg",
      product_id: "3",
      image_url: "/products/bath-lightening-cream.webp",
      username: "Admin1",
      rating: 5,
      created_at: "2025-01-25",
      product_name: "Herbal Lightening Cream",
      review:
        "This pillow is the best I've ever used. It's super soft and provides great support. My neck pain has reduced significantly!",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center">
      {reviewData.map((review) => (
        <ReviewCard key={review.review_id} {...review} />
      ))}
    </div>
  );
}
