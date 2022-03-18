var carta1 = {
    nome: "Bubassauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu de dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaPlayer;

function sortearCarta() {
    numCartaMaq = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numCartaMaq];

    numCartaPlayer = parseInt(Math.random() * 3);
    while(numCartaMaq == numCartaPlayer){
        numCartaPlayer = parseInt(Math.random() * 3);
    }
    cartaPlayer = cartas[numCartaPlayer];
    console.log(cartaPlayer);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""

    for(var atributo in cartaPlayer.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value=" + atributo + ">" + atributo
    }
    opcoes.innerHTML = opcoesTexto;

}

function atributoSelec() {
    let radioAtributo = document.getElementsByName("atributo");

    for(let i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked == true){
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributo = atributoSelec();
    var elementoResultado = document.getElementById("resultado");
    var cartaPlayerAtributo = cartaPlayer.atributos[atributo];
    var cartaMaquinaAtributo = cartaMaquina.atributos[atributo];

    if(cartaPlayerAtributo > cartaMaquinaAtributo){
        elementoResultado.innerHTML = "Você venceu!"
    }
    else if(cartaPlayerAtributo < cartaMaquinaAtributo){
        elementoResultado.innerHTML = "Você perdeu!"
    }
    else{
        elementoResultado.innerHTML = "Empate!"
    }

    console.log(cartaPlayerAtributo);
    console.log(cartaMaquinaAtributo);    
    
}