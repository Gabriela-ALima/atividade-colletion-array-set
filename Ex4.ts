import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

for(const numero of numeros){
    console.log(numero);
}

let valor = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");
let encontrado = false;

for(const numero of numeros){
    if(valor === numero){
        console.log(`O numero ${valor} foi encontrado`);
        encontrado = true;
        break;
    }
}

if(!encontrado){
    console.log(`O numero ${valor} nao foi encontrado`);
}