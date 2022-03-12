function adicionarFilme() {
    var newMovie = document.getElementById("filme").value;

    if (newMovie.endsWith(".jpg") || newMovie.endsWith(".png")){
        listarFilmesNaTela(newMovie);
    }
    else{
        console.error("Endereço de Filme Inválida")
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(newMovie) {
    var addNewMovie = "<img src=" + newMovie + ">";
    var listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML = listaFilmes.innerHTML + addNewMovie;
}