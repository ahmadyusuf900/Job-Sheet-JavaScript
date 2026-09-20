const products = [
    {
        id: 1,
        title: "Laptop",
        price: 800,
        rating: 4.8,
        stock: 10,
        dimensions: {
            width: 30
        }
    },
    {
        id: 2,
        title: "Mouse",
        price: 20,
        rating: 4.5,
        stock: 25
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50,
        rating: 4.7,
        stock: 15,
        dimensions: {
            width: 45
        }
    }
];

function getStatistics(products) {

    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (total, product) => total + product.price,
        0
    );

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const totalStock = products.reduce(
        (total, product) => total + product.stock,
        0
    );

    const averageRating =
        products.reduce(
            (total, product) => total + product.rating,
            0
        ) / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}


// Destructuring
const {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
} = getStatistics(products);


// Optional chaining + nullish coalescing
const width = products[1].dimensions?.width ?? "Tidak diketahui";


// Tampilkan ke HTML
const result = document.querySelector("#result");

result.innerHTML = `
    <p>Total Produk: ${totalProducts}</p>
    <p>Rata-rata Harga: ${averagePrice}</p>
    <p>Harga Tertinggi: ${highestPrice}</p>
    <p>Harga Terendah: ${lowestPrice}</p>
    <p>Total Stok: ${totalStock}</p>
    <p>Rata-rata Rating: ${averageRating}</p>
    <p>Lebar Produk: ${width}</p>
`;