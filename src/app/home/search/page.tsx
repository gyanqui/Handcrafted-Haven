import dayjs from "dayjs"
import ProductWrapper from "@/app/ui/home/ProductWrapper";
import ArtisanWrapper from "@/app/ui/home/ArtisanWrapper";
import ReviewWrapper from "@/app/ui/home/ReviewWrapper";
import { searchArtisans, searchProducts, searchReviews } from "@/app/lib/data";
import { FaExclamationTriangle } from "react-icons/fa";

export default async function Search(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const productResult = await searchProducts(query);

  const artisanResult = await searchArtisans(query);

  const reviewResult = await searchReviews(query);

  // const reviewResult = [
  //   {
  //     review_id: "8bdaee39-7c5b-4b5c-a6b0-0c2c7741e123",
  //     product_id: "1",
  //     image_url: "/products/bath-bath-set.webp",
  //     username: "Seller1",
  //     product_name: "Luxury Bath Soap Set",
  //     created_at: "2025-01-15",
  //     rating: 5,
  //     review:
  //       "This UltraSoft Pillow is fantastic! It provides excellent support and is incredibly soft. I've never slept better!",
  //   },
  //   {
  //     review_id: "df12b456-7890-4c3d-b9e3-123456789abc",
  //     product_id: "2",
  //     image_url: "/products/bath-bathball.webp",
  //     username: "User1",
  //     rating: 4,
  //     created_at: "2025-01-20",
  //     product_name: "Aromatic Bath Bomb Set",
  //     review:
  //       "I really like this UltraSoft Pillow. It's very comfortable and helps me sleep better. Would highly recommend!",
  //   },
  //   {
  //     review_id: "e67a9d32-4c1b-47d9-8f6c-987654321efg",
  //     product_id: "3",
  //     image_url: "/products/bath-lightening-cream.webp",
  //     username: "Admin1",
  //     rating: 5,
  //     created_at: "2025-01-25",
  //     product_name: "Herbal Lightening Cream",
  //     review:
  //       "This pillow is the best I've ever used. It's super soft and provides great support. My neck pain has reduced significantly!",
  //   },
  // ];

  return (
    <>
      {query ? (
      <div className="flex flex-col pb-4">
      {/* product result */}
      <div>
        <h1 className="text-center text-2xl font-extrabold m-4">
          Products Result
        </h1>
        <div>
          {productResult.length > 0 ? (
            <ProductWrapper
              products={productResult.map((product) => ({
                product_id: product.product_id,
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                averageRate: product.averageRate,
              }))}
            />
          ) : (
            <div className="text-xl text-center">
              <FaExclamationTriangle className="inline text-custom-yellow mx-2" />
              No data related to &quot;{query}&quot; found in our products
            </div>
          )}
        </div>
      </div>

      {/* artisan result */}
      <div>
        <h1 className="text-center text-2xl font-extrabold m-4">
          Artisan Result
        </h1>
        <div>
          {artisanResult.length > 0 ? (
            <ArtisanWrapper 
              sellers={artisanResult.map((artisan) => ({
                seller_id: artisan.seller_id,
                seller_email: artisan.seller_email,
                introduction: artisan.introduction,
                username: artisan.username,
                firstname: artisan.firstname,
                lastname: artisan.lastname,
                profile_image_url: artisan.profile_image_url,
                address: artisan.address
              }))} />
          ) : (
            <div className="text-xl text-center">
              <FaExclamationTriangle className="inline text-custom-yellow mx-2" />
              No data related to &quot;{query}&quot; found in our artisans
            </div>
          )}
        </div>
      </div>

      {/* review result */}
      <div>
        <h1 className="text-center text-2xl font-extrabold m-4">
          Review Result
        </h1>
        <div>
          {reviewResult.length > 0 ? (
            <ReviewWrapper reviewData={reviewResult.map((r) => ({
              review_id: r.review_id,
              product_id: r.product_id,
              image_url: r.image_url,
              username: r.username,
              product_name: r.product_name,
              created_at: dayjs(r.created_at).format('YYYY-MM-DD'),
              rating: r.rating,
              review: r.review
            }))} />
          ) : (
            <div className="text-xl text-center">
              <FaExclamationTriangle className="inline text-custom-yellow mx-2" />
              No data related to &quot;{query}&quot; found in our reviews
            </div>
          )}
          
        </div>
      </div>
    </div>
    ) : (
      <div className="flex flex-col items-center">
        <p className="text-3xl m-4">Please use the search bar above to find the products, artisans or reviews.</p>
      </div>
    )}
    </>
    
    
  );
}
