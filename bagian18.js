const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        rating: 4.3
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.2
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets",
        rating: 4.4
    },
    {
        id: 5,
        title: "Monitor",
        price: 300,
        category: "monitors",
        rating: 4.1
    }
];


// STATE
const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "success"
};


// RENDER
function render() {

    let result = state.products;


    // FILTER SEARCH
    if (state.search !== "") {
        result = result.filter(product =>
            product.title.toLowerCase().includes(
                state.search.toLowerCase()
            )
        );
    }


    // FILTER CATEGORY
    if (state.category !== "all") {
        result = result.filter(product =>
            product.category === state.category
        );
    }


    // SORT
    if (state.sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    }

    if (state.sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    }


    // RENDER KE DOM
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of result) {

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

// JALANKAN RENDER
render();