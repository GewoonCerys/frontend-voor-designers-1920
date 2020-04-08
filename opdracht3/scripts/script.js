var requestURL = ' https://ghibliapi.herokuapp.com/films';
var request = new XMLHttpRequest();
var button = document.querySelector('button');
var movieList = document.querySelector('main');
var watchList = document.querySelector('.watchlist');

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;
    console.log(movies);
    showMovies(movies);
}
/* laat de films zien */
function showMovies(movies) {
    /* door de array met movies loopen */
    for (let i = 0; i < 20; i++) {
        /* een container om de elementen van een film in te stoppen */
        var filmDate = document.createElement('button');
        let theMovie = document.createElement('article');

        /* de elementen van een film */
        let release_date = document.createElement('p');
        let title = document.createElement('h2');
        let description = document.createElement('p');

        /* de elementen van de film vullen */
        release_date.textContent = movies[i]['release_date'];
        title.textContent = movies[i]['title'];
        description.textContent = movies[i]['description'];

        /* de elementen aan de container toevoegen */
        filmDate.appendChild(release_date);
        theMovie.appendChild(title);
        theMovie.appendChild(description);

        /* de container aan de main toevoegen */
        document.body.querySelector("main").appendChild(filmDate);
        document.body.querySelector("main").appendChild(theMovie);

        /* Als er op de datum wordt geklikt, laat dan de info van de bijbehorende film zien */
        filmDate.addEventListener('click', toggleMovieInfo);
    }
}

/* film laten zien functie */
function toggleMovieInfo(event) {
    var hetArticleNaDeButton = this.nextElementSibling;
    hetArticleNaDeButton.classList.toggle("show");
}

/* sortable plugin om een watchlist te maken */
new Sortable(movieList, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(watchList, {
    group: 'shared',
    animation: 150
});

/* foto'tje onderaan veranderen */
var achtergrond = document.getElementById('achtergrond');
var ghibliFotos = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
var huidigeAchtergrond = 0;
var maxAchtergrond = ghibliFotos.length;

/* vorige en volgende met de pijltjes toetsen wat loopt */
function volgendeAchtergrond() {
    huidigeAchtergrond = huidigeAchtergrond + 1;
    if (huidigeAchtergrond >= maxAchtergrond) {
        huidigeAchtergrond = 0;
    }
    achtergrond.src = 'img/' + ghibliFotos[huidigeAchtergrond] + '.jpg';
}

function vorigeAchtergrond() {
    huidigeAchtergrond = huidigeAchtergrond - 1;
    if (huidigeAchtergrond < 0) {
        huidigeAchtergrond = maxAchtergrond - 1;
    }
    achtergrond.src = 'img/' + ghibliFotos[huidigeAchtergrond] + '.jpg';
}
/* het indrukken van de pijltjes toetsen. 37 is pijltje links en 39 is pijltje rechts */
document.onkeydown = function (e) {
    if (e.which == 37) {
        vorigeAchtergrond(e);
    } else if (e.which == 39) {
        volgendeAchtergrond(e);

    }
};
