const users = [
    {
      user_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      username: 'Seller1',
      email: 'user@heavenmail.com',
      created_at: '2025-01-01',
      password: '123456',
      firstname: 'Alex',
      lastname: 'Johnson',
      type: 'Seller',
      profile_picture: null,
      // seller_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    },
    {
      user_id: "a2f50c11-1f14-43d8-8f70-42b54a4b7f28",
      username: "User1",
      email: "user@heavenmail.com",
      created_at: "2025-01-02",
      password: "abcdef",
      firstname: "Jane",
      lastname: "Doe",
      type: "User",
      profile_picture: null,
      // seller_id: "52a8fcbe-1722-41e7-8291-57807e0eae41"
    },
    {
      user_id: "f74a9f60-6f0c-4c1d-8746-1d2831be8f46",
      username: "Admin1",
      email: "admin@heavenmail.com",
      created_at: "2025-01-03",
      password: "654321",
      firstname: "Chris",
      lastname: "Smith",
      type: "Admin",
      profile_picture: null,
      // seller_id: "eb6725d2-3b87-4b7b-bf24-6d7f971717f1"
    }
  ];
    
  const sellers = [
    {
      seller_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      seller_email: 'seller@heavenmail.com',
      address: '123 Maple Street Springfield, Anytown 12345 United States',
      status: 'Active',
      introduction : 'Hello! I\'m Alex Johnson, an experienced seller specializing in premium home goods and unique décor items. With a keen eye for quality and design, I curate a selection of products that blend functionality with style. My commitment is to provide exceptional customer service and ensure a seamless shopping experience. Whether you\'re looking to enhance your living space or find the perfect gift, I\'m here to help you discover something truly special. Let\'s make your home a reflection of your taste and personality!',
      user_id: users[0].user_id,
    },
  ]
  
  const categories = [
    {
      category_id: 'd8e9f8b6-7cb4-4fbb-bc07-23dfeff30c2d',
      category: 'Pottery & Ceramics',
      category_url: '/category/pottery.webp'
    },
    {
      category_id: 'b9e1a526-77c1-4a9a-8e0f-6599b6e2f00c',
      category: 'Woodcraft & Carving',
      category_url: '/category/woodcraft.webp'
    },
    {
      category_id: '712e774e-0ad4-4c10-8a1a-981f9df5f7e8',
      category: 'Textile & Fiber Arts',
      category_url: '/category/textile.webp'
    },
    {
      category_id: 'f40f68b8-e8c3-473a-b6b3-324684703c19',
      category: 'Glass Creations',
      category_url: '/category/glass.webp'
    },
    {
      category_id: 'a5f1749f-89be-44e1-a6e1-f2c21b5eb930',
      category: 'Metal Art & Jewelry',
      category_url: '/category/metal.webp'
    },
    {
      category_id: '21dff6d8-3a79-4882-b8ef-78412b7ba946',
      category: 'Leather Goods',
      category_url: '/category/leather.webp'
    },
    {
      category_id: 'c1a6319c-5825-4d83-8989-c05b4a3cb3cb',
      category: 'Paper & Stationery',
      category_url: '/category/paper.webp'
    },
    {
      category_id: 'f65053b2-3d83-4ef4-a6fa-e3b34f43f3d7',
      category: 'Candles & Scents',
      category_url: '/category/candles.webp'
    },
    {
      category_id: '8761b01c-b6c3-4f3d-901a-196451de41fa',
      category: 'Bath & Body',
      category_url: '/category/bath.webp'
    },
    {
      category_id: '34a76a1b-6d4c-4911-9f93-093129c3a4b6',
      category: 'Mosaic & Mixed Media',
      category_url: '/category/mixed-media.webp'
    },
    {
      category_id: 'e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3',
      category: 'Other',
      category_url: '/category/other.webp'
    },
  ]
  
  const products = [
    // {
    //   product_id: '123e4567-e89b-12d3-a456-426614174000',
    //   name: 'UltraSoft Pillow',
    //   price: 29.99,
    //   quantity: 50,
    //   description: 'A super soft pillow that provides excellent support for a good night\'s sleep.', 
    //   image_url: 'https://i.postimg.cc/FR95kV35/Capture.png',
    //   created_at: '2025-01-01',
    //   seller_id: sellers[0].seller_id,
    //   category_id: 'e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3',
    // },
    // {
    //   product_id: "987e6543-a21b-45c6-b123-987654321000",
    //   name: "Cozy Blanket",
    //   price: 39.99,
    //   quantity: 30,
    //   description: "A cozy and warm blanket perfect for chilly nights.",
    //   image_url: "https://i.postimg.cc/FR95kV35/Capture.png",
    //   created_at: "2025-01-02",
    //   seller_id: sellers[0].seller_id,
    //   category_id: "e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3"
    // },
    // {
    //   product_id: "564e7890-b32c-56d7-c789-654321098700",
    //   name: "Comfort Mattress",
    //   price: 249.99,
    //   quantity: 20,
    //   description: "A high-quality mattress that offers supreme comfort and support.",
    //   image_url: "https://i.postimg.cc/FR95kV35/Capture.png",
    //   created_at: "2025-01-03",
    //   seller_id: sellers[0].seller_id,
    //   category_id: "e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3"
    // },
    // {
    //   product_id: "789e0123-c43d-67e8-d890-098765432100",
    //   name: "Ergonomic Chair",
    //   price: 199.99,
    //   quantity: 25,
    //   description: "An ergonomic chair designed to provide maximum comfort and support for long hours of sitting.",
    //   image_url: "https://i.postimg.cc/FR95kV35/Capture.png",
    //   created_at: "2025-01-04",
    //   seller_id: sellers[0].seller_id,
    //   category_id: "e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3"
    // },
    // {
    //   product_id: "321e4567-d56f-78g9-e123-456789012300",
    //   name: "Luxurious Throw",
    //   price: 49.99,
    //   quantity: 40,
    //   description: "A luxurious throw that adds a touch of elegance and warmth to any room.",
    //   image_url: "https://i.postimg.cc/FR95kV35/Capture.png",
    //   created_at: "2025-01-05",
    //   seller_id: sellers[0].seller_id,
    //   category_id: "e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3"
    // },
    // {
    //   product_id: "654e3210-e78f-90h1-f234-123456789012",
    //   name: "Decorative Cushion",
    //   price: 19.99,
    //   quantity: 60,
    //   description: "A decorative cushion that enhances the aesthetic appeal of your living space.",
    //   image_url: "https://i.postimg.cc/FR95kV35/Capture.png",
    //   created_at: "2025-01-06",
    //   seller_id: sellers[0].seller_id,
    //   category_id: "e10d8d8d-8c91-44d3-b8c0-1dfb6d2179a3"
    // },
    {
      product_id: "1",
      name: "Luxury Bath Soap Set",
      price: 25.00,
      quantity: 50,
      description: "Pamper yourself or your loved ones with this luxurious bath soap set! Featuring three handcrafted soaps infused with natural ingredients and an orange scrub for gentle exfoliation, this set offers a spa-like experience right at home. The beautiful floral packaging makes it a perfect gift for any occasion. Indulge in a refreshing cleanse that nourishes your skin while delighting your senses!",
      image_url: "/products/bath-bath-set.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[8].category_id, // Refers to "bath & body"
    },
    {
      product_id: "2",
      name: "Aromatic Bath Bomb Set",
      price: 15.00,
      quantity: 100,
      description: "Transform your bath into a fragrant oasis with our Aromatic Bath Bomb Set! With delightful scents like lavender, strawberry, lemon, and more, these colorful bath bombs fizz and release essential oils that relax your body and rejuvenate your mind. Perfect for self-care routines or as a thoughtful gift, this set guarantees a luxurious soak every time. Treat yourself to the ultimate relaxation experience!",
      image_url: "/products/bath-bathball.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[8].category_id, // Refers to "bath & body"
    },
    {
      product_id: "3",
      name: "Herbal Lightening Cream",
      price: 18.00,
      quantity: 30,
      description: "Achieve radiant, glowing skin with our Herbal Lightening Cream! Made with a blend of natural herbal ingredients, this cream moisturizes, nourishes, and brightens your skin without any harsh chemicals. Perfect for daily use, it's ideal for anyone seeking a more even complexion and a healthy glow. Add this must-have to your skincare routine and see the difference!",
      image_url: "/products/bath-lightening-cream.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[8].category_id, // Refers to "bath & body"
    },
    {
      product_id: "4",
      name: "Fragrant Stone Diffuser",
      price: 30.00,
      quantity: 40,
      description: "Enhance your room's ambiance with our Fragrant Stone Diffuser. Designed with a natural aesthetic, it features handcrafted owls, flower petals, and Himalayan salt stones to create a cozy, refreshing atmosphere. Just add your favorite essential oil for a long-lasting aroma that soothes your senses. Perfect for home decor or as a thoughtful gift!",
      image_url: "/products/candles-fragrant-stone.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[7].category_id, // Refers to "candles & scents"
    },
    {
      product_id: "5",
      name: "Handcrafted Jelly Candles",
      price: 20.00,
      quantity: 60,
      description: "Light up your space with these stunning handcrafted jelly candles. Embedded with dried flowers, cinnamon sticks, and other natural elements, these candles bring warmth and charm to any occasion. With their translucent glow, they’re perfect for home decor, romantic evenings, or gifting. Experience elegance in every flicker!",
      image_url: "/products/candles-jelly-candle.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[7].category_id, // Refers to "candles & scents"
    },
    {
      product_id: "6",
      name: "Gold Number Birthday Candles",
      price: 5.00,
      quantity: 120,
      description: "Make your celebrations memorable with our Gold Number Birthday Candles. With their sleek metallic finish and modern design, these candles add a touch of sophistication to any cake. Ideal for birthdays, anniversaries, or milestone events, they’re sure to make your special moments shine!",
      image_url: "/products/candles-number-candle.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[7].category_id, // Refers to "candles & scents"
    },
    {
      product_id: "7",
      name: "Handcrafted Glass Candle Holders",
      price: 35.00,
      quantity: 50,
      description: "Elevate your decor with our Handcrafted Glass Candle Holders. Designed with embedded dried flowers, these stunning pieces add a touch of elegance and warmth to any space. Perfect for weddings, dinner tables, or as thoughtful gifts, these candle holders combine artistry and functionality in one beautiful package.",
      image_url: "/products/glass-candle-holder.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
      product_id: "8",
      name: "Miniature Glass Garden Terrarium",
      price: 40.00,
      quantity: 30,
      description: "Bring a piece of nature into your home with our Miniature Glass Garden Terrarium. Featuring adorable hand-painted figurines and lush greenery, this self-contained ecosystem is a delightful way to add charm and tranquility to any room. Perfect as a unique gift or centerpiece, this terrarium is a miniature world waiting to brighten your day.",
      image_url: "/products/glass-garden.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
      product_id: "9",
      name: "Mosaic Solar-Powered Lanterns",
      price: 50.00,
      quantity: 25,
      description: "Light up your nights with our stunning Mosaic Solar-Powered Lanterns. Featuring intricate glass designs that cast mesmerizing patterns, these eco-friendly lanterns charge during the day and glow beautifully at night. Perfect for outdoor gatherings, garden decor, or adding a pop of color to your home, these lanterns blend functionality with artistic flair.",
      image_url: "/products/glass-light.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
      product_id: "10",
      name: "Elegant Lace Leather Belt",
      price: 20.00,
      quantity: 80,
      description: "Add a touch of sophistication to your outfit with our Elegant Lace Leather Belt. Designed with intricate lace patterns and made from high-quality leather, this belt is perfect for enhancing dresses, coats, and more. Its adjustable tie ensures a perfect fit for any waist size. A must-have accessory for fashion enthusiasts!",
      image_url: "/products/leather-belt.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[5].category_id, // Refers to "leather goods"
    },
    {
      product_id: "11",
      name: "Leather Horse Keychain",
      price: 12.00,
      quantity: 150,
      description: "Carry charm and functionality with our Leather Horse Keychain. Featuring an adorable hand-stitched horse design and an initial letter for personalization, this keychain is both stylish and practical. Perfect as a thoughtful gift or a fun accessory for your keys and bags!",
      image_url: "/products/leather-keyring.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[5].category_id, // Refers to "leather goods"
    },
    {
      product_id: "12",
      name: "Classic Leather Wallet",
      price: 40.00,
      quantity: 60,
      description: "Keep your essentials organized in style with our Classic Leather Wallet. Crafted from premium genuine leather, this wallet features multiple compartments for cash, cards, and coins. Its timeless design and durable build make it a perfect choice for everyday use or as a thoughtful gift for someone special.",
      image_url: "/products/leather-wallet.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[5].category_id, // Refers to "leather goods"
    },
    {
      product_id: "13",
      name: "Vintage Metal Motorcycle Models",
      price: 60.00,
      quantity: 20,
      description: "Add a touch of retro charm to your home or office with our Vintage Metal Motorcycle Models. These handcrafted models are intricately designed with fine details, making them the perfect gift for motorcycle enthusiasts or collectors. Ideal as a centerpiece or unique decor, these models bring an adventurous spirit to any space.",
      image_url: "/products/metal-motorcycles.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[4].category_id, // Refers to "metal art & jewelry"
    },
    {
      product_id: "14",
      name: "Handcrafted Rose Quartz Pendant",
      price: 25.00,
      quantity: 50,
      description: "Elegantly crafted, our Rose Quartz Pendant is a timeless piece that exudes natural beauty. Encased in an intricate metal wire wrap, this necklace symbolizes love and tranquility, making it a meaningful gift or a perfect accessory for any outfit. Add a touch of elegance and spirituality to your jewelry collection today.",
      image_url: "/products/metal-necklace.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[4].category_id, // Refers to "metal art & jewelry"
    },
    {
      product_id: "15",
      name: "Antique-Style Engraved Ring",
      price: 30.00,
      quantity: 40,
      description: "Celebrate timeless elegance with our Antique-Style Engraved Ring. Featuring detailed engravings and a classic design, this ring is a beautiful symbol of love and commitment. Perfect for weddings, anniversaries, or as a statement piece, this ring blends tradition with sophistication for any occasion.",
      image_url: "/products/metal-ring.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[4].category_id, // Refers to "metal art & jewelry"
    },
    {
      product_id: "16",
      name: "Miniature Bistro Dollhouse",
      price: 70.00,
      quantity: 15,
      description: "Bring your creative dreams to life with our Miniature Bistro Dollhouse! This detailed DIY kit comes with all the materials you need to craft a charming restaurant scene, complete with furniture, decor, and a cozy ambiance. Perfect as a relaxing project or a delightful gift, this dollhouse is a true treasure for hobbyists and collectors.",
      image_url: "/products/mixed-house.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[10].category_id, // Refers to "mosaic & mixed media"
    },
    {
      product_id: "17",
      name: "Wood & Resin Ocean Lamp",
      price: 120.00,
      quantity: 10,
      description: "Immerse yourself in the beauty of the ocean with our Wood & Resin Ocean Lamp. Featuring breathtaking underwater details captured in resin, this lamp is a perfect blend of artistry and functionality. Its soft glow creates a relaxing atmosphere, making it a unique decor piece for your living space or a thoughtful gift for art lovers.",
      image_url: "/products/mixed-lamp.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[10].category_id, // Refers to "mosaic & mixed media"
    },
    {
      product_id: "18",
      name: "Mandala Mosaic Coaster Set",
      price: 25.00,
      quantity: 50,
      description: "Add a splash of color to your table with our Mandala Mosaic Coaster Set. These beautifully designed coasters are handcrafted with vibrant glass beads, making them both functional and decorative. Perfect for protecting surfaces while elevating your home decor, they also make a fantastic gift for any occasion!",
      image_url: "/products/mosaic-pad.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[3].category_id, // Refers to "glass creations"
    },
    { 
      product_id: "19",
      name: "Colorful Mosaic Vase Collection",
      price: 35.00,
      quantity: 30,
      description: "Brighten up your space with our Colorful Mosaic Vase Collection! Each vase features intricate mosaic patterns in vibrant colors, perfect for showcasing flowers or as stand-alone decor. These artistic vases are a beautiful blend of craftsmanship and functionality, making them an excellent choice for home decor or as a unique gift.",
      image_url: "/products/mosaic-vase.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
      product_id: "20",
      name: "Colorful Kids' Animal Artwork",
      price: 45.00,
      quantity: 20,
      description: "Celebrate creativity with our Colorful Kids' Animal Artwork! This vibrant, hand-painted piece features a charming ensemble of wild animals, making it perfect for brightening up kids' rooms or as a unique gift for art lovers. Let the vivid colors and playful design bring joy to your space!",
      image_url: "/products/other-kids-drawing.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[11].category_id, // Refers to "other"
    },
    {
      product_id: "21",
      name: "Fantasy Feather Metal Bookmarks",
      price: 12.00,
      quantity: 100,
      description: "Add a touch of elegance to your reading experience with our Fantasy Feather Metal Bookmarks. Crafted with intricate feather designs and golden accents, these bookmarks are perfect for book lovers who appreciate beauty and functionality. A wonderful gift for avid readers and collectors!",
      image_url: "/products/paper-bookmark.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[7].category_id, // Refers to "paper & stationery"
    },
    {
      product_id: "22",
      name: "Pop-Up Heart Love Card",
      price: 8.00,
      quantity: 150,
      description: "Express your love in a creative way with our Pop-Up Heart Love Card. This intricately designed card features a 3D heart that pops up with the message 'I Love You,' making it perfect for Valentine's Day, anniversaries, or any special occasion. Show your loved ones how much you care with this thoughtful gesture!",
      image_url: "/products/paper-card.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[7].category_id, // Refers to "paper & stationery"
    },
    {
      product_id: "23",
      name: "DIY Gingerbread House Kit",
      price: 25.00,
      quantity: 50,
      description: "Unleash your creativity this holiday season with our DIY Gingerbread House Kit! Complete with all the materials you need to build and decorate your own festive house, this kit is perfect for family bonding or as a thoughtful gift. Bring the joy of the season to life with this delightful activity!",
      image_url: "/products/paper-house.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[7].category_id, // Refers to "paper & stationery"
    },
    {
      product_id: "24",
      name: "Kintsugi Ceramic Bowl",
      price: 50.00,
      quantity: 25,
      description: "Celebrate imperfection with our Kintsugi Ceramic Bowl, a symbol of resilience and beauty. Featuring hand-applied gold accents on cracks, this bowl embraces the Japanese art of repairing with elegance. Perfect as a decorative piece or a thoughtful gift for those who value artistry and history.",
      image_url: "/products/pottery-cup.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[0].category_id, // Refers to "pottery & ceramics"
    },
    {
      product_id: "25",
      name: "Handmade Boy Doll with Outfits",
      price: 35.00,
      quantity: 40,
      description: "Bring joy to kids and collectors alike with our Handmade Boy Doll. This adorable doll comes with two interchangeable outfits, crafted with love and attention to detail. Perfect as a cuddly companion or a decorative piece, it’s a charming addition to any doll collection.",
      image_url: "/products/textile-boy-doll.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    {
      product_id: "26",
      name: "Quilted Dog Vest",
      price: 25.00,
      quantity: 60,
      description: "Keep your furry friend stylish and warm with our Quilted Dog Vest. Featuring adorable bear patterns and soft, breathable fabric, this vest ensures comfort and cuteness for your pet. Ideal for walks, chilly weather, or as a unique gift for pet lovers!",
      image_url: "/products/textile-dog-vest.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    { 
      product_id: "27",
      name: "Embroidered Leaf Brooch",
      price: 10.00,
      quantity: 100,
      description: "Add a touch of nature to your style with our Embroidered Leaf Brooch. Made with intricate stitching and vibrant green hues, this brooch is perfect for accessorizing jackets, bags, or scarves. A wonderful gift for nature lovers and embroidery enthusiasts.",
      image_url: "/products/textile-leaf.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    { 
      product_id: "28",
      name: "Crocheted Star Scarf",
      price: 40.00,
      quantity: 30,
      description: "Stay cozy and stylish with our Crocheted Star Scarf. Handcrafted with colorful yarn and adorned with playful star tassels, this scarf is a unique blend of warmth and whimsy. Perfect for chilly days or as a delightful gift for crochet lovers.",
      image_url: "/products/textile-scarf.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    {
      product_id: "29",
      name: "Vintage Wooden Jewelry Box",
      price: 45.00,
      quantity: 20,
      description: "Store your treasures in style with our Vintage Wooden Jewelry Box. Featuring ornate metal accents and a timeless design, this handcrafted box is both functional and decorative. A perfect gift for anyone who loves rustic charm and quality craftsmanship.",
      image_url: "/products/woodcraft-box.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[1].category_id, // Refers to "woodcraft & carving"
    },
    {
      product_id: "30",
      name: "Hand-Carved Wooden Elephants",
      price: 30.00,
      quantity: 40,
      description: "Bring the spirit of the jungle into your home with our Hand-Carved Wooden Elephants. Crafted with care from quality wood, these intricate figurines are perfect as decor pieces or gifts for wildlife enthusiasts. A symbol of strength and wisdom, they’re a charming addition to any space.",
      image_url: "/products/woodcraft-elephants.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[1].category_id, // Refers to "woodcraft & carving"
    },
    {
      product_id: "31",
      name: "Engraved Wooden Spoons Set",
      price: 20.00,
      quantity: 50,
      description: "Upgrade your kitchen with our Engraved Wooden Spoons Set. Featuring unique patterns and crafted from durable wood, these spoons are perfect for cooking, serving, or displaying as rustic decor. A thoughtful gift for home cooks and kitchen enthusiasts!",
      image_url: "/products/woodcraft-spoon.webp",
      created_at: "2025-02-01",
      seller_id: sellers[0].seller_id,
      category_id: categories[1].category_id, // Refers to "woodcraft & carving"
    }
  ]
  
  const reviews = [
    {
      review_id: "8bdaee39-7c5b-4b5c-a6b0-0c2c7741e123",
      title: "Amazing Comfort!",
      created_at: "2025-01-15",
      rating: 5,
      review: "This UltraSoft Pillow is fantastic! It provides excellent support and is incredibly soft. I've never slept better!",
      product_id: "123e4567-e89b-12d3-a456-426614174000",
      user_id: "a2f50c11-1f14-43d8-8f70-42b54a4b7f28"
    },
    {
      review_id: "df12b456-7890-4c3d-b9e3-123456789abc",
      title: "Very Comfortable",
      created_at: "2025-01-20",
      rating: 4,
      review: "I really like this UltraSoft Pillow. It's very comfortable and helps me sleep better. Would highly recommend!",
      product_id: "123e4567-e89b-12d3-a456-426614174000",
      user_id: "a2f50c11-1f14-43d8-8f70-42b54a4b7f28"
    },
    {
      review_id: "e67a9d32-4c1b-47d9-8f6c-987654321efg",
      title: "Best Pillow Ever!",
      created_at: "2025-01-25",
      rating: 5,
      review: "This pillow is the best I've ever used. It's super soft and provides great support. My neck pain has reduced significantly!",
      product_id: "123e4567-e89b-12d3-a456-426614174000",
      user_id: "a2f50c11-1f14-43d8-8f70-42b54a4b7f28"
    },
    {
      review_id: "4c3f2b45-1a2b-4c7d-8e4a-12345678abcd",
      title: "Good but not perfect",
      created_at: "2025-01-30",
      rating: 3,
      review: "The pillow is soft and comfortable, but I expected a bit more firmness. It’s good, but not perfect for my preference.",
      product_id: "123e4567-e89b-12d3-a456-426614174000",
      user_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a"
    },
  ]
    
    
  export { sellers, products, users, reviews, categories};