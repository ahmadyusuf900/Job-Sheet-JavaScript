const products = [
{
id: 1,
title: "Laptop",
price: 1200,
rating: 4.5,
stock: 10,
category: "laptops",
tags: ["computer", "electronics", "office"],
dimensions: { width: 30, height: 2, depth: 20 },
reviews: [
{ user: "A", rating: 5, comment: "Good product" },
{ user: "B", rating: 4, comment: "Worth it" }
]
},
{
id: 2,
title: "Smartphone",
price: 800,
rating: 4.2,
stock: 15,
category: "phones",
tags: ["mobile", "electronics"],
dimensions: { width: 7, height: 0.8, depth: 15 },
reviews: [
{ user: "C", rating: 4, comment: "Nice camera" },
{ user: "D", rating: 5, comment: "Fast" },
{ user: "E", rating: 3, comment: "Battery so-so" }
]
}
];


//Latihan 5.1
const laptopPrices = products
.filter(f => f.title === "Laptop")
.map(m => m.price);

const avg = laptopPrices.reduce((a,b) => a + b, 0) / laptopPrices.length;
// console.log(avg);


//Latihan 5.2
function getStatistic(products){
   
    //perhitungan average price
   const prices = products
    .map(m => m.price);

    const avgPrice = prices.reduce((a,b) => a + b, 0) / prices.length;

    //perhitungan highest price
    const highest = products.reduce ((a,b) => {
        if(a.price > b.price){
            return a;
        }
        else{
            return b;
        }
    });

    //perhitungan lowest price
    const lowest = products.reduce((a,b) => {
        if (a.price < b.price){
            return a;
        }
        else{
            return b;
        }
    });

    //perhitungan total stok
    const totalStock = products
    .map(m => m.stock)
    .reduce((a,b) => a + b, 0);

    //perhitungan average rating
    const ratakan = products
    .flatMap(f => f.reviews.map(m => m.rating));

    const avgRating = ratakan
    .reduce((a,b) => a + b, 0) / ratakan.length;

    return {
        totalProducts: products.length,
        averagePrice: avgPrice,
        highestPrice: highest.price,
        lowestPrice: lowest.price,
        totalStock: totalStock,
        averageRating: avgRating,
    };
}

console.log(getStatistic(products));


