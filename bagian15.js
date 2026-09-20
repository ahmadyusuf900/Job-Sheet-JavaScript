const categories = [
    {
        name: "Electronics",
        children: [
            { name: "Laptop", children: [] },
            { name: "Phone", children: [] }
        ]
    }
];

function printCategories(kategori, kedalaman = 0) {
    for (const category of kategori) {
        console.log(" ".repeat(kedalaman) + category.name);

        if (category.children.length > 0) {
            printCategories(category.children, kedalaman + 1);
        }
    }
}

printCategories(categories);


