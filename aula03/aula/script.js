var numeroSecreto = parseInt(Math.random() * 11);
var numTentativas = 3;
console.log(numeroSecreto);
console.log(numTentativas);

function Chutar() {
    numTentativas--;
    document.getElementById("tentativas").innerHTML = "Tentativas restando: " + numTentativas;
    let numeroChute = document.getElementById("valor").value;
    console.log(numTentativas);

    if(numeroSecreto == numeroChute){
        resultado.innerHTML = "Você acertou!"
        document.getElementById("tentativas").innerHTML = "";
    }
    else if (numeroChute > 10 || numeroChute < 0 ) {
        resultado.innerHTML = "Digite um número entre 0 e 10!";
        numTentativas++;
        document.getElementById("tentativas").innerHTML = "Tentativas restando: " + numTentativas;
    }
    else if(numTentativas <= 0){
        document.getElementById("tentativas").innerHTML = "Fim! Você perdeu suas tentativas! A resposta era " + numeroSecreto;
        document.getElementById("resultado").innerHTML = "";
    }
    else {
        if(numeroChute > numeroSecreto){
            resultado.innerHTML = "Você errou! Tente novamente! O número é MENOR que " + numeroChute
        }
        else{
            resultado.innerHTML = "Você errou! Tente novamente! O número é MAIOR que " + numeroChute
        }
    }
        
}