export async function fetchProducts() {

    const response = await fetch(
        "https://dummyjson.com/products?limit=5"
    );

    if (!response.ok) {
        throw new Error("Gagal mengambil data");
    }

    const data = await response.json();

    return data.products;
}