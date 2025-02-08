import ProductWrapper from "@/app/ui/home/ProductWrapper";
import ArtisanWrapper from "@/app/ui/home/ArtisanWrapper";
import ReviewWrapper from "@/app/ui/home/ReviewWrapper";
import { searchArtisans, searchProducts } from "@/app/lib/data";
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
  // const artisanResult = [
  //   {
  //     seller_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  //     seller_email: "seller@heavenmail.com",
  //     introduction:
  //       "Hello! I'm Alex Johnson, an experienced seller specializing in premium home goods and unique décor items. With a keen eye for quality and design, I curate a selection of products that blend functionality with style. My commitment is to provide exceptional customer service and ensure a seamless shopping experience. Whether you're looking to enhance your living space or find the perfect gift, I'm here to help you discover something truly special. Let's make your home a reflection of your taste and personality!",
  //     username: "Seller1",
  //     firstname: "Alex",
  //     lastname: "Johnson",
  //     profile_image_url: "/artisans/artisan1.webp",
  //     address: "123 Maple Street Springfield, Anytown 12345 United States",
  //   },
  //   {
  //     seller_id: "5123bcde-1234-5678-9abc-def012345678",
  //     seller_email: "artisan@craftmail.com",
  //     introduction:
  //       "Hi there! I'm Sophia Williams, a passionate artisan and seller of handmade jewelry and artisan crafts. Each piece I create is designed with love and attention to detail, ensuring a one-of-a-kind experience for my customers. From elegant necklaces to custom-made bracelets, my collection celebrates craftsmanship and individuality. Join me on this journey to bring beauty and creativity to your everyday life!",
  //     username: "User1",
  //     firstname: "Jane",
  //     lastname: "Doe",
  //     profile_image_url: "/artisans/artisan2.webp",
  //     address: "456 Oak Avenue, Riverdale, Anycity 67890, Canada",
  //   },
  //   {
  //     seller_id: "789abcd0-2345-6789-0abc-def123456789",
  //     seller_email: "pottery@clayworks.com",
  //     introduction:
  //       "Greetings! I'm Michael Lee, a ceramic artisan dedicated to crafting high-quality pottery and home décor. My pieces blend modern aesthetics with traditional techniques, creating timeless designs that add warmth to any space. Whether you're looking for handcrafted dinnerware or statement vases, my shop offers something unique for every home. Let's bring artistry into your everyday life!",
  //     username: "Admin1",
  //     firstname: "Chris",
  //     lastname: "Smith",
  //     profile_image_url: null,
  //     address: "789 Pine Street, Maplewood, Anyprovince 34567, Australia",
  //   },
  // ];

  const reviewResult = [
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
              <FaExclamationTriangle className="inline text-custom-yellow mx-2"/>
              No data related to &quot;{query}&quot; found in our products</div>
          )}
        </div>
      </div>

      {/* artisan result */}
      <div>
        <h1 className="text-center text-2xl font-extrabold m-4">
          Artisan Result
        </h1>
        <div>
          <ArtisanWrapper sellers={artisanResult} />
        </div>
      </div>

      {/* review result */}
      <div>
        <h1 className="text-center text-2xl font-extrabold m-4">
          Review Result
        </h1>
        <div>
          <ReviewWrapper reviewData={reviewResult} />
        </div>
      </div>
    </div>
  );
}
