export const CATEGORIES = [
    "Basmati Rice",
    "Keeri Samba Rice",
    "Noodles",
    "Kottu",
    "Chop Suey",
    "Chicken",
    "Fish",
    "Sausages",
    "Soup"
] as const;

export interface MenuItem {
    id: string;
    name: string;
    category: typeof CATEGORIES[number];
    price: number;
    priceNormal?: number; // Added for Normal portion price
    description: string;
    image?: string;
    popular?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
    // --- Basmati Rice ---
    {
        id: "br-1",
        name: "Vegetable Rice (Basmati)",
        category: "Basmati Rice",
        price: 750,
        priceNormal: 650,
        description: "Fragrant seasoned basmati rice with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1626804475515-e2bd96f53fd5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "br-2",
        name: "Egg Rice (Basmati)",
        category: "Basmati Rice",
        price: 850,
        priceNormal: 750,
        description: "Basmati rice stir-fried with scrambled eggs and veggies.",
        image: "https://images.unsplash.com/photo-1603133872878-684f10d6a1f1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "br-3",
        name: "Chicken Rice (Basmati)",
        category: "Basmati Rice",
        price: 1000,
        priceNormal: 800,
        description: "Classic basmati fried rice with tender chicken pieces.",
        popular: true,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "br-4",
        name: "Seafood Rice (Basmati)",
        category: "Basmati Rice",
        price: 1200,
        priceNormal: 950,
        description: "Basmati rice loaded with mixed seafood.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "br-5",
        name: "Mixed Rice (Basmati)",
        category: "Basmati Rice",
        price: 1300,
        priceNormal: 1000,
        description: "A hearty mix of meats and seafood with basmati rice.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "br-6",
        name: "Prawn (Isso) Rice (Basmati)",
        category: "Basmati Rice",
        price: 1100,
        priceNormal: 850,
        description: "Basmati rice featuring delicious prawns.",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "br-7",
        name: "Nasi Goreng (Basmati)",
        category: "Basmati Rice",
        price: 1400,
        priceNormal: 1100,
        description: "Indonesian style spicy fried rice with basmati.",
        popular: true,
        image: "https://images.unsplash.com/photo-1603133872878-684f10d6a1f1?auto=format&fit=crop&w=500&q=80"
    },

    // --- Keeri Samba Rice ---
    {
        id: "ksr-1",
        name: "Vegetable Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 500,
        priceNormal: 400,
        description: "Steamed Keeri Samba rice with vegetables.",
        image: "https://images.unsplash.com/photo-1596560548464-f010549b8416?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "ksr-2",
        name: "Egg Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 700,
        priceNormal: 550,
        description: "Keeri Samba rice with egg.",
        image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "ksr-3",
        name: "Chicken Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 800,
        priceNormal: 600,
        description: "Keeri Samba rice served with chicken.",
        image: "https://images.unsplash.com/photo-1626804475297-411d8c6600a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "ksr-4",
        name: "Seafood Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 1000,
        priceNormal: 800,
        description: "Keeri Samba rice with fresh seafood.",
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "ksr-5",
        name: "Nasi Goreng (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 1000,
        priceNormal: 850,
        description: "Spicy Nasi Goreng made with Keeri Samba.",
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=500&q=80"
    },

    // --- Noodles ---
    {
        id: "n-1",
        name: "Vegetable Noodles",
        category: "Noodles",
        price: 750,
        priceNormal: 650,
        description: "Stir-fried noodles with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "n-2",
        name: "Egg Noodles",
        category: "Noodles",
        price: 850,
        priceNormal: 750,
        description: "Delicious noodles stir-fried with egg.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "n-3",
        name: "Chicken Noodles",
        category: "Noodles",
        price: 950,
        priceNormal: 750,
        description: "Favorite chicken noodles with savory seasoning.",
        popular: true,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "n-4",
        name: "Seafood Noodles",
        category: "Noodles",
        price: 1200,
        priceNormal: 950,
        description: "Noodles packed with mixed seafood.",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "n-5",
        name: "Prawn (Isso) Noodles",
        category: "Noodles",
        price: 1100,
        priceNormal: 850,
        description: "Special prawn noodles.",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "n-6",
        name: "Mixed Noodles",
        category: "Noodles",
        price: 1300,
        priceNormal: 1000,
        description: "A complete mix of meats and seafood with noodles.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80"
    },

    // --- Kottu ---
    {
        id: "k-1",
        name: "Vegetable Kottu",
        category: "Kottu",
        price: 600,
        priceNormal: 450,
        description: "Spicy vegetable kottu roti.",
        image: "https://images.unsplash.com/photo-1626804475297-411d8c6600a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "k-2",
        name: "Chicken Kottu",
        category: "Kottu",
        price: 900,
        priceNormal: 700,
        description: "The classic spicy chicken kottu.",
        popular: true,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "k-3",
        name: "Mixed Kottu",
        category: "Kottu",
        price: 1200,
        priceNormal: 900,
        description: "Kottu with a mix of meats.",
        image: "https://images.unsplash.com/photo-1626804475297-411d8c6600a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "k-4",
        name: "Cheese Kottu",
        category: "Kottu",
        price: 1300,
        priceNormal: 1000,
        description: "Creamy and cheesy kottu.",
        popular: true,
        image: "https://images.unsplash.com/photo-1626804475306-44445851416e?auto=format&fit=crop&w=500&q=80"
    },

    // --- Chop Suey ---
    {
        id: "cs-1",
        name: "Vegetable Chop Suey",
        category: "Chop Suey",
        price: 900,
        description: "Rice mixed with vegetable chop suey sauce.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "cs-2",
        name: "Chicken Chop Suey",
        category: "Chop Suey",
        price: 1200,
        description: "Flavorful chicken chop suey.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "cs-3",
        name: "Seafood Chop Suey",
        category: "Chop Suey",
        price: 1300,
        description: "Chop suey with seafood mix.",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "cs-4",
        name: "Mixed Chop Suey",
        category: "Chop Suey",
        price: 1400,
        description: "Mixed meat chop suey.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80"
    },

    // --- Chicken ---
    {
        id: "chk-1",
        name: "Devilled Chicken",
        category: "Chicken",
        price: 1150,
        description: "Spicy devilled chicken portion.",
        image: "https://images.unsplash.com/photo-1626804475297-411d8c6600a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "chk-2",
        name: "Chicken Stew",
        category: "Chicken",
        price: 1200,
        description: "Mild and savory chicken stew.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80"
    },

    // --- Fish ---
    {
        id: "f-1",
        name: "Devilled Fish",
        category: "Fish",
        price: 750, // Approx
        description: "Spicy devilled fish portion.",
        image: "https://images.unsplash.com/photo-1544521096-932f91eb5607?auto=format&fit=crop&w=500&q=80"
    },

    // --- Sausages ---
    {
        id: "ss-1",
        name: "Fried Sausages",
        category: "Sausages",
        price: 750,
        description: "Fried sausage portion.",
        image: "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "ss-2",
        name: "Sausages Curry",
        category: "Sausages",
        price: 800,
        description: "Sausages cooked in curry sauce.",
        image: "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=500&q=80"
    },

    // --- Soup ---
    {
        id: "sup-1",
        name: "Vegetable Soup",
        category: "Soup",
        price: 250,
        description: "Warm vegetable soup",
        image: "https://images.unsplash.com/photo-1547592166-23acbe32e18b?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "sup-2",
        name: "Egg & Chicken Soup",
        category: "Soup",
        price: 400,
        description: "Rich soup with egg and chicken.",
        image: "https://images.unsplash.com/photo-1547592166-23acbe32e18b?auto=format&fit=crop&w=500&q=80"
    }
];
