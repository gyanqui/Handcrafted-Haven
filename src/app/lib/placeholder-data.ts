const categories = [
    {
        category_id: 1,
        category_name: "pottery & ceramics",
    },
    {
        category_id: 2,
        category_name: "woodcraft & carving",
    },
    {
        category_id: 3,
        category_name: "textile & fiber arts",
    },
    {
        category_id: 4,
        category_name: "glass creations",
    },
    {
        category_id: 5,
        category_name: "metal art & jewelry",
    },
    {
        category_id: 6,
        category_name: "leather goods",
    },
    {
        category_id: 7,
        category_name: "paper & stationery",
    },
    {
        category_id: 8,
        category_name: "candles & scents",
    },
    {
        category_id: 9,
        category_name: "bath & body",
    },
    {
        category_id: 10,
        category_name: "mosaic & mixed media"
    },
    {
        category_id: 11,
        category_name: "other"
    }
]

const products = [
    {
        product_id: 1,
        name: "Luxury Bath Soap Set",
        price: "25.00",
        quantity: 50,
        description: "Pamper yourself or your loved ones with this luxurious bath soap set! Featuring three handcrafted soaps infused with natural ingredients and an orange scrub for gentle exfoliation, this set offers a spa-like experience right at home. The beautiful floral packaging makes it a perfect gift for any occasion. Indulge in a refreshing cleanse that nourishes your skin while delighting your senses!",
        image: "/products/bath-bath-set.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[8].category_id, // Refers to "bath & body"
    },
    {
        product_id: 2,
        name: "Aromatic Bath Bomb Set",
        price: "15.00",
        quantity: 100,
        description: "Transform your bath into a fragrant oasis with our Aromatic Bath Bomb Set! With delightful scents like lavender, strawberry, lemon, and more, these colorful bath bombs fizz and release essential oils that relax your body and rejuvenate your mind. Perfect for self-care routines or as a thoughtful gift, this set guarantees a luxurious soak every time. Treat yourself to the ultimate relaxation experience!",
        image: "/products/bath-bathball.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[8].category_id, // Refers to "bath & body"
    },
    {
        product_id: 3,
        name: "Herbal Lightening Cream",
        price: "18.00",
        quantity: 30,
        description: "Achieve radiant, glowing skin with our Herbal Lightening Cream! Made with a blend of natural herbal ingredients, this cream moisturizes, nourishes, and brightens your skin without any harsh chemicals. Perfect for daily use, it's ideal for anyone seeking a more even complexion and a healthy glow. Add this must-have to your skincare routine and see the difference!",
        image: "/products/bath-lightening-cream.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[8].category_id, // Refers to "bath & body"
    },
    {
        product_id: 4,
        name: "Fragrant Stone Diffuser",
        price: "30.00",
        quantity: 40,
        description: "Enhance your room's ambiance with our Fragrant Stone Diffuser. Designed with a natural aesthetic, it features handcrafted owls, flower petals, and Himalayan salt stones to create a cozy, refreshing atmosphere. Just add your favorite essential oil for a long-lasting aroma that soothes your senses. Perfect for home decor or as a thoughtful gift!",
        image: "/products/candles-fragrant-stone.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[7].category_id, // Refers to "candles & scents"
    },
    {
        product_id: 5,
        name: "Handcrafted Jelly Candles",
        price: "20.00",
        quantity: 60,
        description: "Light up your space with these stunning handcrafted jelly candles. Embedded with dried flowers, cinnamon sticks, and other natural elements, these candles bring warmth and charm to any occasion. With their translucent glow, they’re perfect for home decor, romantic evenings, or gifting. Experience elegance in every flicker!",
        image: "/products/candles-jelly-candle.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[7].category_id, // Refers to "candles & scents"
    },
    {
        product_id: 6,
        name: "Gold Number Birthday Candles",
        price: "5.00",
        quantity: 120,
        description: "Make your celebrations memorable with our Gold Number Birthday Candles. With their sleek metallic finish and modern design, these candles add a touch of sophistication to any cake. Ideal for birthdays, anniversaries, or milestone events, they’re sure to make your special moments shine!",
        image: "/products/candles-number-candle.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[7].category_id, // Refers to "candles & scents"
    },
    {
        product_id: 7,
        name: "Handcrafted Glass Candle Holders",
        price: "35.00",
        quantity: 50,
        description: "Elevate your decor with our Handcrafted Glass Candle Holders. Designed with embedded dried flowers, these stunning pieces add a touch of elegance and warmth to any space. Perfect for weddings, dinner tables, or as thoughtful gifts, these candle holders combine artistry and functionality in one beautiful package.",
        image: "/products/glass-candle-holder.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
        product_id: 8,
        name: "Miniature Glass Garden Terrarium",
        price: "40.00",
        quantity: 30,
        description: "Bring a piece of nature into your home with our Miniature Glass Garden Terrarium. Featuring adorable hand-painted figurines and lush greenery, this self-contained ecosystem is a delightful way to add charm and tranquility to any room. Perfect as a unique gift or centerpiece, this terrarium is a miniature world waiting to brighten your day.",
        image: "/products/glass-garden.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
        product_id: 9,
        name: "Mosaic Solar-Powered Lanterns",
        price: "50.00",
        quantity: 25,
        description: "Light up your nights with our stunning Mosaic Solar-Powered Lanterns. Featuring intricate glass designs that cast mesmerizing patterns, these eco-friendly lanterns charge during the day and glow beautifully at night. Perfect for outdoor gatherings, garden decor, or adding a pop of color to your home, these lanterns blend functionality with artistic flair.",
        image: "/products/glass-light.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
        product_id: 10,
        name: "Elegant Lace Leather Belt",
        price: "20.00",
        quantity: 80,
        description: "Add a touch of sophistication to your outfit with our Elegant Lace Leather Belt. Designed with intricate lace patterns and made from high-quality leather, this belt is perfect for enhancing dresses, coats, and more. Its adjustable tie ensures a perfect fit for any waist size. A must-have accessory for fashion enthusiasts!",
        image: "/products/leather-belt.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[5].category_id, // Refers to "leather goods"
    },
    {
        product_id: 11,
        name: "Leather Horse Keychain",
        price: "12.00",
        quantity: 150,
        description: "Carry charm and functionality with our Leather Horse Keychain. Featuring an adorable hand-stitched horse design and an initial letter for personalization, this keychain is both stylish and practical. Perfect as a thoughtful gift or a fun accessory for your keys and bags!",
        image: "/products/leather-keyring.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[5].category_id, // Refers to "leather goods"
    },
    {
        product_id: 12,
        name: "Classic Leather Wallet",
        price: "40.00",
        quantity: 60,
        description: "Keep your essentials organized in style with our Classic Leather Wallet. Crafted from premium genuine leather, this wallet features multiple compartments for cash, cards, and coins. Its timeless design and durable build make it a perfect choice for everyday use or as a thoughtful gift for someone special.",
        image: "/products/leather-wallet.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[5].category_id, // Refers to "leather goods"
    },
    {
        product_id: 13,
        name: "Vintage Metal Motorcycle Models",
        price: "60.00",
        quantity: 20,
        description: "Add a touch of retro charm to your home or office with our Vintage Metal Motorcycle Models. These handcrafted models are intricately designed with fine details, making them the perfect gift for motorcycle enthusiasts or collectors. Ideal as a centerpiece or unique decor, these models bring an adventurous spirit to any space.",
        image: "/products/metal-motorcycles.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[4].category_id, // Refers to "metal art & jewelry"
    },
    {
        product_id: 14,
        name: "Handcrafted Rose Quartz Pendant",
        price: "25.00",
        quantity: 50,
        description: "Elegantly crafted, our Rose Quartz Pendant is a timeless piece that exudes natural beauty. Encased in an intricate metal wire wrap, this necklace symbolizes love and tranquility, making it a meaningful gift or a perfect accessory for any outfit. Add a touch of elegance and spirituality to your jewelry collection today.",
        image: "/products/metal-necklace.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[4].category_id, // Refers to "metal art & jewelry"
    },
    {
        product_id: 15,
        name: "Antique-Style Engraved Ring",
        price: "30.00",
        quantity: 40,
        description: "Celebrate timeless elegance with our Antique-Style Engraved Ring. Featuring detailed engravings and a classic design, this ring is a beautiful symbol of love and commitment. Perfect for weddings, anniversaries, or as a statement piece, this ring blends tradition with sophistication for any occasion.",
        image: "/products/metal-ring.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[4].category_id, // Refers to "metal art & jewelry"
    },
    {
        product_id: 16,
        name: "Miniature Bistro Dollhouse",
        price: "70.00",
        quantity: 15,
        description: "Bring your creative dreams to life with our Miniature Bistro Dollhouse! This detailed DIY kit comes with all the materials you need to craft a charming restaurant scene, complete with furniture, decor, and a cozy ambiance. Perfect as a relaxing project or a delightful gift, this dollhouse is a true treasure for hobbyists and collectors.",
        image: "/products/mixed-house.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[10].category_id, // Refers to "mosaic & mixed media"
    },
    {
        product_id: 17,
        name: "Wood & Resin Ocean Lamp",
        price: "120.00",
        quantity: 10,
        description: "Immerse yourself in the beauty of the ocean with our Wood & Resin Ocean Lamp. Featuring breathtaking underwater details captured in resin, this lamp is a perfect blend of artistry and functionality. Its soft glow creates a relaxing atmosphere, making it a unique decor piece for your living space or a thoughtful gift for art lovers.",
        image: "/products/mixed-lamp.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[10].category_id, // Refers to "mosaic & mixed media"
    },
    {
        product_id: 18,
        name: "Mandala Mosaic Coaster Set",
        price: "25.00",
        quantity: 50,
        description: "Add a splash of color to your table with our Mandala Mosaic Coaster Set. These beautifully designed coasters are handcrafted with vibrant glass beads, making them both functional and decorative. Perfect for protecting surfaces while elevating your home decor, they also make a fantastic gift for any occasion!",
        image: "/products/mosaic-pad.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
        product_id: 19,
        name: "Colorful Mosaic Vase Collection",
        price: "35.00",
        quantity: 30,
        description: "Brighten up your space with our Colorful Mosaic Vase Collection! Each vase features intricate mosaic patterns in vibrant colors, perfect for showcasing flowers or as stand-alone decor. These artistic vases are a beautiful blend of craftsmanship and functionality, making them an excellent choice for home decor or as a unique gift.",
        image: "/products/mosaic-vase.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[3].category_id, // Refers to "glass creations"
    },
    {
        product_id: 20,
        name: "Colorful Kids' Animal Artwork",
        price: "45.00",
        quantity: 20,
        description: "Celebrate creativity with our Colorful Kids' Animal Artwork! This vibrant, hand-painted piece features a charming ensemble of wild animals, making it perfect for brightening up kids' rooms or as a unique gift for art lovers. Let the vivid colors and playful design bring joy to your space!",
        image: "/products/other-kids-drawing.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[11].category_id, // Refers to "other"
    },
    {
        product_id: 21,
        name: "Fantasy Feather Metal Bookmarks",
        price: "12.00",
        quantity: 100,
        description: "Add a touch of elegance to your reading experience with our Fantasy Feather Metal Bookmarks. Crafted with intricate feather designs and golden accents, these bookmarks are perfect for book lovers who appreciate beauty and functionality. A wonderful gift for avid readers and collectors!",
        image: "/products/paper-bookmark.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[7].category_id, // Refers to "paper & stationery"
    },
    {
        product_id: 22,
        name: "Pop-Up Heart Love Card",
        price: "8.00",
        quantity: 150,
        description: "Express your love in a creative way with our Pop-Up Heart Love Card. This intricately designed card features a 3D heart that pops up with the message 'I Love You,' making it perfect for Valentine's Day, anniversaries, or any special occasion. Show your loved ones how much you care with this thoughtful gesture!",
        image: "/products/paper-card.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[7].category_id, // Refers to "paper & stationery"
    },
    {
        product_id: 23,
        name: "DIY Gingerbread House Kit",
        price: "25.00",
        quantity: 50,
        description: "Unleash your creativity this holiday season with our DIY Gingerbread House Kit! Complete with all the materials you need to build and decorate your own festive house, this kit is perfect for family bonding or as a thoughtful gift. Bring the joy of the season to life with this delightful activity!",
        image: "/products/paper-house.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[7].category_id, // Refers to "paper & stationery"
    },
    {
        product_id: 24,
        name: "Kintsugi Ceramic Bowl",
        price: "50.00",
        quantity: 25,
        description: "Celebrate imperfection with our Kintsugi Ceramic Bowl, a symbol of resilience and beauty. Featuring hand-applied gold accents on cracks, this bowl embraces the Japanese art of repairing with elegance. Perfect as a decorative piece or a thoughtful gift for those who value artistry and history.",
        image: "/products/pottery-cup.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[0].category_id, // Refers to "pottery & ceramics"
    },
    {
        product_id: 25,
        name: "Handmade Boy Doll with Outfits",
        price: "35.00",
        quantity: 40,
        description: "Bring joy to kids and collectors alike with our Handmade Boy Doll. This adorable doll comes with two interchangeable outfits, crafted with love and attention to detail. Perfect as a cuddly companion or a decorative piece, it’s a charming addition to any doll collection.",
        image: "/products/textile-boy-doll.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    {
        product_id: 26,
        name: "Quilted Dog Vest",
        price: "25.00",
        quantity: 60,
        description: "Keep your furry friend stylish and warm with our Quilted Dog Vest. Featuring adorable bear patterns and soft, breathable fabric, this vest ensures comfort and cuteness for your pet. Ideal for walks, chilly weather, or as a unique gift for pet lovers!",
        image: "/products/textile-dog-vest.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    {
        product_id: 27,
        name: "Embroidered Leaf Brooch",
        price: "10.00",
        quantity: 100,
        description: "Add a touch of nature to your style with our Embroidered Leaf Brooch. Made with intricate stitching and vibrant green hues, this brooch is perfect for accessorizing jackets, bags, or scarves. A wonderful gift for nature lovers and embroidery enthusiasts.",
        image: "/products/textile-leaf.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    {
        product_id: 28,
        name: "Crocheted Star Scarf",
        price: "40.00",
        quantity: 30,
        description: "Stay cozy and stylish with our Crocheted Star Scarf. Handcrafted with colorful yarn and adorned with playful star tassels, this scarf is a unique blend of warmth and whimsy. Perfect for chilly days or as a delightful gift for crochet lovers.",
        image: "/products/textile-scarf.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[2].category_id, // Refers to "textile & fiber arts"
    },
    {
        product_id: 29,
        name: "Vintage Wooden Jewelry Box",
        price: "45.00",
        quantity: 20,
        description: "Store your treasures in style with our Vintage Wooden Jewelry Box. Featuring ornate metal accents and a timeless design, this handcrafted box is both functional and decorative. A perfect gift for anyone who loves rustic charm and quality craftsmanship.",
        image: "/products/woodcraft-box.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[1].category_id, // Refers to "woodcraft & carving"
    },
    {
        product_id: 30,
        name: "Hand-Carved Wooden Elephants",
        price: "30.00",
        quantity: 40,
        description: "Bring the spirit of the jungle into your home with our Hand-Carved Wooden Elephants. Crafted with care from quality wood, these intricate figurines are perfect as decor pieces or gifts for wildlife enthusiasts. A symbol of strength and wisdom, they’re a charming addition to any space.",
        image: "/products/woodcraft-elephants.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[1].category_id, // Refers to "woodcraft & carving"
    },
    {
        product_id: 31,
        name: "Engraved Wooden Spoons Set",
        price: "20.00",
        quantity: 50,
        description: "Upgrade your kitchen with our Engraved Wooden Spoons Set. Featuring unique patterns and crafted from durable wood, these spoons are perfect for cooking, serving, or displaying as rustic decor. A thoughtful gift for home cooks and kitchen enthusiasts!",
        image: "/products/woodcraft-spoon.webp",
        created_at: "2025-02-01",
        seller_id: "12345",
        category_id: categories[1].category_id, // Refers to "woodcraft & carving"
    }
];

export { categories, products}