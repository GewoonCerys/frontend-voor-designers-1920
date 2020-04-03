var requestURL = ' https://ghibliapi.herokuapp.com/films';
var request = new XMLHttpRequest();
var button = document.querySelector('button');
var movieList = document.querySelector('main');
var watchList = document.querySelector('.watchlist');


request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  	const movies = request.response;
	console.log(movies);
	showMovies(movies);
}

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
        
        filmDate.addEventListener('click', toggleMovieInfo);      
    }
}

function toggleMovieInfo(event){
	var hetArticleNaDeButton = this.nextElementSibling;
	hetArticleNaDeButton.classList.toggle("show");
}


new Sortable(movieList, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(watchList, {
    group: 'shared',
    animation: 150
});
