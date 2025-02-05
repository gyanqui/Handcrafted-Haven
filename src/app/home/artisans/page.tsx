import ArtisanWrapper from "@/app/ui/home/ArtisanWrapper";

export default function Page() {
  const sellers = [
    {
      seller_id: "410544b2-4001-4271-9855-fec4b6a6442a",
      seller_email: "seller@heavenmail.com",
      introduction:
        "Hello! I'm Alex Johnson, an experienced seller specializing in premium home goods and unique décor items. With a keen eye for quality and design, I curate a selection of products that blend functionality with style. My commitment is to provide exceptional customer service and ensure a seamless shopping experience. Whether you're looking to enhance your living space or find the perfect gift, I'm here to help you discover something truly special. Let's make your home a reflection of your taste and personality!",
      username: "Seller1",
      firstname: "Alex",
      lastname: "Johnson",
      profile_image_url: "/artisans/artisan1.webp",
      address: "123 Maple Street Springfield, Anytown 12345 United States",
    },
    {
      seller_id: "5123bcde-1234-5678-9abc-def012345678",
      seller_email: "artisan@craftmail.com",
      introduction:
        "Hi there! I'm Sophia Williams, a passionate artisan and seller of handmade jewelry and artisan crafts. Each piece I create is designed with love and attention to detail, ensuring a one-of-a-kind experience for my customers. From elegant necklaces to custom-made bracelets, my collection celebrates craftsmanship and individuality. Join me on this journey to bring beauty and creativity to your everyday life!",
      username: "User1",
      firstname: "Jane",
      lastname: "Doe",
      profile_image_url: "/artisans/artisan2.webp",
      address: "456 Oak Avenue, Riverdale, Anycity 67890, Canada",
    },
    {
      seller_id: "789abcd0-2345-6789-0abc-def123456789",
      seller_email: "pottery@clayworks.com",
      introduction:
        "Greetings! I'm Michael Lee, a ceramic artisan dedicated to crafting high-quality pottery and home décor. My pieces blend modern aesthetics with traditional techniques, creating timeless designs that add warmth to any space. Whether you're looking for handcrafted dinnerware or statement vases, my shop offers something unique for every home. Let's bring artistry into your everyday life!",
      username: "Admin1",
      firstname: "Chris",
      lastname: "Smith",
      profile_image_url: null,
      address: "789 Pine Street, Maplewood, Anyprovince 34567, Australia",
    },
  ];
  return (
    <div className="p-8">
      <ArtisanWrapper sellers={sellers} />
    </div>
  );
}
