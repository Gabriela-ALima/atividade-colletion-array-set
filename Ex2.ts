import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

for(let numero of numeros){
    console.log(numero);
}

let valor = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");
let encontrado = false;

for(let i=0; i<=numeros.length; i++){
    if(valor === numeros[i]){
        console.log(`O numero ${valor} esta localizado na posicao ${i}`);
        encontrado = true;
        break;
    }
}

if(!encontrado){
    console.log(`O numero ${valor} nao foi encontrado`);
}