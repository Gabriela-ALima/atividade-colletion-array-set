import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

console.log("Digite 10 numeros inteiros (nao repetidos):");

for(let i=0; i<10; i++) {
    const numero = readlinesync.questionInt(`Digite o ${i + 1} numero: `);

    if (numeros.has(numero)) {
        console.log("Numero repetido! Digite outro valor.");
    } else {
        numeros.add(numero);
    }
}

console.log("\nListar dados do Set:");
for (const numero of numeros) {
    console.log(numero);
}

const numerosOrdenados = new Set([...numeros].sort((a, b) => a - b));

console.log("\nListar dados do Set (ordenado):");
for (const numero of numerosOrdenados) {
    console.log(numero);
}

