const users = [
  {
    user_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    username: "User1",
    email: "user1@heavenmail.com",
    created_at: "2025-01-01T00:00:00.000Z",
    password: "123456",
    firstname: "Alex",
    lastname: "Johnson",
    type: "User",
    profile_image_url: "/artisans/artisan1.webp",
  },
  {
    user_id: "a2f50c11-1f14-43d8-8f70-42b54a4b7f28",
    username: "User2",
    email: "user2@heavenmail.com",
    created_at: "2025-01-02T00:00:00.000Z",
    password: "abcdef",
    firstname: "Jane",
    lastname: "Doe",
    type: "User",
    profile_image_url: "/artisans/artisan2.webp",
  },
  {
    user_id: "f74a9f60-6f0c-4c1d-8746-1d2831be8f46",
    username: "Admin1",
    email: "admin@heavenmail.com",
    created_at: "2025-01-03T00:00:00.000Z",
    password: "654321",
    firstname: "Chris",
    lastname: "Smith",
    type: "Admin",
    profile_image_url: null,
  },
];

const sellers = [
  {
    seller_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    seller_email: "seller@heavenmail.com",
    address: "123 Maple Street Springfield, Anytown 12345 United States",
    status: "active",
    introduction:
      "Hello! I'm Alex Johnson, an experienced seller specializing in premium home goods and unique décor items. With a keen eye for quality and design, I curate a selection of products that blend functionality with style. My commitment is to provide exceptional customer service and ensure a seamless shopping experience. Whether you're looking to enhance your living space or find the perfect gift, I'm here to help you discover something truly special. Let's make your home a reflection of your taste and personality!",
    user_id: users[0].user_id,
  },
  {
    seller_id: "5123bcde-1234-5678-9abc-def012345678",
    seller_email: "artisan@craftmail.com",
    address: "456 Oak Avenue, Riverdale, Anycity 67890, Canada",
    status: "active",
    introduction:
      "Hi there! I'm Sophia Williams, a passionate artisan and seller of handmade jewelry and artisan crafts. Each piece I create is designed with love and attention to detail, ensuring a one-of-a-kind experience for my customers. From elegant necklaces to custom-made bracelets, my collection celebrates craftsmanship and individuality. Join me on this journey to bring beauty and creativity to your everyday life!",
    user_id: users[1].user_id,
  },
  {
    seller_id: "8a126989-a1af-4dc9-9ae6-cb66a10b4625",
    seller_email: "pottery@clayworks.com",
    address: "789 Pine Street, Maplewood, Anyprovince 34567, Australia",
    status: "active",
    introduction:
      "Greetings! I'm Michael Lee, a ceramic artisan dedicated to crafting high-quality pottery and home décor. My pieces blend modern aesthetics with traditional techniques, creating timeless designs that add warmth to any space. Whether you're looking for handcrafted dinnerware or statement vases, my shop offers something unique for every home. Let's bring artistry into your everyday life!",
    user_id: users[2].user_id,
  },
];

const categories = [
  {
    category_id: "d8e9f8b6-7cb4-4fbb-bc07-23dfeff30c2d",
    category: "Pottery & Ceramics",
    category_url: "/category/pottery.webp", //0
  },
  {
    category_id: "b9e1a526-77c1-4a9a-8e0f-6599b6e2f00c",
    category: "Woodcraft & Carving",
    category_url: "/category/woodcraft.webp", //1
  },
  {
    category_id: "712e774e-0ad4-4c10-8a1a-981f9df5f7e8",
    category: "Textile & Fiber Arts",
    category_url: "/category/textile.webp", //2
  },
  {
    category_id: "f40f68b8-e8c3-473a-b6b3-324684703c19",
    category: "Glass Creations",
    category_url: "/category/glass.webp", //3
  },
  {
    category_id: "a5f1749f-89be-44e1-a6e1-f2c21b5eb930",
    category: "Metal Art & Jewelry",
    category_url: "/category/metal.webp",  //4
  },
  {
    category_id: "21dff6d8-3a79-4882-b8ef-78412b7ba946",
    category: "Leather Goods",
    category_url: "/category/leather.webp",  //5
  },
  {
    category_id: "c1a6319c-5825-4d83-8989-c05b4a3cb3cb",
    category: "Paper & Stationery",
    category_url: "/category/paper.webp",  //6
  },
  {
    category_id: "f65053b2-3d83-4ef4-a6fa-e3b34f43f3d7",
    category: "Candles & Scents",
    category_url: "/category/candles.webp",  //7
  },
  {
    category_id: "8761b01c-b6c3-4f3d-901a-196451de41fa",
    category: "Bath & Body",
    category_url: "/category/bath.webp",  //8
  },
  {
    category_id: "34a76a1b-6d4c-4911-9f93-093129c3a4b6",
    category: "Mosaic & Mixed Media",
    category_url: "/category/mixed-media.webp",  //9
  },
  {
    category_id: "e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3",
    category: "Other",
    category_url: "/category/other.webp",  //10
  },
];

const products = [
  {
    product_id: "1bb5b9e8-0e3f-4e3b-a146-cc22f2ab429b",
    name: "Luxury Bath Soap Set",  //1
    price: 25.0,
    quantity: 50,
    description:
      "Pamper yourself or your loved ones with this luxurious bath soap set! Featuring three handcrafted soaps infused with natural ingredients and an orange scrub for gentle exfoliation, this set offers a spa-like experience right at home. The beautiful floral packaging makes it a perfect gift for any occasion. Indulge in a refreshing cleanse that nourishes your skin while delighting your senses!",
    image_url: "/products/bath-bath-set.webp",
    created_at: "2024-10-10T16:53:34Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[8].category_id, // Refers to "bath & body"
  },
  {
    product_id: "29195daa-b926-4ef8-9bf4-157aaf16daa1",
    name: "Aromatic Bath Bomb Set",  //2
    price: 15.0,
    quantity: 100,
    description:
      "Transform your bath into a fragrant oasis with our Aromatic Bath Bomb Set! With delightful scents like lavender, strawberry, lemon, and more, these colorful bath bombs fizz and release essential oils that relax your body and rejuvenate your mind. Perfect for self-care routines or as a thoughtful gift, this set guarantees a luxurious soak every time. Treat yourself to the ultimate relaxation experience!",
    image_url: "/products/bath-bathball.webp",
    created_at: "2024-11-07T14:45:50Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[8].category_id, // Refers to "bath & body"
  },
  {
    product_id: "1fa9e5ff-52a5-4aed-95f6-51afadb15d5a",
    name: "Herbal Lightening Cream",  //3
    price: 18.0,
    quantity: 30,
    description:
      "Achieve radiant, glowing skin with our Herbal Lightening Cream! Made with a blend of natural herbal ingredients, this cream moisturizes, nourishes, and brightens your skin without any harsh chemicals. Perfect for daily use, it's ideal for anyone seeking a more even complexion and a healthy glow. Add this must-have to your skincare routine and see the difference!",
    image_url: "/products/bath-lightening-cream.webp",
    created_at: "2024-12-23T06:11:00Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[8].category_id, // Refers to "bath & body"
  },
  {
    product_id: "a4e449e2-7eec-4616-95e8-3f85c8eef300",
    name: "Fragrant Stone Diffuser",  //4
    price: 30.0,
    quantity: 40,
    description:
      "Enhance your room's ambiance with our Fragrant Stone Diffuser. Designed with a natural aesthetic, it features handcrafted owls, flower petals, and Himalayan salt stones to create a cozy, refreshing atmosphere. Just add your favorite essential oil for a long-lasting aroma that soothes your senses. Perfect for home decor or as a thoughtful gift!",
    image_url: "/products/candles-fragrant-stone.webp",
    created_at: "2024-10-09T10:09:37Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[7].category_id, // Refers to "candles & scents"
  },
  {
    product_id: "b4585f60-9993-428d-bc00-18fe7fe2b2c1",
    name: "Handcrafted Jelly Candles",  //5
    price: 20.0,
    quantity: 60,
    description:
      "Light up your space with these stunning handcrafted jelly candles. Embedded with dried flowers, cinnamon sticks, and other natural elements, these candles bring warmth and charm to any occasion. With their translucent glow, they’re perfect for home decor, romantic evenings, or gifting. Experience elegance in every flicker!",
    image_url: "/products/candles-jelly-candle.webp",
    created_at: "2024-12-29T19:56:43Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[7].category_id, // Refers to "candles & scents"
  },
  {
    product_id: "a5d676c2-0dfc-4c58-86ec-b6cc59466b38",
    name: "Gold Number Birthday Candles",  //6
    price: 5.0,
    quantity: 120,
    description:
      "Make your celebrations memorable with our Gold Number Birthday Candles. With their sleek metallic finish and modern design, these candles add a touch of sophistication to any cake. Ideal for birthdays, anniversaries, or milestone events, they’re sure to make your special moments shine!",
    image_url: "/products/candles-number-candle.webp",
    created_at: "2025-01-18T03:42:09Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[7].category_id, // Refers to "candles & scents"
  },
  {
    product_id: "f1c9d849-1b70-4fc3-84a5-fdb30a254198",
    name: "Handcrafted Glass Candle Holders",  //7
    price: 35.0,
    quantity: 50,
    description:
      "Elevate your decor with our Handcrafted Glass Candle Holders. Designed with embedded dried flowers, these stunning pieces add a touch of elegance and warmth to any space. Perfect for weddings, dinner tables, or as thoughtful gifts, these candle holders combine artistry and functionality in one beautiful package.",
    image_url: "/products/glass-candle-holder.webp",
    created_at: "2024-11-26T09:14:46Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[3].category_id, // Refers to "glass creations"
  },
  {
    product_id: "3b5bc02c-3fd2-4b4f-bab6-4901ff8d64c0",
    name: "Miniature Glass Garden Terrarium",  //8
    price: 40.0,
    quantity: 30,
    description:
      "Bring a piece of nature into your home with our Miniature Glass Garden Terrarium. Featuring adorable hand-painted figurines and lush greenery, this self-contained ecosystem is a delightful way to add charm and tranquility to any room. Perfect as a unique gift or centerpiece, this terrarium is a miniature world waiting to brighten your day.",
    image_url: "/products/glass-garden.webp",
    created_at: "2025-01-14T00:55:24Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[3].category_id, // Refers to "glass creations"
  },
  {
    product_id: "19e24558-5087-4b44-9c9d-4b31eaf30a47",
    name: "Mosaic Solar-Powered Lanterns", //9
    price: 50.0,
    quantity: 25,
    description:
      "Light up your nights with our stunning Mosaic Solar-Powered Lanterns. Featuring intricate glass designs that cast mesmerizing patterns, these eco-friendly lanterns charge during the day and glow beautifully at night. Perfect for outdoor gatherings, garden decor, or adding a pop of color to your home, these lanterns blend functionality with artistic flair.",
    image_url: "/products/glass-light.webp",
    created_at: "2025-01-15T11:29:52Z",
    seller_id: sellers[2].seller_id,
    category_id: categories[3].category_id, // Refers to "glass creations"
  },
  {
    product_id: "2c407920-1332-4eb2-87f2-74c88738c14c",
    name: "Elegant Lace Leather Belt",  //10
    price: 20.0,
    quantity: 80,
    description:
      "Add a touch of sophistication to your outfit with our Elegant Lace Leather Belt. Designed with intricate lace patterns and made from high-quality leather, this belt is perfect for enhancing dresses, coats, and more. Its adjustable tie ensures a perfect fit for any waist size. A must-have accessory for fashion enthusiasts!",
    image_url: "/products/leather-belt.webp",
    created_at: "2025-01-03T04:23:45Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[5].category_id, // Refers to "leather goods"
  },
  {
    product_id: "86c35669-b6bc-4640-9a38-79c9820e77c4",
    name: "Leather Horse Keychain",  //11
    price: 12.0,
    quantity: 150,
    description:
      "Carry charm and functionality with our Leather Horse Keychain. Featuring an adorable hand-stitched horse design and an initial letter for personalization, this keychain is both stylish and practical. Perfect as a thoughtful gift or a fun accessory for your keys and bags!",
    image_url: "/products/leather-keyring.webp",
    created_at: "2024-11-09T20:45:23Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[5].category_id, // Refers to "leather goods"
  },
  {
    product_id: "e6e57e49-4a8b-4ac3-b9e6-6617ebbb0dc5",
    name: "Classic Leather Wallet", //12
    price: 40.0,
    quantity: 60,
    description:
      "Keep your essentials organized in style with our Classic Leather Wallet. Crafted from premium genuine leather, this wallet features multiple compartments for cash, cards, and coins. Its timeless design and durable build make it a perfect choice for everyday use or as a thoughtful gift for someone special.",
    image_url: "/products/leather-wallet.webp",
    created_at: "2025-01-12T23:41:44Z",
    seller_id: sellers[2].seller_id,
    category_id: categories[5].category_id, // Refers to "leather goods"
  },
  {
    product_id: "6fa182e4-d64e-4049-b8b6-35b38f07a5cf",
    name: "Vintage Metal Motorcycle Models",  //13
    price: 60.0,
    quantity: 20,
    description:
      "Add a touch of retro charm to your home or office with our Vintage Metal Motorcycle Models. These handcrafted models are intricately designed with fine details, making them the perfect gift for motorcycle enthusiasts or collectors. Ideal as a centerpiece or unique decor, these models bring an adventurous spirit to any space.",
    image_url: "/products/metal-motorcycles.webp",
    created_at: "2025-01-28T01:18:23Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[4].category_id, // Refers to "metal art & jewelry"
  },
  {
    product_id: "71263ee4-b75a-4f40-95b5-1b4174db2fcb",
    name: "Handcrafted Rose Quartz Pendant",  //14
    price: 25.0,
    quantity: 50,
    description:
      "Elegantly crafted, our Rose Quartz Pendant is a timeless piece that exudes natural beauty. Encased in an intricate metal wire wrap, this necklace symbolizes love and tranquility, making it a meaningful gift or a perfect accessory for any outfit. Add a touch of elegance and spirituality to your jewelry collection today.",
    image_url: "/products/metal-necklace.webp",
    created_at: "2024-12-31T20:34:01Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[4].category_id, // Refers to "metal art & jewelry"
  },
  {
    product_id: "8b5e3c58-b81b-49b7-8701-fb45b0a22cda",
    name: "Antique-Style Engraved Ring",  //15
    price: 30.0,
    quantity: 40,
    description:
      "Celebrate timeless elegance with our Antique-Style Engraved Ring. Featuring detailed engravings and a classic design, this ring is a beautiful symbol of love and commitment. Perfect for weddings, anniversaries, or as a statement piece, this ring blends tradition with sophistication for any occasion.",
    image_url: "/products/metal-ring.webp",
    created_at: "2024-11-04T19:50:52Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[4].category_id, // Refers to "metal art & jewelry"
  },
  {
    product_id: "7d1ea43e-62c5-46a7-8f48-63a2a1c60f6c",
    name: "Miniature Bistro Dollhouse",  //16
    price: 70.0,
    quantity: 15,
    description:
      "Bring your creative dreams to life with our Miniature Bistro Dollhouse! This detailed DIY kit comes with all the materials you need to craft a charming restaurant scene, complete with furniture, decor, and a cozy ambiance. Perfect as a relaxing project or a delightful gift, this dollhouse is a true treasure for hobbyists and collectors.",
    image_url: "/products/mixed-house.webp",
    created_at: "2025-01-18T11:35:15Z",
    seller_id: sellers[2].seller_id,
    category_id: categories[9].category_id, // Refers to "mosaic & mixed media"
  },
  {
    product_id: "d0ad9d5e-0982-4e4b-995c-41edfc0710da",
    name: "Wood & Resin Ocean Lamp",  //17
    price: 120.0,
    quantity: 10,
    description:
      "Immerse yourself in the beauty of the ocean with our Wood & Resin Ocean Lamp. Featuring breathtaking underwater details captured in resin, this lamp is a perfect blend of artistry and functionality. Its soft glow creates a relaxing atmosphere, making it a unique decor piece for your living space or a thoughtful gift for art lovers.",
    image_url: "/products/mixed-lamp.webp",
    created_at: "2024-11-04T11:17:08Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[9].category_id, // Refers to "mosaic & mixed media"
  },
  {
    product_id: "fc5d7ee5-b0c2-468c-b3bb-798b38fa0078",
    name: "Mandala Mosaic Coaster Set",  //18
    price: 25.0,
    quantity: 50,
    description:
      "Add a splash of color to your table with our Mandala Mosaic Coaster Set. These beautifully designed coasters are handcrafted with vibrant glass beads, making them both functional and decorative. Perfect for protecting surfaces while elevating your home decor, they also make a fantastic gift for any occasion!",
    image_url: "/products/mosaic-pad.webp",
    created_at: "2025-01-14T13:04:37Z",
    seller_id: sellers[2].seller_id,
    category_id: categories[3].category_id, // Refers to "glass creations"
  },
  {
    product_id: "fe11fffb-ec6b-4d97-bab0-8dc7b426f632",
    name: "Colorful Mosaic Vase Collection",  //19
    price: 35.0,
    quantity: 30,
    description:
      "Brighten up your space with our Colorful Mosaic Vase Collection! Each vase features intricate mosaic patterns in vibrant colors, perfect for showcasing flowers or as stand-alone decor. These artistic vases are a beautiful blend of craftsmanship and functionality, making them an excellent choice for home decor or as a unique gift.",
    image_url: "/products/mosaic-vase.webp",
    created_at: "2025-01-18T06:51:43Z",
    seller_id: sellers[1].seller_id,
    category_id: categories[3].category_id, // Refers to "glass creations"
  },
  {
    product_id: "b1c8e90c-617e-4070-87b6-603ea8368cc8",
    name: "Colorful Kids' Animal Artwork",  //20
    price: 45.0,
    quantity: 20,
    description:
      "Celebrate creativity with our Colorful Kids' Animal Artwork! This vibrant, hand-painted piece features a charming ensemble of wild animals, making it perfect for brightening up kids' rooms or as a unique gift for art lovers. Let the vivid colors and playful design bring joy to your space!",
    image_url: "/products/other-kids-drawing.webp",
    created_at: "2024-12-28T05:26:53Z",
    seller_id: sellers[1].seller_id,
    category_id: categories[10].category_id, // Refers to "other"
  },
  {
    product_id: "53a26c5e-1e52-441d-851d-99b0ee978f76",
    name: "Fantasy Feather Metal Bookmarks",  //21
    price: 12.0,
    quantity: 100,
    description:
      "Add a touch of elegance to your reading experience with our Fantasy Feather Metal Bookmarks. Crafted with intricate feather designs and golden accents, these bookmarks are perfect for book lovers who appreciate beauty and functionality. A wonderful gift for avid readers and collectors!",
    image_url: "/products/paper-bookmark.webp",
    created_at: "2024-12-30T18:35:43Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[7].category_id, // Refers to "paper & stationery"
  },
  {
    product_id: "b6c2d5a4-4ebc-4d40-96b0-2a1e7ff4b52c",
    name: "Pop-Up Heart Love Card",  //22
    price: 8.0,
    quantity: 150,
    description:
      "Express your love in a creative way with our Pop-Up Heart Love Card. This intricately designed card features a 3D heart that pops up with the message 'I Love You,' making it perfect for Valentine's Day, anniversaries, or any special occasion. Show your loved ones how much you care with this thoughtful gesture!",
    image_url: "/products/paper-card.webp",
    created_at: "2024-12-13T17:15:42Z",
    seller_id: sellers[1].seller_id,
    category_id: categories[7].category_id, // Refers to "paper & stationery"
  },
  {
    product_id: "64d3c927-4f1a-437b-83a5-499d9703a791",
    name: "DIY Gingerbread House Kit",  //23
    price: 25.0,
    quantity: 50,
    description:
      "Unleash your creativity this holiday season with our DIY Gingerbread House Kit! Complete with all the materials you need to build and decorate your own festive house, this kit is perfect for family bonding or as a thoughtful gift. Bring the joy of the season to life with this delightful activity!",
    image_url: "/products/paper-house.webp",
    created_at: "2024-12-19T00:53:12Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[7].category_id, // Refers to "paper & stationery"
  },
  {
    product_id: "e6a8b015-47b3-4263-8925-4cc5648f6526",
    name: "Kintsugi Ceramic Bowl",  //24
    price: 50.0,
    quantity: 25,
    description:
      "Celebrate imperfection with our Kintsugi Ceramic Bowl, a symbol of resilience and beauty. Featuring hand-applied gold accents on cracks, this bowl embraces the Japanese art of repairing with elegance. Perfect as a decorative piece or a thoughtful gift for those who value artistry and history.",
    image_url: "/products/pottery-cup.webp",
    created_at: "2025-01-25T18:32:58Z",
    seller_id: sellers[1].seller_id,
    category_id: categories[0].category_id, // Refers to "pottery & ceramics"
  },
  {
    product_id: "41d2c5a4-06d8-4c3e-8ad6-92de80b77e1b",
    name: "Handmade Boy Doll with Outfits",  //25
    price: 35.0,
    quantity: 40,
    description:
      "Bring joy to kids and collectors alike with our Handmade Boy Doll. This adorable doll comes with two interchangeable outfits, crafted with love and attention to detail. Perfect as a cuddly companion or a decorative piece, it’s a charming addition to any doll collection.",
    image_url: "/products/textile-boy-doll.webp",
    created_at: "2025-01-30T21:38:54Z",
    seller_id: sellers[1].seller_id,
    category_id: categories[2].category_id, // Refers to "textile & fiber arts"
  },
  {
    product_id: "8b8a5db7-66c5-4a8f-91d5-41b68f3d19a7",
    name: "Quilted Dog Vest",  //26
    price: 25.0,
    quantity: 60,
    description:
      "Keep your furry friend stylish and warm with our Quilted Dog Vest. Featuring adorable bear patterns and soft, breathable fabric, this vest ensures comfort and cuteness for your pet. Ideal for walks, chilly weather, or as a unique gift for pet lovers!",
    image_url: "/products/textile-dog-vest.webp",
    created_at: "2024-12-30T13:42:11Z",
    seller_id: sellers[2].seller_id,
    category_id: categories[2].category_id, // Refers to "textile & fiber arts"
  },
  {
    product_id: "06e99fdc-6d59-4532-8893-22f9a9ebda98",
    name: "Embroidered Leaf Brooch",  //27
    price: 10.0,
    quantity: 100,
    description:
      "Add a touch of nature to your style with our Embroidered Leaf Brooch. Made with intricate stitching and vibrant green hues, this brooch is perfect for accessorizing jackets, bags, or scarves. A wonderful gift for nature lovers and embroidery enthusiasts.",
    image_url: "/products/textile-leaf.webp",
    created_at: "2024-10-21T20:47:42Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[2].category_id, // Refers to "textile & fiber arts"
  },
  {
    product_id: "54cfb496-9494-4e2a-b8f3-21f0d7b9cbd7",
    name: "Crocheted Star Scarf",  //28
    price: 40.0,
    quantity: 30,
    description:
      "Stay cozy and stylish with our Crocheted Star Scarf. Handcrafted with colorful yarn and adorned with playful star tassels, this scarf is a unique blend of warmth and whimsy. Perfect for chilly days or as a delightful gift for crochet lovers.",
    image_url: "/products/textile-scarf.webp",
    created_at: "2024-10-31T06:35:39Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[2].category_id, // Refers to "textile & fiber arts"
  },
  {
    product_id: "64e5a9cd-999e-46f7-82be-c74f98d11b40",
    name: "Vintage Wooden Jewelry Box",  //29
    price: 45.0,
    quantity: 20,
    description:
      "Store your treasures in style with our Vintage Wooden Jewelry Box. Featuring ornate metal accents and a timeless design, this handcrafted box is both functional and decorative. A perfect gift for anyone who loves rustic charm and quality craftsmanship.",
    image_url: "/products/woodcraft-box.webp",
    created_at: "2024-12-09T13:26:32Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[1].category_id, // Refers to "woodcraft & carving"
  },
  {
    product_id: "86a49916-d0f1-40f5-8ef1-7f9ff438fc42",
    name: "Hand-Carved Wooden Elephants",  //30
    price: 30.0,
    quantity: 40,
    description:
      "Bring the spirit of the jungle into your home with our Hand-Carved Wooden Elephants. Crafted with care from quality wood, these intricate figurines are perfect as decor pieces or gifts for wildlife enthusiasts. A symbol of strength and wisdom, they’re a charming addition to any space.",
    image_url: "/products/woodcraft-elephants.webp",
    created_at: "2024-11-13T09:35:04Z",
    seller_id: sellers[0].seller_id,
    category_id: categories[1].category_id, // Refers to "woodcraft & carving"
  },
  {
    product_id: "77a641fc-5220-40c1-a391-ff1c94f20fbb",
    name: "Engraved Wooden Spoons Set",  //31
    price: 20.0,
    quantity: 50,
    description:
      "Upgrade your kitchen with our Engraved Wooden Spoons Set. Featuring unique patterns and crafted from durable wood, these spoons are perfect for cooking, serving, or displaying as rustic decor. A thoughtful gift for home cooks and kitchen enthusiasts!",
    image_url: "/products/woodcraft-spoon.webp",
    created_at: "2025-01-10T20:21:39Z",
    seller_id: sellers[2].seller_id,
    category_id: categories[1].category_id, // Refers to "woodcraft & carving"
  },
];

const reviews = [
  {
    review_id: "8bdaee39-7c5b-4b5c-a6b0-0c2c7741e123",
    title: "Absolutely stunning!",
    created_at: "2024-11-20T00:00:00Z",
    rating: 5,
    review:
      "This ring exceeded my expectations! The engravings are so detailed, and the antique-style design gives it such a timeless charm. It fits perfectly and looks elegant with any outfit. Highly recommend!",
    product_id: products[14].product_id,
    user_id: users[1].user_id,
  },
  {
    review_id: "df12b456-7890-4c3d-b9e3-123456789abc",
    title: "Elegant and meaningful",
    created_at: "2025-02-01T00:00:00Z",
    rating: 4,
    review:
      "This Kintsugi bowl is a stunning piece of art. The golden repairs give it a unique charm and symbolize resilience beautifully. I love using it as a decorative piece. However, I expected it to be a bit heavier and sturdier.",
    product_id: products[23].product_id,
    user_id: users[2].user_id,
  },
  {
    review_id: "89c837c3-0114-41f7-8efa-83e7c1266ff5",
    title: "Soft and warm!",
    created_at: "2024-11-15T00:00:00Z",
    rating: 4.5,
    review:
      "This scarf is beautifully made and super soft. The star tassels add a unique touch. I love it, but I wish it was slightly longer for better wrapping.",
    product_id: products[27].product_id,
    user_id: users[0].user_id,
  },
  {
    review_id: "369e214c-7bc9-4ff8-a97f-6ea108238d9f",
    title: "Beautiful craftsmanship",
    created_at: "2025-01-30T00:00:00Z",
    rating: 5,
    review:
      "I love these wooden spoons! The engravings are beautifully done, and the wood feels very sturdy. Perfect for cooking and serving.",
    product_id: products[30].product_id,
    user_id: users[1].user_id,
  },
  {
    "review_id": "ecb7d41e-9561-479f-92e7-82584353e714",
    "title": "Beautiful but slightly smaller than expected",
    "created_at": "2024-11-25T00:00:00Z",
    "rating": 4,
    "review": "The ring is beautifully designed, and the engravings are exquisite. However, it runs slightly smaller than expected, so make sure to check the sizing carefully. Still a great piece!",
    "product_id": products[14].product_id,
    "user_id": users[0].user_id
  },
  {
    "review_id": "82edf010-1d56-4a0f-8820-1e8a9cfc1d75",
    "title": "Elegant and well-crafted",
    "created_at": "2024-12-05T00:00:00Z",
    "rating": 4.5,
    "review": "This ring has a timeless elegance, and the craftsmanship is impressive. The only reason I'm giving it 4.5 instead of 5 is that the metal is a bit thinner than I expected. Still, it's a stunning ring!",
    "product_id": products[14].product_id,
    "user_id": users[2].user_id
  },
  {
    "review_id": "b9ab5edc-82a2-47d7-b3f1-a22c4423832d",
    "title": "Decent but not very strong",
    "created_at": "2024-10-20T00:00:00Z",
    "rating": 3,
    "review": "The design is lovely, and I love the handcrafted details. However, the scent doesn’t last as long as I expected, and I have to reapply the essential oil frequently.",
    "product_id": products[3].product_id,
    "user_id": users[0].user_id
  },
  {
    "review_id": "ecd8a8e9-3b4a-4e4e-84a0-5d9651983004",
    "title": "Absolutely love this!",
    "created_at": "2024-11-05T00:00:00Z",
    "rating": 5,
    "review": "This diffuser is perfect! The scent spreads beautifully, and the design adds such a cozy touch to my space. I highly recommend it to anyone who loves home decor and relaxing aromas.",
    "product_id": products[3].product_id,
    "user_id": users[1].user_id
  },
  {
    "review_id": "d8ba327b-bf7a-4231-ab38-13e318b33c65",
    "title": "Great product with a minor flaw",
    "created_at": "2024-11-15T00:00:00Z",
    "rating": 4.5,
    "review": "I really enjoy this diffuser. The stones and details make it a beautiful decorative piece, and it works well with my essential oils. I just wish the scent diffusion lasted a bit longer without needing to refresh it.",
    "product_id": products[3].product_id,
    "user_id": users[2].user_id
  }  
];

export { sellers, products, users, reviews, categories };