const products = [
    { id: 1, title: "Laptop", category: "electronics", price: 1200 },
    { id: 2, title: "Smartphone", category: "electronics", price: 800 },
    { id: 3, title: "Headphones", category: "electronics", price: 100 },
    { id: 4, title: "T-Shirt", category: "fashion", price: 25 },
    { id: 5, title: "Jeans", category: "fashion", price: 60 },
    { id: 6, title: "Face Wash", category: "beauty", price: 15 },
    { id: 7, title: "Shampoo", category: "beauty", price: 20 },
    { id: 8, title: "Apple", category: "groceries", price: 3 },
    { id: 9, title: "Milk", category: "groceries", price: 5 },
    { id: 10, title: "Bread", category: "groceries", price: 4 }
];

//Latihan 9.1 dan Latihan 9.2
function groupByCategory(produk){
    return produk.reduce((g, p) => {
        const key = p.category;

        if(!g[key]){
           g [key] = [];
        }

        g[key].push(p);

        return g;
    }, {});
}
console.log(groupByCategory(products));


