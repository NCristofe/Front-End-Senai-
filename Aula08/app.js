let pessoa = {
    nome: "Natanael",
    idade: 18,
    cidade: "São Paulo",
    apresentar: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
    }
};

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ligar: function() {
        return "Carro ligado";
    }
};

let loja = {
    nome: "Mercado",
    produtos: {
        arroz: 10,
        feijão: 5,
        leite: 8
    }
};

console.log(pessoa.apresentar());
console.log(carro.ligar());
for (let [produto, quantidade] of Object.entries(loja.produtos)) {
    console.log(`${produto}: ${quantidade}`);
}

document.write("<p>" + pessoa.apresentar() + "</p>");
document.write("<p>" + carro.ligar() + "</p>");
for (let [produto, quantidade] of Object.entries(loja.produtos)) {
    document.write("<p>" + produto + ": " + quantidade + "</p>");
}