const products = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        category: "beauty",
        rating: 2.56,
        brand: "Essence",
        tags: ["beauty", "mascara"]
    },
    {
        id: 2,
        title: "Eyeshadow Palette",
        category: "beauty",
        rating: 2.86,
        brand: "Glamour Beauty",
        tags: ["beauty", "eyeshadow"]
    },
    {
        id: 3,
        title: "Powder Canister",
        category: "beauty",
        rating: 4.31,
        brand: "Velour Beauty",
        tags: ["beauty", "powder"]
    },
    {
        id: 4,
        title: "Red Lipstick",
        category: "beauty",
        rating: 4.36,
        brand: "Chic Cosmetics",
        tags: ["beauty", "lipstick"]
    },
    {
        id: 5,
        title: "Red Nail Polish",
        category: "beauty",
        rating: 4.44,
        brand: "Nail Couture",
        tags: ["beauty", "nail polish"]
    }
];

// Membuat Map dari id → product
function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }
    return productMap;
}
const productLookup = buildProductLookup(products);
console.log(productLookup.get(3));