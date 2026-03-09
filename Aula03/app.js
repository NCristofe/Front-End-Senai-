// Variáveis
let nome = "Lucas";
let idade = 25;
let cidade = "São Paulo";

let num1 = 10;
let num2 = 5;

let fraseConcat = "Meu nome é " + nome + " e tenho " + idade + " anos.";

let fraseTemplate = `Eu moro em ${cidade} e gosto de programar.`;

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(fraseConcat);
console.log("Soma:", soma);
console.log("Subtração:", sub);
console.log("Multiplicação:", mult);
console.log("Divisão:", div);
console.log(fraseTemplate);

document.write("<p>" + fraseConcat + "</p>");
document.write("<p>Soma: " + soma + "</p>");
document.write("<p>Subtração: " + sub + "</p>");
document.write("<p>Multiplicação: " + mult + "</p>");
document.write("<p>Divisão: " + div + "</p>");
document.write("<p>" + fraseTemplate + "</p>");