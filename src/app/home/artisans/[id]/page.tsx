import { fetchSellerById, fetchProductsBySellerId } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArtisanCardProps } from '@/app/lib/definitions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const seller = (await fetchSellerById(id)) as unknown as ArtisanCardProps;
  
  const profileImage = seller.profile_image_url || "/placeholder/user-placeholder.webp";
  const sellerFullName = `${seller.firstname} ${seller.lastname}`; 

  const products = await fetchProductsBySellerId(id);
  
  return (
    <>
      <section className="flex flex-col items-center my-7 gap-5">
      <div className="relative w-full md:w-1/3 lg:w-1/5 h-[400px]">
        <Image
            className="object-contain rounded-2xl shadow-xl"
            src={profileImage}
            fill
            alt={sellerFullName + " profile image."}
        />
        </div>
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
              <Link 
                key={product.product_id} 
                href={`/home/products/${product.product_id}`}
                className="cursor-pointer"
              >
                <div className="bg-white p-5 rounded-xl shadow-md">
                  <Image 
                    src={product.image_url || '/placeholder/product-placeholder.webp'} 
                    width={300} 
                    height={200} 
                    alt={`${product.name} image`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h4 className="text-xl font-bold mt-2">{product.name}</h4>
                  <p className="mt-2">Price: ${product.price}.00</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="ml-5 md:ml-16 lg:ml-24">
            No products found for this artisan.
          </p>
        )}
      </section>
    </>
  );
}
