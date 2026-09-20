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
    sortBy: "default"
};



// RENDER
function render() {

    // Salin data agar state.products tidak berubah
    let result = [...state.products];


    // SEARCH
    if (state.search !== "") {

        result = result.filter(product =>
            product.title
                .toLowerCase()
                .includes(state.search.toLowerCase())
        );

    }


    // CATEGORY
    if (state.category !== "all") {

        result = result.filter(product =>
            product.category === state.category
        );

    }


    // SORTING
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
            <hr>
        `;

        container.append(card);
    }
}



// EVENT SEARCH
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (e) => {

    state.search = e.target.value;

    render();

});



// EVENT CATEGORY
const categorySelect = document.querySelector("#category-select");

categorySelect.addEventListener("change", (e) => {

    state.category = e.target.value;

    render();

});



// EVENT SORT
const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", (e) => {

    state.sortBy = e.target.value;

    render();

});


// RENDER PERTAMA
render();