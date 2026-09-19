//Latihan 10.1
const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];

function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}
// console.log(countFrequency(words));


//Latihan 10.2
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


// Function untuk menghitung frekuensi
function countFrequency(array) {

    return array.reduce((counts, item) => {

        counts[item] = (counts[item] || 0) + 1;

        return counts;

    }, {});

}

// 1. Frekuensi CATEGORY
const categories = products.map(product => product.category);
const categoryFrequency = countFrequency(categories);

// 2. Frekuensi seluruh TAGS
const allTags = products.flatMap(product => product.tags);
const tagFrequency = countFrequency(allTags);

// 3. Frekuensi RATING
// Rating dibulatkan terlebih dahulu
const ratings = products.map(product => Math.round(product.rating));
const ratingFrequency = countFrequency(ratings);


// 4. Frekuensi BRAND
// Hanya mengambil produk yang memiliki brand
const brands = products
    .map(product => product.brand)
    .filter(brand => brand);
const brandFrequency = countFrequency(brands);


console.log("Frekuensi Category:", categoryFrequency);
console.log("Frekuensi Tags:", tagFrequency);
console.log("Frekuensi Rating:", ratingFrequency);
console.log("Frekuensi Brand:", brandFrequency);


