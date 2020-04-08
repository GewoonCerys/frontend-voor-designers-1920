# Linkje 

https://gewooncerys.github.io/frontend-voor-designers-1920/opdracht3/


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
 

## stap 3: Javascript
![tijdlijn versie 03](img/stap04.jpg "article blocks")
Door de hulp van Sanne ben ik iets verder gekomen omdat ik nu weet hoe ik kan stylen in css. Wat ik nu wil gaan proberen is dat de jaartallen klikbaar worden. Wanneer een gebruiker hierop klikt, wil ik dat de blauwe blokken pas tevoorschijn komen. Ik heb nu wel een event listener die je een pop up geeft, maar dat is niet wat ik wil. Hierdoor weet ik in principe dat de click werkt, alleen moet de functie dus anders worden.

Ik had gekeken bij Sebastiaans codepen. Hij heeft een click op de gehele article, waardoor je de description ziet. Dit is eigenlijk ook wat ik wil. Ik wil dat als je op de jaartallen klikt, de description en title tevoorschijn komen. Ik probeerde zijn code te begrijpen door mijn code erop toe te passen, maar hierdoor raakte ik juist meer in de war (oeps). Ik snap wel het principe, maar dingen zoals "substring" ken(de) ik niet. Hoe meer ik las hoe meer ik zag dat er steeds meer dingen gebeurde zoals "vulmetbasics" en "vulmetdetails" - snap er gewoon even niks meer van.

Ik vind het erg lastig omdat ik niet gewend ben om te werken met data die je ergens ophaalt. Ik ben gewend dat er in de html elementen staan die ik vervolgens aanpas. Nu alles in de javascript gebeurd vind ik het erg verwarrend en weet ik niet waar ik moet beginnen.

![tijdlijn versie 04](img/stap05.jpg "clickable dates")
![tijdlijn versie 05](img/stap06.jpg "clickable dates")

 Ik kwam erachter dat ik eigenlijk al best ver was met de oplossing voor het verstoppen van de articles. Nouja, ik dacht op de juiste manier. De uitwerking was minder. Ik heb op het moment de click met display none. Inderdaad niet prettig/handig voor screenreaders, maar via de link die je stuurde kreeg ik het niet aan de praat. Toen werd hij ingeklapt, maar niet meer uitgeklapt.

![tijdlijn versie 06](img/stap07.jpg "clickable dates versie 2")

Ik heb nu eindelijk ook een achtergrond toegevoegd. Maakt al een verschil. Wat nu wel gebeurd is dat als je op een datum klikt, de achtergrond verspringt. Ik weet wel hoe dat komt, maar weet niet hoe ik het kan oplossen. *Edit = opgelost met background-attachement.

![tijdlijn versie 06.1](img/stap08.jpg "clickable dates versie 3")

Ik ben nu aan de slag gegaan met sortable, omdat het animeren van een bepaald element (de article wanneer er geklikt wordt) nu even niet lukt. De plugin werkt zoals ik hem wil, alleen blijft de styling onzichtbaar. Kom er even niet uit waarom dat is? Het hoort niet in iedergeval. Als ik op een jaartal klik dan blijft hij alsnog verborgen, dus daar ligt het niet aan. Ik kan er wel dingen inslepen. *Edit, lag aan dat ik alle articles aanriep in de css. Door er main voor te zetten spreek ik alleen het article in de main aan.

![tijdlijn versie 07](img/stap09.jpg "sortable")


## stap 4: Vormgeven met css
Omdat ik moeite had met de javascript ben ik wat later begonnen aan de css. Ondertussen heb ik zoals hierboven benoemd wel al een achtergrond toegevoegd en heb ik een hoverstate aan de knopjes toegevoegd. Als je nu op een knopje drukt schuift een blok uit met informatie over de film die in dat jaar uit kwam.

Mijn API heeft van zichzelf geen foto's en dat vond ik jammer. Daarom heb ik zelf foto's toegevoegd en in een array gestopt, waar de gebruiker door heen kan klikken. *Geupdate! Je kunt nu met de links en rechts pijltjes toetsen door de plaatjes heen. Dit duurde best wel lang voor ik begreep wat er gebeurde en hoe het werkte, dus ik ben super blij dat ik hieruit ben gekomen.

![tijdlijn versie 08](img/stap11.jpg "image below")

Nu wil ik eigenlijk dat de achtergrond wijzigd als je de pijltjes toetsen gebruikt, maar daar ben ik nog niet uit hoe ik dat kan doen. Voor nu is het dus de images maar dat vind ik ook niet erg. 

