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


const categories = products.map(m => m.category);

function filterProdukOlehUser(kategoriYangDipilih) {
    const hasilFilter = products.filter(f => f.category === kategoriYangDipilih)
  
  console.log(hasilFilter);
}

filterProdukOlehUser("beauty");
