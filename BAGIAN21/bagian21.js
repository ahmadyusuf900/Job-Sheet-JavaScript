console.log("bagian21.js berhasil dijalankan");

import { fetchProducts } from "./api.js";
import { renderProducts, renderError } from "./ui.js";
import { state } from "./state.js";

async function init() {
    state.status = "loading";

    try {
        const products = await fetchProducts();

        state.products = products;
        state.status = "success";

        renderProducts(state.products);

    } catch (error) {
        state.status = "error";

        renderError(error.message);
    }
}

init();