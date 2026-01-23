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
        image: "/images/vegetable-rice.png"
    },
    {
        id: "br-2",
        name: "Egg Rice (Basmati)",
        category: "Basmati Rice",
        price: 850,
        priceNormal: 750,
        description: "Basmati rice stir-fried with scrambled eggs and veggies.",
        image: "/images/egg-rice.png"
    },
    {
        id: "br-3",
        name: "Chicken Rice (Basmati)",
        category: "Basmati Rice",
        price: 1000,
        priceNormal: 800,
        description: "Classic basmati fried rice with tender chicken pieces.",
        popular: true,
        image: "/images/chicken-fried-rice.png"
    },
    {
        id: "br-4",
        name: "Seafood Rice (Basmati)",
        category: "Basmati Rice",
        price: 1200,
        priceNormal: 950,
        description: "Basmati rice loaded with mixed seafood.",
        image: "/images/seafood-rice.png"
    },
    {
        id: "br-5",
        name: "Mixed Rice (Basmati)",
        category: "Basmati Rice",
        price: 1300,
        priceNormal: 1000,
        description: "A hearty mix of meats and seafood with basmati rice.",
        image: "/images/chicken-fried-rice.png"
    },
    {
        id: "br-6",
        name: "Prawn (Isso) Rice (Basmati)",
        category: "Basmati Rice",
        price: 1100,
        priceNormal: 850,
        description: "Basmati rice featuring delicious prawns.",
        image: "/images/seafood-rice.png"
    },
    {
        id: "br-7",
        name: "Nasi Goreng (Basmati)",
        category: "Basmati Rice",
        price: 1400,
        priceNormal: 1100,
        description: "Indonesian style spicy fried rice with basmati.",
        popular: true,
        image: "/images/nasi-goreng.png"
    },

    // --- Keeri Samba Rice ---
    {
        id: "ksr-1",
        name: "Vegetable Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 500,
        priceNormal: 400,
        description: "Steamed Keeri Samba rice with vegetables.",
        image: "/images/vegetable-rice.png"
    },
    {
        id: "ksr-2",
        name: "Egg Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 700,
        priceNormal: 550,
        description: "Keeri Samba rice with egg.",
        image: "/images/egg-rice.png"
    },
    {
        id: "ksr-3",
        name: "Chicken Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 800,
        priceNormal: 600,
        description: "Keeri Samba rice served with chicken.",
        image: "/images/chicken-fried-rice.png"
    },
    {
        id: "ksr-4",
        name: "Seafood Rice (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 1000,
        priceNormal: 800,
        description: "Keeri Samba rice with fresh seafood.",
        image: "/images/seafood-rice.png"
    },
    {
        id: "ksr-5",
        name: "Nasi Goreng (Keeri Samba)",
        category: "Keeri Samba Rice",
        price: 1000,
        priceNormal: 850,
        description: "Spicy Nasi Goreng made with Keeri Samba.",
        image: "/images/nasi-goreng.png"
    },

    // --- Noodles ---
    {
        id: "n-1",
        name: "Vegetable Noodles",
        category: "Noodles",
        price: 750,
        priceNormal: 650,
        description: "Stir-fried noodles with fresh vegetables.",
        image: "/images/chicken-noodles.png"
    },
    {
        id: "n-2",
        name: "Egg Noodles",
        category: "Noodles",
        price: 850,
        priceNormal: 750,
        description: "Delicious noodles stir-fried with egg.",
        image: "/images/chicken-noodles.png"
    },
    {
        id: "n-3",
        name: "Chicken Noodles",
        category: "Noodles",
        price: 950,
        priceNormal: 750,
        description: "Favorite chicken noodles with savory seasoning.",
        popular: true,
        image: "/images/chicken-noodles.png"
    },
    {
        id: "n-4",
        name: "Seafood Noodles",
        category: "Noodles",
        price: 1200,
        priceNormal: 950,
        description: "Noodles packed with mixed seafood.",
        image: "/images/chicken-noodles.png"
    },
    {
        id: "n-5",
        name: "Prawn (Isso) Noodles",
        category: "Noodles",
        price: 1100,
        priceNormal: 850,
        description: "Special prawn noodles.",
        image: "/images/chicken-noodles.png"
    },
    {
        id: "n-6",
        name: "Mixed Noodles",
        category: "Noodles",
        price: 1300,
        priceNormal: 1000,
        description: "A complete mix of meats and seafood with noodles.",
        image: "/images/chicken-noodles.png"
    },

    // --- Kottu ---
    {
        id: "k-1",
        name: "Vegetable Kottu",
        category: "Kottu",
        price: 600,
        priceNormal: 450,
        description: "Spicy vegetable kottu roti.",
        image: "/images/chicken-kottu.png"
    },
    {
        id: "k-2",
        name: "Chicken Kottu",
        category: "Kottu",
        price: 900,
        priceNormal: 700,
        description: "The classic spicy chicken kottu.",
        popular: true,
        image: "/images/chicken-kottu.png"
    },
    {
        id: "k-3",
        name: "Mixed Kottu",
        category: "Kottu",
        price: 1200,
        priceNormal: 900,
        description: "Kottu with a mix of meats.",
        image: "/images/chicken-kottu.png"
    },
    {
        id: "k-4",
        name: "Cheese Kottu",
        category: "Kottu",
        price: 1300,
        priceNormal: 1000,
        description: "Creamy and cheesy kottu.",
        popular: true,
        image: "/images/cheese-kottu.png"
    },

    // --- Chop Suey ---
    {
        id: "cs-1",
        name: "Vegetable Chop Suey",
        category: "Chop Suey",
        price: 900,
        description: "Rice mixed with vegetable chop suey sauce.",
        image: "/images/chop-suey.png"
    },
    {
        id: "cs-2",
        name: "Chicken Chop Suey",
        category: "Chop Suey",
        price: 1200,
        description: "Flavorful chicken chop suey.",
        image: "/images/chop-suey.png"
    },
    {
        id: "cs-3",
        name: "Seafood Chop Suey",
        category: "Chop Suey",
        price: 1300,
        description: "Chop suey with seafood mix.",
        image: "/images/chop-suey.png"
    },
    {
        id: "cs-4",
        name: "Mixed Chop Suey",
        category: "Chop Suey",
        price: 1400,
        description: "Mixed meat chop suey.",
        image: "/images/chop-suey.png"
    },

    // --- Chicken ---
    {
        id: "chk-1",
        name: "Devilled Chicken",
        category: "Chicken",
        price: 1150,
        description: "Spicy devilled chicken portion.",
        image: "/images/devilled-chicken.png"
    },
    {
        id: "chk-2",
        name: "Chicken Stew",
        category: "Chicken",
        price: 1200,
        description: "Mild and savory chicken stew.",
        image: "/images/devilled-chicken.png"
    },

    // --- Fish ---
    {
        id: "f-1",
        name: "Devilled Fish",
        category: "Fish",
        price: 750, // Approx
        description: "Spicy devilled fish portion.",
        image: "/images/devilled-chicken.png"
    },

    // --- Sausages ---
    {
        id: "ss-1",
        name: "Fried Sausages",
        category: "Sausages",
        price: 750,
        description: "Fried sausage portion.",
        image: "/images/sausages.png"
    },
    {
        id: "ss-2",
        name: "Sausages Curry",
        category: "Sausages",
        price: 800,
        description: "Sausages cooked in curry sauce.",
        image: "/images/sausages.png"
    },

    // --- Soup ---
    {
        id: "sup-1",
        name: "Vegetable Soup",
        category: "Soup",
        price: 250,
        description: "Warm vegetable soup",
        image: "/images/soup.png"
    },
    {
        id: "sup-2",
        name: "Egg & Chicken Soup",
        category: "Soup",
        price: 400,
        description: "Rich soup with egg and chicken.",
        image: "/images/soup.png"
    }
];
