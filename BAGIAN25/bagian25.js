let products = [];

// FETCH DATA
async function fetchProducts() {

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        products = data.products;

        showStatistics(products);
        showCategoryAnalytics(products);

    } catch (error) {

        console.error("Gagal mengambil data:", error);
    }
}



// 25.1 STATISTICS
function showStatistics(products) {

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


    document.querySelector("#statistics").innerHTML = `
        <p>Total Products: ${totalProducts}</p>
        <p>Average Price: $${averagePrice.toFixed(2)}</p>
        <p>Highest Price: $${highestPrice}</p>
        <p>Lowest Price: $${lowestPrice}</p>
        <p>Total Stock: ${totalStock}</p>
        <p>Average Rating: ${averageRating.toFixed(2)}</p>
    `;
}



// 25.2 CATEGORY ANALYTICS
function showCategoryAnalytics(products) {

    const categories = {};

    for (const product of products) {

        const category = product.category;

        if (!categories[category]) {
            categories[category] = {
                count: 0,
                totalPrice: 0,
                totalRating: 0,
                totalStock: 0
            };
        }

        categories[category].count++;

        categories[category].totalPrice += product.price;

        categories[category].totalRating += product.rating;

        categories[category].totalStock += product.stock;
    }


    const container = document.querySelector("#categories");

    container.innerHTML = "";


    for (const category in categories) {

        const data = categories[category];

        const averagePrice =
            data.totalPrice / data.count;

        const averageRating =
            data.totalRating / data.count;


        container.innerHTML += `
            <div>
                <h3>${category}</h3>

                <p>Jumlah Produk: ${data.count}</p>

                <p>Rata-rata Harga: 
                    $${averagePrice.toFixed(2)}
                </p>

                <p>Rata-rata Rating: 
                    ${averageRating.toFixed(2)}
                </p>

                <p>Total Stok: 
                    ${data.totalStock}
                </p>

                <hr>
            </div>
        `;
    }
}



// 25.3 PRODUCT SEARCH
function exactSearch(products, keyword) {

    return products.filter(
        product => product.title === keyword
    );
}


function partialSearch(products, keyword) {

    const lower = keyword.toLowerCase();

    return products.filter(
        product =>
            product.title.toLowerCase().includes(lower)
    );
}


function caseInsensitiveSearch(products, keyword) {

    const lower = keyword.toLowerCase();

    return products.filter(
        product =>
            product.title.toLowerCase() === lower
    );
}



// SEARCH INPUT
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (event) => {

    const keyword = event.target.value;

    const results = partialSearch(products, keyword);

    const container = document.querySelector("#search-result");

    container.innerHTML = "";


    for (const product of results) {

        container.innerHTML += `
            <p>
                ${product.title} - $${product.price}
            </p>
        `;
    }
});


// Jalankan program
fetchProducts();