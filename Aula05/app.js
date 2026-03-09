
document.write("<h2>For: 1 a 10</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}

document.write("<h2>While: 1 a 10</h2>");
let i = 1;
while (i <= 10) {
    document.write(i + " ");
    i++;
}

document.write("<h2>Do...While: 1 a 10</h2>");
i = 1;
do {
    document.write(i + " ");
    i++;
} while (i <= 10);


document.write("<h2>For: pares 2 a 20</h2>");
for (let j = 2; j <= 20; j += 2) {
    document.write(j + " ");
}

document.write("<h2>While: pares 2 a 20</h2>");
j = 2;
while (j <= 20) {
    document.write(j + " ");
    j += 2;
}

document.write("<h2>Do...While: pares 2 a 20</h2>");
j = 2;
do {
    document.write(j + " ");
    j += 2;
} while (j <= 20);


let senha;
do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

document.write("<p>Senha correta!</p>");