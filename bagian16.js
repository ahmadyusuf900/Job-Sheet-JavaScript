// BAGIAN 16.1 - ALGORITHM COMPLEXITY
const data = [];

for (let i = 1; i <= 10000; i++) {
    data.push(i);
}


// LINEAR SEARCH
function linearSearch(array, target) {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
        steps++;

        if (array[i] === target) {
            return {
                index: i,
                steps: steps
            };
        }
    }

    return {
        index: -1,
        steps: steps
    };
}


// BINARY SEARCH
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return {
                index: middle,
                steps: steps
            };
        }

        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return {
        index: -1,
        steps: steps
    };
}


// TEST
const target = 9999;

const linearResult = linearSearch(data, target);
const binaryResult = binarySearch(data, target);

console.log("Target:", target);

console.log("Linear Search:");
console.log("Index:", linearResult.index);
console.log("Jumlah langkah:", linearResult.steps);

console.log("Binary Search:");
console.log("Index:", binaryResult.index);
console.log("Jumlah langkah:", binaryResult.steps);



// BAGIAN 16.2 - ALGORITHM COMPLEXITY
// Membuat 1000 produk
const products = [];

const categories = ["laptops", "phones", "audio", "tablets", "monitors"];

for (let i = 1; i <= 1000; i++) {
    products.push({
        id: i,
        title: `Product ${i}`,
        category: categories[i % categories.length]
    });
}


// CARA 1: NESTED LOOP
// O(n²)
function findPairsNestedLoop(products) {
    const pairs = [];

    for (let i = 0; i < products.length; i++) {

        for (let j = i + 1; j < products.length; j++) {

            if (products[i].category === products[j].category) {
                pairs.push([
                    products[i].id,
                    products[j].id
                ]);
            }

        }
    }

    return pairs;
}


// CARA 2: GROUPING DENGAN MAP
// O(n)
function findPairsUsingMap(products) {
    const groups = new Map();

    // Kelompokkan produk berdasarkan kategori
    for (const product of products) {

        if (!groups.has(product.category)) {
            groups.set(product.category, []);
        }

        groups.get(product.category).push(product);
    }

    // Buat pasangan dari setiap kelompok
    const pairs = [];

    for (const group of groups.values()) {

        for (let i = 0; i < group.length; i++) {

            for (let j = i + 1; j < group.length; j++) {

                pairs.push([
                    group[i].id,
                    group[j].id
                ]);

            }
        }
    }

    return pairs;
}


// TEST
console.log("Jumlah produk:", products.length);

const pairsNested = findPairsNestedLoop(products);
console.log("Nested Loop - jumlah pasangan:", pairsNested.length);

const pairsMap = findPairsUsingMap(products);
console.log("Map - jumlah pasangan:", pairsMap.length);

console.log("\nContoh pasangan:");
console.log(pairsNested.slice(0, 5));