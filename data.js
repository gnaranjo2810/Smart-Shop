const mockProducts = 
[
  {
    "id": "p_1",
    "name": "Aura Pro Wireless Headphones",
    "description": "Experience premium active noise cancellation with the Aura Pro. Designed for audiophiles who demand the highest quality sound and comfort.",
    "price": 299.99,
    "category": "Electronics",
    "quality": "Premium",
    "shippingTimeDays": 1,
    "quantity": 120,
    "color": "Black",
    "brand": "AuraSound",
    "rating": 4.8,
    "reviewsCount": 1245,
    "discountPercentage": 15,
    "salesCount": 8500,
    "features": [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Bluetooth 5.3",
      "Spatial Audio"
    ],
    "pros": [
      "Exceptional sound quality",
      "Very comfortable for long periods",
      "Great battery"
    ],
    "cons": [
      "Slightly bulky case",
      "Pricey"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
  },
  {
    "id": "p_2",
    "name": "Minimalist Smartwatch Series 5",
    "description": "Sleek and powerful smartwatch that tracks your health metrics while looking great on your wrist.",
    "price": 199.5,
    "category": "Electronics",
    "quality": "Standard",
    "shippingTimeDays": 2,
    "quantity": 45,
    "color": "Silver",
    "brand": "WearTech",
    "rating": 4.3,
    "reviewsCount": 856,
    "discountPercentage": 10,
    "salesCount": 3200,
    "features": [
      "Heart rate monitor",
      "Sleep tracking",
      "OLED display",
      "Water-resistant"
    ],
    "pros": [
      "Lightweight design",
      "Accurate heart monitoring",
      "Bright screen"
    ],
    "cons": [
      "Battery lasts only 1 day",
      "Proprietary charger"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
  },
  {
    "id": "p_3",
    "name": "CloudComfort Ergonomic Chair",
    "description": "Say goodbye to back pain with the ultimate ergonomic office chair designed for 8+ hours of sitting.",
    "price": 450,
    "category": "Home",
    "quality": "Premium",
    "shippingTimeDays": 5,
    "quantity": 15,
    "color": "Grey",
    "brand": "WorkWell",
    "rating": 4.9,
    "reviewsCount": 2310,
    "discountPercentage": 35,
    "salesCount": 12500,
    "features": [
      "Lumbar support",
      "Adjustable armrests",
      "Breathable mesh back",
      "Tilt lock"
    ],
    "pros": [
      "Incredible back support",
      "Easy to assemble",
      "Durable materials"
    ],
    "cons": [
      "Heavy to move",
      "Takes up a lot of space"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&h=600&fit=crop"
  },
  {
    "id": "p_4",
    "name": "Basic Ceramic Coffee Mug pack (Set of 4)",
    "description": "A simple, timeless set of ceramic mugs for your daily coffee or tea.",
    "price": 24.99,
    "category": "Home",
    "quality": "Basic",
    "shippingTimeDays": 3,
    "quantity": 300,
    "color": "White",
    "brand": "HomeBasics",
    "rating": 4.1,
    "reviewsCount": 412,
    "discountPercentage": 0,
    "salesCount": 5400,
    "features": [
      "Dishwasher safe",
      "Microwave safe",
      "12oz capacity"
    ],
    "pros": [
      "Affordable",
      "Classic design",
      "Sturdy"
    ],
    "cons": [
      "Handles are a bit small",
      "Stains easily over time"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1514432324607-a125026d4714?w=600&h=600&fit=crop"
  },
  {
    "id": "p_5",
    "name": "Luxe Cashmere Winter Coat",
    "description": "Stay warm and turning heads with this luxury cashmere blend winter trench coat.",
    "price": 890,
    "category": "Clothing",
    "quality": "Luxury",
    "shippingTimeDays": 1,
    "quantity": 5,
    "color": "Camel",
    "brand": "Elegance",
    "rating": 4.7,
    "reviewsCount": 128,
    "discountPercentage": 5,
    "salesCount": 450,
    "features": [
      "100% Cashmere blend",
      "Silk interior lining",
      "Hand-stitched details",
      "Belted waist"
    ],
    "pros": [
      "Extremely warm",
      "Soft to the touch",
      "Timeless style"
    ],
    "cons": [
      "Dry clean only",
      "Very expensive"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1539533262946-ef62df8904c6?w=600&h=600&fit=crop"
  },
  {
    "id": "p_6",
    "name": "Everyday Running Sneakers",
    "description": "Lightweight and breathable running shoes designed for daily training and casual wear.",
    "price": 85,
    "category": "Clothing",
    "quality": "Standard",
    "shippingTimeDays": 2,
    "quantity": 200,
    "color": "Blue",
    "brand": "PaceMaker",
    "rating": 4.5,
    "reviewsCount": 3400,
    "discountPercentage": 40,
    "salesCount": 14500,
    "features": [
      "Breathable upper",
      "Cushioned midsole",
      "Reflective details",
      "Rubber outsole"
    ],
    "pros": [
      "Great value for money",
      "Versatile",
      "True to size"
    ],
    "cons": [
      "Not durable enough for rough terrain",
      "Laces are too long"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27fc?w=600&h=600&fit=crop"
  },
  {
    "id": "p_7",
    "name": "UltraGlow Vitamin C Serum",
    "description": "Revitalize your skin with our potent 20% Vitamin C serum. Noticeably brighter skin in 2 weeks.",
    "price": 45.99,
    "category": "Beauty",
    "quality": "Premium",
    "shippingTimeDays": 1,
    "quantity": 85,
    "color": "Clear",
    "brand": "SkinScience",
    "rating": 4.2,
    "reviewsCount": 650,
    "discountPercentage": 20,
    "salesCount": 2100,
    "features": [
      "20% Vitamin C",
      "Hyaluronic Acid",
      "Fragrance-free",
      "Cruelty-free"
    ],
    "pros": [
      "Fades dark spots",
      "Non-greasy finish",
      "Absorbs quickly"
    ],
    "cons": [
      "Can cause slight irritation for sensitive skin",
      "Dropper leaks sometimes"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop"
  },
  {
    "id": "p_8",
    "name": "ProChef Carbon Steel Wok",
    "description": "Achieve restaurant-quality stir-frys at home with this hand-hammered carbon steel wok.",
    "price": 65,
    "category": "Home",
    "quality": "Premium",
    "shippingTimeDays": 3,
    "quantity": 40,
    "color": "Black",
    "brand": "ProChef",
    "rating": 4.6,
    "reviewsCount": 920,
    "discountPercentage": 0,
    "salesCount": 4300,
    "features": [
      "14-inch diameter",
      "Hand-hammered flat bottom",
      "Wooden handle",
      "Heat resistant"
    ],
    "pros": [
      "Heats up evenly and quickly",
      "Lightweight",
      "Develops great seasoning"
    ],
    "cons": [
      "Requires maintenance (seasoning)",
      "Not dishwasher safe"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&h=600&fit=crop"
  },
  {
    "id": "p_9",
    "name": "Budget Bluetooth Earbuds",
    "description": "Compact wireless earbuds that deliver basic audio capabilities for those on a strict budget.",
    "price": 19.99,
    "category": "Electronics",
    "quality": "Basic",
    "shippingTimeDays": 5,
    "quantity": 500,
    "color": "White",
    "brand": "AudioBasics",
    "rating": 3.5,
    "reviewsCount": 2100,
    "discountPercentage": 10,
    "salesCount": 11000,
    "features": [
      "Bluetooth 5.0",
      "In-line mic",
      "3-hour battery"
    ],
    "pros": [
      "Super cheap",
      "Small charging case",
      "Fine for podcasts"
    ],
    "cons": [
      "Poor bass response",
      "Plasticky feel",
      "Mic quality is bad"
    ],
    "sentiment": "Negative",
    "image": "https://images.unsplash.com/photo-1590658268822-6c53fae09cb5?w=600&h=600&fit=crop"
  },
  {
    "id": "p_10",
    "name": "Golden Hour Eyeshadow Palette",
    "description": "12 warm, sunset-inspired shades ranging from shimmery golds to deep matte terracottas.",
    "price": 32,
    "category": "Beauty",
    "quality": "Standard",
    "shippingTimeDays": 2,
    "quantity": 110,
    "color": "Multi",
    "brand": "ColorPop",
    "rating": 4.8,
    "reviewsCount": 1845,
    "discountPercentage": 15,
    "salesCount": 9600,
    "features": [
      "12 highly pigmented shades",
      "Mirror included",
      "Cruelty-free"
    ],
    "pros": [
      "Blends seamlessly",
      "Beautiful packaging",
      "Great fall colors"
    ],
    "cons": [
      "Some fallout from the glitter shades",
      "No brush included"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1596704017254-9bd1214cceee?w=600&h=600&fit=crop"
  },
  {
    "id": "p_11",
    "name": "Quantum OLED 4K TV (65-inch)",
    "description": "Breathtaking contrast and vibrant colors make this TV the centerpiece of any living room.",
    "price": 1499,
    "category": "Electronics",
    "quality": "Luxury",
    "shippingTimeDays": 4,
    "quantity": 15,
    "color": "Black",
    "brand": "VisionPlus",
    "rating": 4.9,
    "reviewsCount": 340,
    "discountPercentage": 20,
    "salesCount": 1500,
    "features": [
      "4K Ultra HD",
      "OLED Panel",
      "120Hz Refresh Rate",
      "Smart TV OS"
    ],
    "pros": [
      "Perfect black levels",
      "Zero motion blur",
      "Incredibly thin"
    ],
    "cons": [
      "Expensive",
      "Fear of screen burn-in"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1593305841991-05c297cb4eeb?w=600&h=600&fit=crop"
  },
  {
    "id": "p_12",
    "name": "Eco-Friendly Yoga Mat",
    "description": "Sustainable, non-slip yoga mat made from natural rubber and recycled materials.",
    "price": 55,
    "category": "Home",
    "quality": "Standard",
    "shippingTimeDays": 2,
    "quantity": 90,
    "color": "Green",
    "brand": "EarthFit",
    "rating": 4.4,
    "reviewsCount": 520,
    "discountPercentage": 0,
    "salesCount": 3800,
    "features": [
      "5mm thickness",
      "Biodegradable",
      "Carrying strap included"
    ],
    "pros": [
      "Excellent grip",
      "No toxic smells",
      "Perfect amount of cushion"
    ],
    "cons": [
      "Heavy to carry around",
      "Shows dust easily"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1600881333168-3e4b3e642512?w=600&h=600&fit=crop"
  },
  {
    "id": "p_13",
    "name": "TurboClean Car Vacuum",
    "description": "High-power portable vacuum cleaner designed specifically for your vehicle's interior. Reaches tight spaces with ease.",
    "price": 35.99,
    "category": "Automotive",
    "quality": "Standard",
    "shippingTimeDays": 2,
    "quantity": 150,
    "color": "Black/Red",
    "brand": "AutoCare",
    "rating": 4.4,
    "reviewsCount": 3042,
    "discountPercentage": 15,
    "salesCount": 8200,
    "features": [
      "Strong suction (8000Pa)",
      "16ft power cord",
      "Washable HEPA filter",
      "Multiple attachments"
    ],
    "pros": [
      "Very powerful for its size",
      "Long cord easily reaches the trunk",
      "Comes with a carry bag"
    ],
    "cons": [
      "Can get noisy",
      "Requires 12V cigarette lighter port, not battery powered"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1558317374-b52ad9ba3efc?w=600&h=600&fit=crop"
  },
  {
    "id": "p_14",
    "name": "The Quantum Enigma - Hardcover",
    "description": "A gripping sci-fi thriller exploring parallel universes and the nature of consciousness. A New York Times bestseller.",
    "price": 24.5,
    "category": "Books",
    "quality": "Premium",
    "shippingTimeDays": 3,
    "quantity": 800,
    "color": "Multi",
    "brand": "NovaPress",
    "rating": 4.7,
    "reviewsCount": 1560,
    "discountPercentage": 0,
    "salesCount": 12000,
    "features": [
      "450 pages",
      "Acid-free paper",
      "Embossed foil cover",
      "Includes author interview"
    ],
    "pros": [
      "Mind-bending plot",
      "Beautiful cover art",
      "Excellent pacing"
    ],
    "cons": [
      "Ending might be confusing for some",
      "Heavy to hold"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop"
  },
  {
    "id": "p_15",
    "name": "Space Explorer Building Blocks set (850 pieces)",
    "description": "Spark creativity with this extensive space station and rocket building kit. Perfect for ages 8 and up.",
    "price": 59.99,
    "category": "Toys",
    "quality": "Standard",
    "shippingTimeDays": 4,
    "quantity": 320,
    "color": "White/Orange",
    "brand": "BuildCraft",
    "rating": 4.8,
    "reviewsCount": 4200,
    "discountPercentage": 10,
    "salesCount": 18500,
    "features": [
      "850 interlocking pieces",
      "3 astronaut figures",
      "Detailed instruction manual",
      "Compatible with major brands"
    ],
    "pros": [
      "Hours of clear fun",
      "Great instructions",
      "Sturdy when built"
    ],
    "cons": [
      "A few pieces are very small and easily lost",
      "Some steps are a bit repetitive"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1611078449454-ab2a92fac1b2?w=600&h=600&fit=crop"
  },
  {
    "id": "p_16",
    "name": "ProMax 20V Cordless Drill Base Kit",
    "description": "Heavy-duty cordless drill with a brushless motor, perfect for DIY projects and minor home repairs.",
    "price": 119,
    "category": "Hardware",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 210,
    "color": "Yellow/Black",
    "brand": "ProMax Tools",
    "rating": 4.6,
    "reviewsCount": 2890,
    "discountPercentage": 20,
    "salesCount": 9400,
    "features": [
      "Brushless motor for longer life",
      "20-position clutch",
      "Built-in LED work light",
      "Includes 2 batteries and charger"
    ],
    "pros": [
      "Excellent battery life",
      "Plenty of torque",
      "Comfortable grip"
    ],
    "cons": [
      "A bit heavy for long overhead work",
      "Case is flimsy"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=600&fit=crop"
  },
  {
    "id": "p_17",
    "name": "Artisan Single-Origin Espresso Beans (1lb)",
    "description": "Freshly roasted single-origin Arabica beans with tasting notes of dark chocolate and cherry.",
    "price": 22,
    "category": "Groceries",
    "quality": "Premium",
    "shippingTimeDays": 1,
    "quantity": 400,
    "color": "Brown",
    "brand": "WakeUp Roasters",
    "rating": 4.9,
    "reviewsCount": 1120,
    "discountPercentage": 0,
    "salesCount": 6300,
    "features": [
      "100% Arabica",
      "Fair Trade Certified",
      "Roasted in small batches",
      "Whole bean"
    ],
    "pros": [
      "Incredibly fresh",
      "Rich crema",
      "No bitter aftertaste"
    ],
    "cons": [
      "Pricier than grocery store brands",
      "Only available in whole bean"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&h=600&fit=crop"
  },
  {
    "id": "p_18",
    "name": "Smart Auto Pet Feeder with Camera",
    "description": "Never miss a mealtime. Schedule portions and check in on your furry friend with HD live video.",
    "price": 89.99,
    "category": "Pet Supplies",
    "quality": "Premium",
    "shippingTimeDays": 3,
    "quantity": 180,
    "color": "White",
    "brand": "PetConnect",
    "rating": 4.2,
    "reviewsCount": 854,
    "discountPercentage": 25,
    "salesCount": 3100,
    "features": [
      "1080p HD Camera with night vision",
      "Portion control up to 10 meals",
      "Two-way audio",
      "Anti-clog mechanism"
    ],
    "pros": [
      "App is easy to use",
      "Camera quality is surprisingly good",
      "Peace of mind when away"
    ],
    "cons": [
      "Only supports 2.4GHz WiFi",
      "Relies heavily on internet connection"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop"
  },
  {
    "id": "p_19",
    "name": "Adjustable Dumbbell Set (Pair, up to 52.5 lbs each)",
    "description": "Replaces 15 sets of weights. Adjust your training instantly with a simple dial mechanism.",
    "price": 349,
    "category": "Sports",
    "quality": "Luxury",
    "shippingTimeDays": 5,
    "quantity": 60,
    "color": "Black/Red",
    "brand": "IronFlex",
    "rating": 4.8,
    "reviewsCount": 5200,
    "discountPercentage": 5,
    "salesCount": 22000,
    "features": [
      "Dial weight selection",
      "5 to 52.5 lbs per dumbbell",
      "Durable molding around metal plates",
      "Space-saving design"
    ],
    "pros": [
      "Massive space saver",
      "Very quick to change weights",
      "Feels solid and balanced"
    ],
    "cons": [
      "Expensive upfront cost",
      "Bulky for some lighter exercises"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop"
  },
  {
    "id": "p_20",
    "name": "Smart Sprinkler Controller (8-Zone)",
    "description": "Save water and automate your lawn care based on real-time weather data.",
    "price": 145,
    "category": "Garden",
    "quality": "Standard",
    "shippingTimeDays": 3,
    "quantity": 110,
    "color": "White",
    "brand": "AquaSmart",
    "rating": 4.5,
    "reviewsCount": 1600,
    "discountPercentage": 10,
    "salesCount": 7800,
    "features": [
      "Weather intelligence",
      "Controls up to 8 zones",
      "Smartphone app control",
      "Integrates with Alexa/Google Assistant"
    ],
    "pros": [
      "Noticeable savings on water bill",
      "Simple installation",
      "Great app interface"
    ],
    "cons": [
      "Power adapter cord is short",
      "Setup process hiccuped initially"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1416879598056-0c2a5dc20d0f?w=600&h=600&fit=crop"
  },
  {
    "id": "p_21",
    "name": "Pro Typist Mechanical Keyboard",
    "description": "Tactile mechanical keyboard designed for productivity masters and coders, featuring custom switches.",
    "price": 129.5,
    "category": "Office",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 250,
    "color": "Grey/Blue",
    "brand": "Keystroke",
    "rating": 4.7,
    "reviewsCount": 3800,
    "discountPercentage": 0,
    "salesCount": 16500,
    "features": [
      "Hot-swappable tactile switches",
      "PBT Double-shot keycaps",
      "White backlighting",
      "Ergonomic layout (TKL)"
    ],
    "pros": [
      "Amazing typing feel",
      "Extremely durable build",
      "No software required for macros"
    ],
    "cons": [
      "Loud (might annoy coworkers)",
      "No wireless option"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=600&fit=crop"
  },
  {
    "id": "p_22",
    "name": "Deep Tissue Massage Gun",
    "description": "Accelerate your recovery and relieve muscle tension with 5 varying speeds of percussive therapy.",
    "price": 65.99,
    "category": "Health",
    "quality": "Basic",
    "shippingTimeDays": 4,
    "quantity": 420,
    "color": "Black",
    "brand": "RelieveTech",
    "rating": 3.9,
    "reviewsCount": 1840,
    "discountPercentage": 30,
    "salesCount": 12000,
    "features": [
      "5 speed levels up to 3200 RPM",
      "6 interchangeable massage heads",
      "4-hour battery life",
      "Quiet glide technology"
    ],
    "pros": [
      "Strong percussion",
      "Plenty of attachments",
      "Affordable"
    ],
    "cons": [
      "Heavy design causes arm fatigue",
      "Battery degrades after a year"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
  },
  {
    "id": "p_23",
    "name": "Luxury Silk Sleep Mask",
    "description": "100% Mulberry silk sleep mask. Blocks out all light for the perfect night of rest.",
    "price": 25,
    "category": "Beauty",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 1000,
    "color": "Midnight Blue",
    "brand": "SilkDreams",
    "rating": 4.8,
    "reviewsCount": 4200,
    "discountPercentage": 5,
    "salesCount": 15400,
    "features": [
      "100% Mulberry Silk",
      "Adjustable strap",
      "Hypoallergenic",
      "Includes silk storage pouch"
    ],
    "pros": [
      "Extremely soft",
      "Does not absorb skin care products",
      "Total blackout"
    ],
    "cons": [
      "Hand wash only",
      "Strap can occasionally get tangled in long hair"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1540331541315-b1ab1f1fa68c?w=600&h=600&fit=crop"
  },
  {
    "id": "p_24",
    "name": "4K Drone with Gimbal Camera",
    "description": "Capture stunning aerial footage with our easy-to-fly quadcopter drone. Features auto-follow and return-to-home.",
    "price": 499.99,
    "category": "Electronics",
    "quality": "Premium",
    "shippingTimeDays": 4,
    "quantity": 85,
    "color": "White",
    "brand": "SkyRider",
    "rating": 4.5,
    "reviewsCount": 1150,
    "discountPercentage": 10,
    "salesCount": 3800,
    "features": [
      "4K Video at 30fps",
      "3-axis gimbal",
      "30 mins flight time",
      "GPS Return to Home"
    ],
    "pros": [
      "Very stable flight",
      "Excellent camera quality",
      "Great value for features"
    ],
    "cons": [
      "App can be buggy on old phones",
      "Spare batteries are expensive"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1473968512647-3e447244daee?w=600&h=600&fit=crop"
  },
  {
    "id": "p_25",
    "name": "Professional Chef Knife (8 inch)",
    "description": "High-carbon stainless steel chef knife. Forged for durability and razor-sharp precision cuts.",
    "price": 89.95,
    "category": "Home",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 210,
    "color": "Steel/Wood",
    "brand": "CulinaryPro",
    "rating": 4.9,
    "reviewsCount": 3400,
    "discountPercentage": 0,
    "salesCount": 18000,
    "features": [
      "High-carbon VG-10 steel",
      "Pakkawood handle",
      "Full tang construction",
      "60 Rockwell Hardness"
    ],
    "pros": [
      "Retains edge beautifully",
      "Perfect balance",
      "Gorgeous Damascus pattern"
    ],
    "cons": [
      "Requires careful maintenance (no dishwasher)",
      "Blade can chip if misused on bone"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1593618998160-8f6b89943485?w=600&h=600&fit=crop"
  },
  {
    "id": "p_26",
    "name": "Vintage Denim Jacket",
    "description": "A classic, slightly oversized denim jacket. Perfect for layering in any season.",
    "price": 65,
    "category": "Clothing",
    "quality": "Standard",
    "shippingTimeDays": 3,
    "quantity": 400,
    "color": "Light Blue",
    "brand": "UrbanWear",
    "rating": 4.6,
    "reviewsCount": 1890,
    "discountPercentage": 20,
    "salesCount": 9500,
    "features": [
      "100% Cotton denim",
      "Silver-tone button hardware",
      "Two chest pockets",
      "Two side slip pockets"
    ],
    "pros": [
      "Great vintage wash",
      "Durable",
      "Goes with everything"
    ],
    "cons": [
      "Sleeves might be long for some",
      "Stiff out of the box"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop"
  },
  {
    "id": "p_27",
    "name": "Organic Matcha Green Tea Powder (100g)",
    "description": "Ceremonial grade matcha sourced direct from Uji, Japan. Rich in antioxidants with a smooth, umami flavor.",
    "price": 35,
    "category": "Groceries",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 600,
    "color": "Green",
    "brand": "ZenChai",
    "rating": 4.8,
    "reviewsCount": 2100,
    "discountPercentage": 10,
    "salesCount": 14000,
    "features": [
      "Ceremonial Grade",
      "USDA Organic",
      "First Harvest Leaves",
      "Stone milled"
    ],
    "pros": [
      "Vibrant green color",
      "Very smooth tasting, not bitter",
      "Great energy boost without jitters"
    ],
    "cons": [
      "Small tin for the price",
      "Clumps easily if not sifted"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_28",
    "name": "Premium Leather Weekend Duffel Bag",
    "description": "Handcrafted full-grain leather duffel bag. The perfect travel companion that ages beautifully.",
    "price": 245,
    "category": "Accessories",
    "quality": "Luxury",
    "shippingTimeDays": 5,
    "quantity": 45,
    "color": "Cognac",
    "brand": "Hide & Stitch",
    "rating": 4.9,
    "reviewsCount": 450,
    "discountPercentage": 0,
    "salesCount": 2100,
    "features": [
      "Full-grain leather",
      "Solid brass hardware",
      "Water resistant lining",
      "Padded laptop sleeve"
    ],
    "pros": [
      "Stunning craftsmanship",
      "Smells amazing",
      "Fits easily in overhead compartments"
    ],
    "cons": [
      "Quite heavy even when empty",
      "Very expensive"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_29",
    "name": "Smart Thermostat",
    "description": "Cut down on energy bills with this AI-powered smart thermostat. Learns your schedule and adjusts automatically.",
    "price": 199,
    "category": "Home",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 150,
    "color": "Black",
    "brand": "EcoHome",
    "rating": 4.7,
    "reviewsCount": 8900,
    "discountPercentage": 15,
    "salesCount": 45000,
    "features": [
      "Energy star certified",
      "Works with Alexa & Google",
      "HVAC monitoring",
      "Remote control via app"
    ],
    "pros": [
      "Saves money on heating/cooling",
      "Sleek glass display",
      "Easy to install for most homes"
    ],
    "cons": [
      "Requires a C-wire for power",
      "Sometimes overrides manual set temperatures"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop"
  },
  {
    "id": "p_30",
    "name": "Complete Camping Tent (4-Person)",
    "description": "Easy setup dome tent perfect for weekend getaways. Weatherproof and spacious.",
    "price": 110,
    "category": "Sports",
    "quality": "Standard",
    "shippingTimeDays": 4,
    "quantity": 120,
    "color": "Green/Grey",
    "brand": "TrailBlaze",
    "rating": 4.3,
    "reviewsCount": 1600,
    "discountPercentage": 20,
    "salesCount": 6700,
    "features": [
      "Setup in 5 minutes",
      "Rainfly included",
      "Fiberglass poles",
      "Welded floors to prevent leaks"
    ],
    "pros": [
      "Roomy for 3 people (snug for 4)",
      "Keeps rain out well",
      "Budget friendly"
    ],
    "cons": [
      "Not meant for extreme winter weather",
      "Zippers feel a little cheap"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_31",
    "name": "Ceramic Succulent Pots (Set of 3)",
    "description": "Minimalist white ceramic planter pots with bamboo drip trays. Perfect for tiny indoor plants.",
    "price": 18.99,
    "category": "Garden",
    "quality": "Basic",
    "shippingTimeDays": 2,
    "quantity": 800,
    "color": "White/Wood",
    "brand": "GreenSpace",
    "rating": 4.8,
    "reviewsCount": 2200,
    "discountPercentage": 10,
    "salesCount": 14500,
    "features": [
      "Drainage hole",
      "Bamboo trays included",
      "3.15 inch diameter",
      "Matte finish"
    ],
    "pros": [
      "Very cute and modern",
      "Great for propagating",
      "Drainage hole is decent size"
    ],
    "cons": [
      "Very small (check dimensions)",
      "Plants not included"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_32",
    "name": "Bluetooth Karaoke Microphone",
    "description": "Be the star of the party with this wireless karaoke mic. Features built-in speakers and voice changing effects.",
    "price": 29.99,
    "category": "Toys",
    "quality": "Standard",
    "shippingTimeDays": 3,
    "quantity": 450,
    "color": "Rose Gold",
    "brand": "PartyStar",
    "rating": 4.4,
    "reviewsCount": 5600,
    "discountPercentage": 0,
    "salesCount": 32000,
    "features": [
      "Bluetooth 5.0",
      "Built-in 5W speaker",
      "Echo reverberation effect",
      "Voice changer (4 modes)"
    ],
    "pros": [
      "Incredibly fun for kids and adults",
      "Surprisingly loud",
      "Long battery life"
    ],
    "cons": [
      "Distorts at max volume",
      "Buttons are a bit confusing"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_33",
    "name": "Organic Cotton Baby Onesies (Pack of 5)",
    "description": "Ultra-soft, breathable organic cotton bodysuits meant to keep your baby comfortable all day.",
    "price": 34.5,
    "category": "Clothing",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 340,
    "color": "Assorted Pastels",
    "brand": "TinyHugs",
    "rating": 4.9,
    "reviewsCount": 1250,
    "discountPercentage": 5,
    "salesCount": 8400,
    "features": [
      "100% GOTS Certified Organic Cotton",
      "Nickel-free snaps",
      "Expandable shoulder neckline",
      "Tagless"
    ],
    "pros": [
      "Extremely soft on sensitive skin",
      "Washes well without shrinking",
      "Cute muted colors"
    ],
    "cons": [
      "A bit pricey for basics",
      "Runs slightly small"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop"
  },
  {
    "id": "p_34",
    "name": "Professional Studio Monitor Headphones",
    "description": "Flat response over-ear headphones meant for audio mixing, mastering, and critical listening.",
    "price": 149,
    "category": "Electronics",
    "quality": "Premium",
    "shippingTimeDays": 2,
    "quantity": 90,
    "color": "Black",
    "brand": "AudioTech",
    "rating": 4.7,
    "reviewsCount": 4100,
    "discountPercentage": 10,
    "salesCount": 22000,
    "features": [
      "45mm large-aperture drivers",
      "Circumaural design",
      "90-degree swiveling earcups",
      "Detachable cables"
    ],
    "pros": [
      "Incredibly accurate sound",
      "Very durable",
      "Great noise isolation"
    ],
    "cons": [
      "Can get warm after a few hours",
      "Clamping force is a bit tight initially"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
  },
  {
    "id": "p_35",
    "name": "Vanguard Premium Sports Item 35",
    "description": "Experience the best in sports with this highly rated product from Vanguard. Designed for maximum utility and style.",
    "price": 499.14,
    "category": "Sports",
    "quality": "Standard",
    "shippingTimeDays": 6,
    "quantity": 508,
    "color": "Blue",
    "brand": "Vanguard",
    "rating": 3.6,
    "reviewsCount": 3159,
    "discountPercentage": 32,
    "salesCount": 3147,
    "features": [
      "Top tier sports efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_36",
    "name": "Summit Premium Home Item 36",
    "description": "Experience the best in home with this highly rated product from Summit. Designed for maximum utility and style.",
    "price": 245.43,
    "category": "Home",
    "quality": "Luxury",
    "shippingTimeDays": 4,
    "quantity": 391,
    "color": "Green",
    "brand": "Summit",
    "rating": 3.9,
    "reviewsCount": 1308,
    "discountPercentage": 0,
    "salesCount": 19528,
    "features": [
      "Top tier home efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop"
  },
  {
    "id": "p_37",
    "name": "Aurora Premium Automotive Item 37",
    "description": "Experience the best in automotive with this highly rated product from Aurora. Designed for maximum utility and style.",
    "price": 407.69,
    "category": "Automotive",
    "quality": "Basic",
    "shippingTimeDays": 4,
    "quantity": 476,
    "color": "Black",
    "brand": "Aurora",
    "rating": 3.6,
    "reviewsCount": 1276,
    "discountPercentage": 0,
    "salesCount": 17336,
    "features": [
      "Top tier automotive efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_38",
    "name": "Zenith Premium Beauty Item 38",
    "description": "Experience the best in beauty with this highly rated product from Zenith. Designed for maximum utility and style.",
    "price": 131.02,
    "category": "Beauty",
    "quality": "Standard",
    "shippingTimeDays": 4,
    "quantity": 381,
    "color": "Black",
    "brand": "Zenith",
    "rating": 4.7,
    "reviewsCount": 1859,
    "discountPercentage": 0,
    "salesCount": 2711,
    "features": [
      "Top tier beauty efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1596462502278-27bf8503254c?w=600&h=600&fit=crop"
  },
  {
    "id": "p_39",
    "name": "Aurora Premium Office Item 39",
    "description": "Experience the best in office with this highly rated product from Aurora. Designed for maximum utility and style.",
    "price": 358.75,
    "category": "Office",
    "quality": "Basic",
    "shippingTimeDays": 7,
    "quantity": 67,
    "color": "Silver",
    "brand": "Aurora",
    "rating": 4.5,
    "reviewsCount": 1925,
    "discountPercentage": 0,
    "salesCount": 2381,
    "features": [
      "Top tier office efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_40",
    "name": "Lumina Premium Garden Item 40",
    "description": "Experience the best in garden with this highly rated product from Lumina. Designed for maximum utility and style.",
    "price": 66.06,
    "category": "Garden",
    "quality": "Premium",
    "shippingTimeDays": 7,
    "quantity": 481,
    "color": "Silver",
    "brand": "Lumina",
    "rating": 4.7,
    "reviewsCount": 1799,
    "discountPercentage": 0,
    "salesCount": 13855,
    "features": [
      "Top tier garden efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1416879598056-0c2a5dc20d0f?w=600&h=600&fit=crop"
  },
  {
    "id": "p_41",
    "name": "Aurora Premium Groceries Item 41",
    "description": "Experience the best in groceries with this highly rated product from Aurora. Designed for maximum utility and style.",
    "price": 31.11,
    "category": "Groceries",
    "quality": "Premium",
    "shippingTimeDays": 6,
    "quantity": 427,
    "color": "White",
    "brand": "Aurora",
    "rating": 4.7,
    "reviewsCount": 3234,
    "discountPercentage": 28,
    "salesCount": 590,
    "features": [
      "Top tier groceries efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_42",
    "name": "Vanguard Premium Groceries Item 42",
    "description": "Experience the best in groceries with this highly rated product from Vanguard. Designed for maximum utility and style.",
    "price": 89.09,
    "category": "Groceries",
    "quality": "Premium",
    "shippingTimeDays": 3,
    "quantity": 11,
    "color": "Green",
    "brand": "Vanguard",
    "rating": 4.5,
    "reviewsCount": 2450,
    "discountPercentage": 0,
    "salesCount": 2929,
    "features": [
      "Top tier groceries efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_43",
    "name": "Zenith Premium Clothing Item 43",
    "description": "Experience the best in clothing with this highly rated product from Zenith. Designed for maximum utility and style.",
    "price": 167.45,
    "category": "Clothing",
    "quality": "Luxury",
    "shippingTimeDays": 1,
    "quantity": 359,
    "color": "Black",
    "brand": "Zenith",
    "rating": 4.8,
    "reviewsCount": 3037,
    "discountPercentage": 32,
    "salesCount": 12627,
    "features": [
      "Top tier clothing efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop"
  },
  {
    "id": "p_44",
    "name": "Pulse Premium Accessories Item 44",
    "description": "Experience the best in accessories with this highly rated product from Pulse. Designed for maximum utility and style.",
    "price": 165.05,
    "category": "Accessories",
    "quality": "Luxury",
    "shippingTimeDays": 6,
    "quantity": 119,
    "color": "Black",
    "brand": "Pulse",
    "rating": 3.7,
    "reviewsCount": 5026,
    "discountPercentage": 8,
    "salesCount": 249,
    "features": [
      "Top tier accessories efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Mixed",
    "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&h=600&fit=crop"
  },
  {
    "id": "p_45",
    "name": "Nova Premium Electronics Item 45",
    "description": "Experience the best in electronics with this highly rated product from Nova. Designed for maximum utility and style.",
    "price": 360.79,
    "category": "Electronics",
    "quality": "Luxury",
    "shippingTimeDays": 6,
    "quantity": 219,
    "color": "Silver",
    "brand": "Nova",
    "rating": 4.7,
    "reviewsCount": 650,
    "discountPercentage": 16,
    "salesCount": 19657,
    "features": [
      "Top tier electronics efficiency",
      "Durable materials",
      "1 Year Warranty",
      "Eco-friendly packaging"
    ],
    "pros": [
      "Great value",
      "Reliable performance",
      "Excellent customer service"
    ],
    "cons": [
      "May be out of stock soon",
      "Packaging is bulky"
    ],
    "sentiment": "Positive",
    "image": "https://images.unsplash.com/photo-1546868871298-90209ae8be00?w=600&h=600&fit=crop"
  }
];

// Attach to window globally
window.mockProducts = mockProducts;
