import readlinesync = require("readline-sync");

const cores: Array<string> = [];

for(let i=0; i<5; i++){
    const cor = readlinesync.question("Digite uma cor: ");
    cores.push(cor);
}

console.log("Listar todas as cores")
for(const cor of cores){
    console.log(cor);
}


console.log("Ordenar as cores")
const coresOrdenadas = cores.sort();
for(const cor of coresOrdenadas){
    console.log(cor);
}


