let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
frutas.pop();
frutas.unshift("morango");
frutas.shift();

let numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = numeros.filter(n => n % 2 === 0);
let quadrados = numeros.map(n => n ** 2);
let soma = numeros.reduce((total, n) => total + n, 0);
let ordenados = [...numeros].sort((a,b) => a-b);
let invertidos = [...ordenados].reverse();

console.log("Frutas:", frutas);
console.log("Números:", numeros);
console.log("Pares:", pares);
console.log("Quadrados:", quadrados);
console.log("Soma:", soma);
console.log("Ordenados:", ordenados);
console.log("Invertidos:", invertidos);

document.write("<p>Frutas: " + frutas + "</p>");
document.write("<p>Números: " + numeros + "</p>");
document.write("<p>Pares: " + pares + "</p>");
document.write("<p>Quadrados: " + quadrados + "</p>");
document.write("<p>Soma: " + soma + "</p>");
document.write("<p>Ordenados: " + ordenados + "</p>");
document.write("<p>Invertidos: " + invertidos + "</p>");