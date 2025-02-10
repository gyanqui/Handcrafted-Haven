import ProductList from "@/app/ui/home/search/ProductList";
import ArtisanList from "@/app/ui/home/search/ArtisanList";
import ReviewList from "@/app/ui/home/search/ReviewList";
import { searchArtisans, searchProducts, searchReviews } from "@/app/lib/data";
import Image from "next/image";

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
              <ProductList
                productResult={productResult.map((product) => ({
                  product_id: product.product_id,
                  name: product.name,
                  image_url: product.image_url,
                  price: product.price,
                  averageRate: product.averageRate,
                }))}
                query={query}
              />
            </div>
          </div>

          {/* dividing line */}
          <div className="h-[2px] w-[350px] md:w-[600px] xl:w-[1200px] my-4 bg-custom-yellow mx-auto"></div>

          {/* artisan result */}
          <div>
            <h1 className="text-center text-2xl font-extrabold m-4">
              Artisan Result
            </h1>
            <div>
              <ArtisanList
                artisanResult={artisanResult.map((artisan) => ({
                  seller_id: artisan.seller_id,
                  profile_image_url: artisan.profile_image_url,
                  firstname: artisan.firstname,
                  lastname: artisan.lastname,
                  username: artisan.username,
                  seller_email: artisan.seller_email,
                  address: artisan.address,
                  introduction: artisan.introduction,
                }))}
                query={query}
              />
            </div>
          </div>

          {/* dividing line */}
          <div className="h-[2px] w-[350px] md:w-[600px] xl:w-[1200px] my-4 bg-custom-yellow mx-auto"></div>

          {/* review result */}
          <div>
            <h1 className="text-center text-2xl font-extrabold m-4">
              Review Result
            </h1>
            <div>
              <ReviewList reviewResult={reviewResult.map((review) => ({
                review_id: review.review_id,
                product_id: review.product_id,
                image_url: review.image_url,
                username: review.username,
                rating: review.rating,
                created_at: review.created_at,
                product_name: review.product_name,
                review: review.review
              }))} query={query} />
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
