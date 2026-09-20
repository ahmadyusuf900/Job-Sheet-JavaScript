let products = [];

async function fetchProducts() {

    const container = document.querySelector("#product-list");

    container.innerHTML = "Sedang memuat data...";

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        products = data.products;

        renderProducts(products);

    } catch (error) {

        console.error("Gagal mengambil data:", error);

        container.innerHTML = `
            <p>Gagal mengambil data produk.</p>
        `;
    }
}


function renderProducts(products) {

    const container = document.querySelector("#product-list");

    container.innerHTML = "";

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

            <hr>
        `;

        container.append(card);
    }
}


fetchProducts();