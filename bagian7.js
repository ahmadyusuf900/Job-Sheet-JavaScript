//Latihan 7.1
const angka = [10, 20, 30, 40, 50];

function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;
while (left <= right) {
const mid = Math.floor((left + right) / 2);
if (arr[mid] === target) return mid;
if (arr[mid] < target) left = mid + 1;
else right = mid - 1;
}
return -1;
}
// console.log(binarySearch(angka, 70));


//Latihan 7.2
const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Smartphone", price: 800 },
    { id: 3, title: "Headphones", price: 100 },
    { id: 4, title: "Tablet", price: 500 },
    { id: 5, title: "Monitor", price: 300 }
];

const sortedProduct = [...products].sort((a,b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) {
            return sortedProducts[mid];
        }

        if (sortedProducts[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
// console.log(sortedProduct);
// console.log(binarySearch(sortedProduct, 800));


