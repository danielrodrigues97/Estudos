// Criando um sistema de escola com JS
// Nome do Aluno - Nota1 - Nota2 - Média - Aprova/Reprovado

var nomes = ["Igor","José", "Maria"];
var notasA = [7.0,6.5,9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2){
    return (n1+n2)/2;
}

function passou (media){
    var resultado = "Reprovado"; 

    if(media > 7){
       resultado = "aprovado"
    }

    return resultado
}

for (var index in nomes){
    // var notaF =  media(notasA [index], notasB[index]);
    
    console.log(
        nomes[index] + " - " + 
        notasA[index] + " - " + 
        notasB[index] + " - " + 
        media(notasA [index], notasB[index]) + " - " + 
        passou(media)
    );
}

var date = new Date(200);
console.log(date);
