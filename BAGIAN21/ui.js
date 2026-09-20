export function renderProducts(products) {

    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {

        const card = document.createElement("div");

        card.innerHTML = `
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


export function renderError(message) {

    const container = document.querySelector("#product-list");

    container.innerHTML = `
        <p>Error: ${message}</p>
    `;
}