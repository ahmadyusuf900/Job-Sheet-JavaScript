//Latihan 8.1
const numbers = [5, 3, 8, 1, 2, 4];

function bubbleSort(numbers) {
    // Buat salinan agar array asli tidak berubah
    const arr = [...numbers]; 

    // Perulangan untuk setiap putaran
    for (let i = 0; i < arr.length - 1; i++) {

        // Membandingkan elemen yang bersebelahan
        for (let j = 0; j < arr.length - 1 - i; j++) {

            // Jika elemen kiri lebih besar, tukar
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}
// console.log("Array asli:", numbers);
// console.log("Hasil sorting:", bubbleSort(numbers));


//Latihan 8.2
const products = [
    { id: 1, title: "Laptop", price: 1200, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, rating: 4.8 },
    { id: 4, title: "Tablet", price: 500, rating: 4.0 },
    { id: 5, title: "Monitor", price: 300, rating: 4.6 }
];

function sortProducts(products, sortBy) {
    const result = [...products];

    if (sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    } 
    else if (sortBy === "title") {
        result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
}
console.log(sortProducts(products, "rating"));
console.log(sortProducts(products, "title"));

