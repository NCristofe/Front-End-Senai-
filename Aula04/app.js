function verificarIdade() {
    let idade = Number(document.getElementById("idadeInput").value);
    let resultado = "";

    if(idade < 12){
        resultado = "Criança";
    } else if(idade >= 12 && idade < 18){
        resultado = "Adolescente";
    } else if(idade >= 18 && idade < 60){
        resultado = "Adulto";
    } else {
        resultado = "Idoso";
    }

    document.getElementById("resultadoIdade").innerText = resultado;
}

function verificarMes() {
    let mes = Number(document.getElementById("mesInput").value);
    let nomeMes = "";

    switch(mes){
        case 1: nomeMes="Janeiro"; break;
        case 2: nomeMes="Fevereiro"; break;
        case 3: nomeMes="Março"; break;
        case 4: nomeMes="Abril"; break;
        case 5: nomeMes="Maio"; break;
        case 6: nomeMes="Junho"; break;
        case 7: nomeMes="Julho"; break;
        case 8: nomeMes="Agosto"; break;
        case 9: nomeMes="Setembro"; break;
        case 10: nomeMes="Outubro"; break;
        case 11: nomeMes="Novembro"; break;
        case 12: nomeMes="Dezembro"; break;
        default: nomeMes="Número inválido";
    }

    document.getElementById("resultadoMes").innerText = nomeMes;
}

function verificarNota() {
    let nota = Number(document.getElementById("notaInput").value);
    let resultado = "";

    if(nota >= 9){
        resultado = "Excelente";
    } else if(nota >= 7){
        resultado = "Bom";
    } else if(nota >= 5){
        resultado = "Regular";
    } else {
        resultado = "Reprovado";
    }

    document.getElementById("resultadoNota").innerText = resultado;
}