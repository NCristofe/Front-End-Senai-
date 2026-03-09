function apresentar(nome, idade) {
    return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
}

function dobro(numero) {
    return numero * 2;
}

function somar(a, b) {
    return a + b;
}

function ehPar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(apresentar("Natanael", 18));
console.log("Dobro de 10:", dobro(10));
console.log("Soma de 5 + 7:", somar(5, 7));
console.log("O número 8 é:", ehPar(8));
console.log("O número 9 é:", ehPar(9));

document.write("<p>" + apresentar("Natanael", 18) + "</p>");
document.write("<p>Dobro de 10: " + dobro(10) + "</p>");
document.write("<p>Soma de 5 + 7: " + somar(5, 7) + "</p>");
document.write("<p>O número 8 é: " + ehPar(8) + "</p>");
document.write("<p>O número 9 é: " + ehPar(9) + "</p>");    