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


//latihan 6.1
const angka = [10, 20, 30, 40, 50];
function linearSearch(angka, target){
    for(let i = 0; i < angka.length; i++){
        if (angka[i] === target){
            return i;
        }
    }
     return -1;
}
// console.log(linearSearch(angka, 30)); 


//latihan 6.2
function searchProductById(product, id){
    for(let i = 0; i < product.length; i++){
        if (product[i].id === id){
            return product[i];
        }
    }
    return undefined;
}

console.log(searchProductById(products, 2));


