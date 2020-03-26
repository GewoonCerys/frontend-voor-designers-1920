# Vragen

Ik heb niet veel voortgang, vind dit echt lastig. Ik heb bij anderen hun codepens gekeken (Sebastiaan, Michelino) maar ben niet veel wijzer geworden. Ik snap nu wel hoe ik elementen in css kan stylen, dus bedankt voor de codepen met uitleg! (Ik heb het voor nu even gekopieerd als je dat niet erg vind)
Mijn vraag:

Op het moment klik je op een jaartal en krijg je een pop up te zien. Wat ik wil is dat je klikt op een jaartal en dat dan de description van bijbehorend jaartal uit klapt/tevoorschijn komt. Als je opnieuw klikt, klapt deze weer dicht en/of verdwijnt deze weer. Qua CSS heb ik nog niets "mooi gemaakt" omdat ik eerst wil dat de javascript werkt. Wat moet ik doen? Hoe schrijf ik deze functie? Ik probeerde Sebastiaan na te doen maar dat werd juist erg verwarrend. De eventlistener zit volgens mij nu wel op de juiste plek want de alert werkt wel. Maar dit gebeurd als je op ieder jaartal drukt en ik wil eigenlijk dat het per jaartal de description van dat bijbehorende jaartal laat zien.


# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Samen met May heb ik een API van Ghibli films uitgekozen. Die vond ik wat leuker dan de films die ik via de slides had. Mijn idee is om een tijdlijn te maken van de Ghibli films op jaartal waarop ze zijn uitgekomen. Wanneer je op een film klikt krijg je info over wanneer de film is uitgekomen, wie de director is en dart soort dingen.

## Stap 1: Schetsen van de interactie

Eerst ben ik begonnen met een schets te maken van hoe ik dit voor me zou zien in een browser.

![Interacties schets](img/stap01.jpg "Interactie schets")


## stap 2: Opstellen van de html

Het opstellen van de html ging vrij gemakkelijk met de tutorial, het was namelijk gewoon knippen plakken.

![tijdlijn versie 01](img/stap02.jpg "namen verticaal")

De namen van de films staan er verticaal, maar die wil ik horizontaal.
Ook heb ik nog staan dat ik images wil oproepen, maar die zitten niet in deze api.

![tijdlijn versie 02](img/stap03.jpg "description verticaal")

Om te kijken of ik nog wist wat er gebeurde heb ik de namen weggehaald en er descriptions van gemaakt. Dit werkt, dus nu wil ik een eventlistener aanmaken waardoor als je op een titel klikt je de bijbehorende description krijgt. Maar ik weet even niet zo goed waar ik dan mee moet gaan beginnen.



## stap 3: Vormgeven met css
Hier ga ik me iets later op focussen. Ik wil voor nu dat de javascript enigszins werkt.
 

## stap 4: Javascript
![tijdlijn versie 03](img/stap04.jpg "article blocks")
Door de hulp van Sanne ben ik iets verder gekomen omdat ik nu weet hoe ik kan stylen in css. Wat ik nu wil gaan proberen is dat de jaartallen klikbaar worden. Wanneer een gebruiker hierop klikt, wil ik dat de blauwe blokken pas tevoorschijn komen. Ik heb nu wel een event listener die je een pop up geeft, maar dat is niet wat ik wil. Hierdoor weet ik in principe dat de click werkt, alleen moet de functie dus anders worden.

Ik had gekeken bij Sebastiaans codepen. Hij heeft een click op de gehele article, waardoor je de description ziet. Dit is eigenlijk ook wat ik wil. Ik wil dat als je op de jaartallen klikt, de description en title tevoorschijn komen. Ik probeerde zijn code te begrijpen door mijn code erop toe te passen, maar hierdoor raakte ik juist meer in de war (oeps). Ik snap wel het principe, maar dingen zoals "substring" ken(de) ik niet. Hoe meer ik las hoe meer ik zag dat er steeds meer dingen gebeurde zoals "vulmetbasics" en "vulmetdetails" - snap er gewoon even niks meer van.

Ik vind het erg lastig omdat ik niet gewend ben om te werken met data die je ergens ophaalt. Ik ben gewend dat er in de html elementen staan die ik vervolgens aanpas. Nu alles in de javascript gebeurd vind ik het erg verwarrend en weet ik niet waar ik moet beginnen.

![tijdlijn versie 04](img/stap05.jpg "clickable dates")
![tijdlijn versie 05](img/stap06.jpg "clickable dates")
