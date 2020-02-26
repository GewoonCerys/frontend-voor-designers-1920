/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/


// Hier benoem ik ieder object uit de HTML wat ik wil gaan beinvloeden
var musicList = document.querySelector('ul');
var sortable = Sortable.create(musicList);
var muzieknummerbuttons = document.querySelectorAll('li button');


// Voor elke list item 
muzieknummerbuttons.forEach(function (muzieknummerbutton) {

    muzieknummerbutton.addEventListener("click", function (event) {
        var richting = event.target.value;
        // zoek de opa van de button op
        var hetLiedje = event.target.parentNode.parentNode;
        
        // Als de value van de button op is dan deze regels
        if (richting == "op") {
            // Het vorige broertje van hetLiedje element
            var vorigeLiedje = hetLiedje.previousElementSibling;
            
            // Als het vorige liedje niet null is, dan deze regels
            if (vorigeLiedje != null) {
                hetLiedje.parentNode.insertBefore(hetLiedje, vorigeLiedje);
            }
        } 
        
        // Als de value van de butten neer is dan deze regels
        else if (richting == "neer") {
            // Het volgende broertje van hetLiedje element
            var volgendeLiedje = hetLiedje.nextElementSibling;
            // Als het volgende liedje niet null is, dan deze regels
            if (volgendeLiedje != null) {
                hetLiedje.parentNode.insertBefore(volgendeLiedje, hetLiedje);
            }
        }



    });

});
