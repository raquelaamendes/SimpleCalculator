var numero1 = null;
var numero2 = null;
var calculo = null;
var resultado = null;

function escrever_na_(variavel){
/*colocar o que vem na numero1 ou numero2 ou calculo*/
}

function escrever(botao)
{
    switch(document.getElementById("mostrador").innerHTML) {
        case "/":
            document.getElementById("mostrador").innerHTML = botao.innerHTML;
            break;
        case "-":
            document.getElementById("mostrador").innerHTML = botao.innerHTML;
            break;
        case "+":
            document.getElementById("mostrador").innerHTML = botao.innerHTML;
            break;
        case "*":
            document.getElementById("mostrador").innerHTML = botao.innerHTML;
            break;
        default:
            document.getElementById("mostrador").innerHTML += botao.innerHTML;
            break;
    }
}

function limpar(){
    document.getElementById("mostrador").innerHTML = "";
    var numero1 = null;
    var numero2 = null;
    var calculo = null;
}

function operacao(botao){
    numero1=parseFloat(document.getElementById("mostrador").innerHTML);
    document.getElementById("mostrador").innerHTML = botao.innerHTML;
    calculo = document.getElementById("mostrador").innerHTML;
}

function calcular(){
    numero2 = parseFloat(document.getElementById("mostrador").innerHTML);
    switch(calculo) {
        case "/":
            resultado = numero1 / numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "+":
            resultado = numero1 + numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
    }
    if(isNaN(resultado)){
        resultado = "Erro!"
    }
    document.getElementById("mostrador").innerHTML=resultado;
}