var listaFilmes = [
    
    "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    
    "https://clubnation.com.br/wp-content/uploads/2021/12/a-chegada-aclamado-vencedor-do-oscar-sera-removido-da-netflix-em-breve-saiba-quando.jpg",
    
    "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",

    "https://m.media-amazon.com/images/I/71zdnXB5oFL._AC_SL1500_.jpg",

];

var listaElement = document.getElementById("catalogo-filmes");

for(i = 0; i < listaFilmes.length; i++){
    listaElement.innerHTML = listaElement.innerHTML + "<img src=" + listaFilmes[i] + " class=" + "catalogo-imagens" +">";
}

function addFilm() {
    var newMovie = document.getElementById("entrada-texto").value;
    
    listaFilmes.push(newMovie);

    console.log(listaFilmes[listaFilmes.length - 1]);

        listaElement.innerHTML = listaElement.innerHTML + "<img src=" + listaFilmes[listaFilmes.length-1] + " class=" + "catalogo-imagens" +">";

}