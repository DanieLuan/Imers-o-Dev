var numeroSecreto = parseInt(Math.random() * 11);
var numTentativas = 3;
console.log(numTentativas);

function Chutar() {
    numTentativas--;
    document.getElementById("tentativas").innerHTML = "Tentativas restando: " + numTentativas;
    console.log(numTentativas);
    if (numTentativas < 1){
        document.getElementById("tentativas").innerHTML = "Fim! Você perdeu suas tentativas! A resposta era " + numeroSecreto;
        document.getElementById("resultado").innerHTML = " ";
    }
    else{
        var numeroChute = parseInt(document.getElementById("valor").value);
        var resultado = document.getElementById("resultado");

        if (numeroChute == numeroSecreto) {
            resultado.innerHTML = "Você acertou!"
            document.getElementById("tentativas").innerHTML = " ";
        }
        else if (numeroChute > 10 || numeroChute < 0 ) {
            resultado.innerHTML = "Digite um número entre 0 e 10!";
            numTentativas++;
            document.getElementById("tentativas").innerHTML = "Tentativas restando: " + numTentativas;
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
}