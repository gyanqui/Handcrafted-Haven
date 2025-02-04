import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { BsShopWindow } from "react-icons/bs";
import Link from "next/link";

export default function ArtistCard() {
  // const sellers = [
  //     {
  //       seller_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  //       seller_email: "seller@heavenmail.com",
  //       introduction:
  //         "Hello! I'm Alex Johnson, an experienced seller specializing in premium home goods and unique décor items. With a keen eye for quality and design, I curate a selection of products that blend functionality with style. My commitment is to provide exceptional customer service and ensure a seamless shopping experience. Whether you're looking to enhance your living space or find the perfect gift, I'm here to help you discover something truly special. Let's make your home a reflection of your taste and personality!",
  //       username: "Seller1",
  //       firstname: "Alex",
  //       lastname: "Johnson",
  //       profile_picture: "/artists/artist1.webp",
  //     },
  //     {
  //       seller_id: "5123bcde-1234-5678-9abc-def012345678",
  //       seller_email: "artisan@craftmail.com",
  //       introduction:
  //         "Hi there! I'm Sophia Williams, a passionate artist and seller of handmade jewelry and artisan crafts. Each piece I create is designed with love and attention to detail, ensuring a one-of-a-kind experience for my customers. From elegant necklaces to custom-made bracelets, my collection celebrates craftsmanship and individuality. Join me on this journey to bring beauty and creativity to your everyday life!",
  //       username: "User1",
  //       firstname: "Jane",
  //       lastname: "Doe",
  //       profile_picture: "/artists/artist2.webp",
  //     },
  //     {
  //       seller_id: "789abcd0-2345-6789-0abc-def123456789",
  //       seller_email: "pottery@clayworks.com",
  //       introduction:
  //         "Greetings! I'm Michael Lee, a ceramic artist dedicated to crafting high-quality pottery and home décor. My pieces blend modern aesthetics with traditional techniques, creating timeless designs that add warmth to any space. Whether you're looking for handcrafted dinnerware or statement vases, my shop offers something unique for every home. Let's bring artistry into your everyday life!",
  //       username: "Admin1",
  //       firstname: "Chris",
  //       lastname: "Smith",
  //       profile_picture: null,
  //     },
  //   ];
  const seller = {
    seller_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    seller_email: "seller@heavenmail.com",
    address: "123 Maple Street Springfield, Anytown 12345 United States",
    introduction:
      "Hello! I'm Alex Johnson, an experienced seller specializing in premium home goods and unique décor items. With a keen eye for quality and design, I curate a selection of products that blend functionality with style. My commitment is to provide exceptional customer service and ensure a seamless shopping experience. Whether you're looking to enhance your living space or find the perfect gift, I'm here to help you discover something truly special. Let's make your home a reflection of your taste and personality!",
    firstname: "Alex",
    lastname: "Johnson",
    profile_picture: "/artists/artist1.webp",
  };
  return (
    <div className="flex flex-row w-fit border border-black rounded-xl" key={seller.seller_id}>
      <div className="w-[150px] h-[200px]">
        <Link href={`/home/artists/${seller.seller_id}`}>
            <Image
            src={seller.profile_picture}
            alt={`${seller.firstname} ${seller.lastname}'s photo`}
            width={300}
            height={400}
            className="rounded-l-lg"
            />
        </Link>
      </div>
      <div className="px-4 w-[300px] h-[200px] overflow-hidden relative">
        <p className="text-center">
          <span className="font-extrabold text-2xl">
            {seller.firstname} {seller.lastname}
          </span>
          <a href={`mailto:${seller.seller_email}`}>
            <FiMail className="inline mx-1" />
          </a>
        </p>
        <p className="text-sm py-4 text-center">
          <BsShopWindow className="inline mx-1" />
          <span>{seller.address}</span>
        </p>
        <p className="line-clamp-3">{seller.introduction}</p>
        <Link href={`/home/artists/${seller.seller_id}`}><div className="bg-white absolute bottom-0 right-5 px-4">more</div></Link>
      </div>
    </div>
  );
}
