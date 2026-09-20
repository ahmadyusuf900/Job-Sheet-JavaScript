const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        rating: 4.5,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        rating: 4.3,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.2,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets",
        rating: 4.4,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 5,
        title: "Monitor",
        price: 300,
        category: "monitors",
        rating: 4.1,
        thumbnail: "https://dummyjson.com/image/150x150"
    }
];

function renderProducts(products) {

    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

renderProducts(products);