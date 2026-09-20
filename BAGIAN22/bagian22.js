const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data berhasil diambil");
    } else {
        reject("Terjadi error");
    }

});

promise
    .then(result => {
        console.log(result);

        document.querySelector("#result").innerHTML = `
            <p>${result}</p>
        `;
    })
    .catch(error => {
        console.error(error);

        document.querySelector("#result").innerHTML = `
            <p>${error}</p>
        `;
    })
    .finally(() => {
        console.log("Selesai, apa pun hasilnya");
    });