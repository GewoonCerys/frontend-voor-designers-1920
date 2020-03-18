const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = ' https://ghibliapi.herokuapp.com/films';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const movies = request.response;
    showmovietitle(movies);
    console.log(movies);
}

function showmovietitle(jsonObj) {
    
    var i;
    for (i = 0; i < 20; i++) {
    
    const title = document.createElement('p');
    title.textContent = jsonObj[i]['title'];
    const poster = document.createElement('img');
    poster.src = jsonObj[i]['cover'];
    header.appendChild(title);
    header.appendChild(poster);
    }
}