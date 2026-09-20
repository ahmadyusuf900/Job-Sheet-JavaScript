let state = {
    products: [],
    search: "",
    category: "all",
    sortBy: "default",
    status: "idle"
};



// FETCH PRODUCTS
async function fetchProducts() {

    state.status = "loading";

    render();

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        state.products = data.products;
        state.status = "success";

        createCategoryOptions();

        render();

    } catch (error) {

        state.status = "error";

        render();
    }
}



// FILTER + SEARCH + SORT
function getFilteredProducts() {

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

        result = result.filter(
            product => product.category === state.category
        );
    }


    // SORT
    if (state.sortBy === "price-asc") {

        result.sort((a, b) => a.price - b.price);

    } else if (state.sortBy === "price-desc") {

        result.sort((a, b) => b.price - a.price);

    } else if (state.sortBy === "rating") {

        result.sort((a, b) => b.rating - a.rating);

    } else if (state.sortBy === "title") {

        result.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }


    return result;
}



// STATISTICS
function renderStatistics(products) {

    const container = document.querySelector("#statistics");

    if (products.length === 0) {

        container.innerHTML = `
            <p>Tidak ada data statistik.</p>
        `;

        return;
    }


    const totalProducts = products.length;


    const averagePrice =
        products.reduce(
            (total, product) => total + product.price,
            0
        ) / totalProducts;


    const totalStock =
        products.reduce(
            (total, product) => total + product.stock,
            0
        );


    const averageRating =
        products.reduce(
            (total, product) => total + product.rating,
            0
        ) / totalProducts;


    container.innerHTML = `
        <p>Total Produk: ${totalProducts}</p>

        <p>
            Rata-rata Harga:
            $${averagePrice.toFixed(2)}
        </p>

        <p>
            Total Stok:
            ${totalStock}
        </p>

        <p>
            Rata-rata Rating:
            ${averageRating.toFixed(2)}
        </p>
    `;
}



// RENDER PRODUCTS
function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    container.innerHTML = "";


    if (products.length === 0) {

        container.innerHTML = `
            <p>Produk tidak ditemukan.</p>
        `;

        return;
    }


    for (const product of products) {

        const card = document.createElement("div");

        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
                width="150"
            >

            <h3>${product.title}</h3>

            <p>Kategori: ${product.category}</p>

            <p>Harga: $${product.price}</p>

            <p>Rating: ${product.rating}</p>

            <p>Stok: ${product.stock}</p>

            <hr>
        `;

        container.append(card);
    }
}



// CATEGORY OPTIONS
function createCategoryOptions() {

    const select =
        document.querySelector("#category-select");


    const categories = [
        ...new Set(
            state.products.map(product => product.category)
        )
    ];


    select.innerHTML = `
        <option value="all">
            Semua Kategori
        </option>
    `;


    for (const category of categories) {

        select.innerHTML += `
            <option value="${category}">
                ${category}
            </option>
        `;
    }
}



// MAIN RENDER
function render() {

    const container =
        document.querySelector("#product-list");


    if (state.status === "loading") {

        container.innerHTML = `
            <p>Sedang memuat produk...</p>
        `;

        return;
    }


    if (state.status === "error") {

        container.innerHTML = `
            <p>Gagal mengambil data produk.</p>
        `;

        return;
    }


    const products = getFilteredProducts();


    renderStatistics(products);

    renderProducts(products);
}



// EVENTS
const searchInput =
    document.querySelector("#search-input");

searchInput.addEventListener("input", event => {

    state.search = event.target.value;

    render();
});


const categorySelect =
    document.querySelector("#category-select");

categorySelect.addEventListener("change", event => {

    state.category = event.target.value;

    render();
});


const sortSelect =
    document.querySelector("#sort-select");

sortSelect.addEventListener("change", event => {

    state.sortBy = event.target.value;

    render();
});



// START APPLICATION
fetchProducts();