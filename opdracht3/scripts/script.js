const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = ' https://ghibliapi.herokuapp.com/films';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const movies = request.response;
  const description = request.response;
    showmovietitle(movies);
    showmovieDescription(description);
    console.log(description);
}

function showmovietitle(jsonObj) {
    
    var i;
    for (i = 0; i < 20; i++) {
    
    const title = document.createElement('p');
    title.textContent = jsonObj[i]['title'];
    header.appendChild(title);
    }
}

function showmovieDescription(jsonObj) {
    
    var i;
    for (i = 0; i < 20; i++) {
    
    const description = document.createElement('p');
    description.textContent = jsonObj[i]['description'];
    header.appendChild(description);
    }
}

showmovietitle.addEventListener('click');