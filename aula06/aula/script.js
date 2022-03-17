var rafa = {nome:"Rafa", vitorias:2, empates:1, derrotas:1, pontos:0};
var paulo = {nome:"Paulo", vitorias:1, empates:1, derrotas:2, pontos:0};
var guilherme = {nome:"Guilherme", vitorias:1, empates:1, derrotas:2, pontos:0};

rafa.pontos = calcPontos(rafa);
paulo.pontos = calcPontos(paulo);
guilherme.pontos = calcPontos(guilherme);

function calcPontos(jogador) {
    let pontos = ((jogador.vitorias*3) + jogador.empates) - jogador.derrotas;
    return pontos;
}

var jogadores = [rafa, paulo, guilherme];

function exibirPlayers(jogadoresList) {
    var elemento = "";
    
    for(let i = 0; i < jogadoresList.length; i++){
        elemento += "<tr>";
        elemento += "<td>" + jogadoresList[i].nome + "</td>";
        elemento += "<td>" + jogadoresList[i].vitorias + "</td>";
        elemento += "<td>" + jogadoresList[i].empates + "</td>";
        elemento += "<td>" + jogadoresList[i].derrotas + "</td>";
        elemento += "<td>" + jogadoresList[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    var tableElement = document.getElementById("tabelaJogadores");
    tableElement.innerHTML = elemento;
}

exibirPlayers(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcPontos(jogador);
    exibirPlayers(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcPontos(jogador);
    exibirPlayers(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calcPontos(jogador);
    exibirPlayers(jogadores);
}