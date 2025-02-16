import { fetchSellerById, fetchProductsBySellerId, fetchReviewsBySellerId } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const seller = await fetchSellerById(id);
  if (!seller) {
    notFound();
  }

  // If you want to display the artisan's profile image, ensure that the query in fetchSellerById returns u.profile_image_url.
  const profileImage = seller.profile_image_url || "/artisans/default.webp";
  const sellerFullName = `${seller.firstname} ${seller.lastname}`;

  // Fetch the products (and reviews, if desired) for this artisan.
  const products = await fetchProductsBySellerId(id);
  const reviews = await fetchReviewsBySellerId(id);

  return (
    <>
      <section className="flex flex-col items-center my-7 gap-5">
        <Image
          className="w-full rounded-2xl shadow-xl md:w-1/2 lg:w-1/3"
          src={profileImage}
          width={300}
          height={400}
          alt={sellerFullName + " profile image."}
        />
        <aside className="mx-5 md:mx-16 lg:shadow-xl lg:rounded-2xl lg:mx-24 lg:p-5">
          <h3 className="text-2xl mb-3">{sellerFullName}</h3>
          <p className="mt-3">
            <strong>Email:</strong> {seller.seller_email}
          </p>
          <p className="mt-3">
            <strong>Address:</strong> {seller.address}
          </p>
          <p className="my-3">
            <span className="block underline decoration-slate-800 underline-offset-4">
              Introduction
            </span>
            {seller.introduction}
          </p>
        </aside>
      </section>

      <section className="bg-gray-200 py-5">
        <h3 className="text-2xl font-medium ml-5 mb-3 md:ml-16 lg:ml-24">
          Products by {sellerFullName}
        </h3>
        {products && products.length > 0 ? (
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.product_id}
                className="bg-white p-5 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="mt-2">Price: ${product.price}.00</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="ml-5 md:ml-16 lg:ml-24">
            No products found for this artisan.
          </p>
        )}
      </section>

      <section className="bg-gray-100 py-5">
        <h3 className="text-2xl font-medium ml-5 mb-3 md:ml-16 lg:ml-24">
          Reviews
        </h3>
        {reviews && reviews.length > 0 ? (
          <div className="px-4">
            {reviews.map((review) => (
              <article
                key={review.review_id}
                className="rounded-xl bg-white mb-5 mx-5 p-5 md:mx-16 lg:shadow-xl lg:rounded-2xl lg:mx-24 lg:p-5"
              >
                <h3 className="font-bold text-xl">{review.title}</h3>
                <span className="underline decoration-slate-800 underline-offset-4">
                  {review.firstname}, {review.lastname}
                </span>
                <p>{review.review}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="ml-5 md:ml-16 lg:ml-24">
            No reviews yet, be the first to write a review!
          </p>
        )}
      </section>
    </>
  );
}
