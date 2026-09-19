//Latihan 2.1
const products = [
{ id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
{ id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
{ id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
{ id: 4, title: "Tablet", price: 500, category: "tablets", stock: 8 },
{ id: 5, title: "Monitor", price: 300, category: "monitors", stock: 12 },
{ id: 6, title: "Keyboard", price: 75, category: "accessories", stock: 20 },
{ id: 7, title: "Mouse", price: 40, category: "accessories", stock: 6 },
{ id: 8, title: "Printer", price: 200, category: "printers", stock: 4 },
{ id: 9, title: "Webcam", price: 80, category: "accessories", stock: 15 },
{ id: 10, title: "Microphone", price: 120, category: "audio", stock: 7 },
{ id: 11, title: "Speaker", price: 90, category: "audio", stock: 18 },
{ id: 12, title: "Smartwatch", price: 250, category: "wearables", stock: 9 },
{ id: 13, title: "Camera", price: 700, category: "cameras", stock: 5 },
{ id: 14, title: "Tripod", price: 60, category: "accessories", stock: 14 },
{ id: 15, title: "Router", price: 100, category: "networking", stock: 11 },
{ id: 16, title: "SSD", price: 150, category: "storage", stock: 3 },
{ id: 17, title: "Hard Drive", price: 100, category: "storage", stock: 16 },
{ id: 18, title: "Flash Drive", price: 25, category: "storage", stock: 25 },
{ id: 19, title: "Projector", price: 600, category: "projectors", stock: 6 },
{ id: 20, title: "Gamepad", price: 70, category: "gaming", stock: 13 },
{ id: 21, title: "Gaming Chair", price: 350, category: "gaming", stock: 4 },
{ id: 22, title: "Graphics Card", price: 900, category: "components", stock: 2 },
{ id: 23, title: "RAM", price: 100, category: "components", stock: 19 },
{ id: 24, title: "CPU", price: 400, category: "components", stock: 8 },
{ id: 25, title: "Motherboard", price: 250, category: "components", stock: 10 },
{ id: 26, title: "Power Supply", price: 130, category: "components", stock: 7 },
{ id: 27, title: "USB Hub", price: 35, category: "accessories", stock: 22 },
{ id: 28, title: "Laptop Stand", price: 45, category: "accessories", stock: 5 },
{ id: 29, title: "Mechanical Keyboard", price: 110, category: "accessories", stock: 17 },
{ id: 30, title: "Earbuds", price: 60, category: "audio", stock: 9 }
];

function findProductById(products, id){
    return products.find(item => item.id === id);
}
// console.log(findProductById(products, 10));

//Latihan 2.2
const cariStock = products.filter(item => item.stock < 10);
// console.log(cariStock);

// Latihan 2.3
function updateStock(products, id, newStock){
    const ubahStok = products.map(item => {
        if (item.id === id){
            return {...item, stock: newStock};
        }
        else{
            return item;
        }
    });
    return ubahStok;
}
console.log(updateStock(products, 10, 200));



