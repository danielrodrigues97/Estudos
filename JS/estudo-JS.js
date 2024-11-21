// Criando um sistema de escola com JS
// Nome do Aluno - Nota1 - Nota2 - Média - Aprova/Reprovado

var str = 500
//alert( "vai delicinha " + str); }


alert("Consumo de bebida alcolicas!! \nCaso vc seja menor de 18 anos, não poderá beber!!!");
valor = parseInt(prompt("Entre com o ano em que vc nasceu: "));

maior_18 = 2024 - valor; 

if(maior_18 >= 18){
    alert("Vc possui: " + maior_18 + "\nBeba com moderação!!! \nCuide da sua saúde!!!");
}else{alert("Vc tem: "+ maior_18 + "\nNão pode consumir bebidas alcolicas!!!");}


/*valor = parseInt(prompt("Entre com um valor: "));
alert("O dobro do seu valor é: " + 2*valor);*/



//console.log(a);
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
