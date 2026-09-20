function getProducts() {

    return new Promise((resolve, reject) => {

        const success = true;

        setTimeout(() => {

            if (success) {

                resolve([
                    {
                        id: 1,
                        title: "Laptop",
                        price: 800
                    },
                    {
                        id: 2,
                        title: "Mouse",
                        price: 20
                    },
                    {
                        id: 3,
                        title: "Keyboard",
                        price: 50
                    }
                ]);

            } else {

                reject("Gagal mengambil data produk");

            }

        }, 2000);

    });
}


async function loadProducts() {

    const result = document.querySelector("#result");

    result.innerHTML = "Sedang mengambil data...";

    try {

        const products = await getProducts();

        result.innerHTML = "";

        for (const product of products) {

            result.innerHTML += `
                <p>
                    ${product.title} - $${product.price}
                </p>
            `;
        }

    } catch (error) {

        result.innerHTML = `
            <p>${error}</p>
        `;

    } finally {

        console.log("Proses selesai");
    }
}


loadProducts();