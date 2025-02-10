import dayjs from "dayjs";
import ArtisanWrapper from "@/app/ui/home/ArtisanWrapper";
import ReviewWrapper from "@/app/ui/home/ReviewWrapper";
import ProductList from "@/app/ui/home/search/ProductList";
import { searchArtisans, searchProducts, searchReviews } from "@/app/lib/data";
import Image from "next/image";

import { FaExclamationTriangle } from "react-icons/fa";

export default async function Search(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || ""; // get the search keyword

  const [productResult, artisanResult, reviewResult] = await Promise.all([
    searchProducts(query),
    searchArtisans(query),
    searchReviews(query),
  ]);

  return (
    <div className="w-full flex flex-col">
      {query ? (
        <div className="flex flex-col pb-4">
          {/* product result */}
          <div>
            <h1 className="relative text-center text-2xl font-extrabold m-4">
              Products Result
            </h1>
            <div>
              <ProductList productResult={productResult.map((product) => ({
                product_id: product.product_id,
                name: product.name,
                image_url: product.image_url,
                price: product.price,
                averageRate: product.averageRate
              }))} query={query} />

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
                    address: artisan.address,
                  }))}
                />
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
                <ReviewWrapper
                  reviewData={reviewResult.map((r) => ({
                    review_id: r.review_id,
                    product_id: r.product_id,
                    image_url: r.image_url,
                    username: r.username,
                    product_name: r.product_name,
                    created_at: dayjs(r.created_at).format("YYYY-MM-DD"),
                    rating: r.rating,
                    review: r.review,
                  }))}
                />
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
        <div className="flex flex-row">
          <div className="min-w-24 mr-2 md:mr-4 lg:mr-6">
            <Image
              src="/search.webp"
              alt="search picture"
              width={291}
              height={206}
            />
          </div>
          <div className="flex justify-center items-center md:text-2xl lg:text-4xl">
            Please use the search bar above to find the products, artisans or
            reviews.
          </div>
        </div>
      )}
    </div>
  );
}
