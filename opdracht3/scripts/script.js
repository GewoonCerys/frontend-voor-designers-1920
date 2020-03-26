var requestURL = ' https://ghibliapi.herokuapp.com/films';
var request = new XMLHttpRequest();
var button = document.querySelector('button');


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
        
        filmDate.addEventListener('click', function (event) {
  alert('Ja leuk dit, maar dit moet dus eigenlijk zo zijn dat nu de descriptions te voorschijn komen. De alert is even om te testen, ik wil niet dat het uiteindelijk een alert wordt');
});
       
    }

}

//function vulFilmMetInfo(deFilm) {
//	/* het nummer van de film bepalen */
//	let filmID = deFilm.id;
//	let volgNummer = filmID.substring(20);
//
//	
//	/* de info van alleen die film ophalen */	
//	let requestURL = ' https://ghibliapi.herokuapp.com/films'+volgNummer+'.json';
//	let request = new XMLHttpRequest();
//	request.open('GET', requestURL);
//
//	request.responseType = 'json';
//	request.send();
//	
//	/* dit doen als de info van de film binnenkomst */
//	request.onload = function () {
//		const filmInfo = request.response;
//		
//		/* als de film de class "details" heeft */
//		if(deFilm.classList.contains("details")){
//			/* de class "details" verwijderen */
//			deFilm.classList.remove("details");
//			/* de film vullen met de basics */
//			vulMetBasics(deFilm, filmInfo);	
//		}
//		/* als de film de class "details" niet heeft */
//		else {
//			/* de class "details" toevoegen */
//			deFilm.classList.add("details");
//			/* de film vullen met de details */
//			vulMetDetails(deFilm, filmInfo);	
//		}
//	}

