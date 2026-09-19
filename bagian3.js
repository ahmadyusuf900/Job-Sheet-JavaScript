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


//NOMOR 1
const allTags = products.map(ambilTag => ambilTag.tags);
// console.log(allTags);


//NOMOR 2 DAN 3
function findProductByTag(products, tag){
    return products.filter(p => p.tags.includes(tag))
}
// console.log(findProductByTag(products, "office"));


//NOMOR 4
const rating5 = products
    .flatMap(p => p.reviews)
    .filter(r => r.rating === 5);
// console.log(rating5);


//NOMOR 5
const hasil = products.map(p => {
    const totalRating = p.reviews.reduce(
        (total,penjumlahan) => total + penjumlahan.rating, 0
    );

    return {
        id: p.id,
        title: p.title,
        averageRating: totalRating / p.reviews.length
    };
});
// console.log(hasil);


//NOMOR 6
const most = products.reduce((terbanyak, p) => {
    if (p.reviews.length > terbanyak.reviews.length){
        return p;
    }
    else{
        return terbanyak;
    }
});
// console.log(most);


//NOMOR 7
const kumpul = products.flatMap(p => p.reviews.map(k => k.rating));
// console.log(kumpul);






