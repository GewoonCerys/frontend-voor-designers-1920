# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Ik heb gekozen voor een carousel met vakantiefoto's: Een carousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord.

## Stap 1: Schetsen van de interactie

Eerst ben ik begonnen met een schets te maken van hoe ik dit voor me zou zien in een browser. Ik kwam al snel met het idee dat ik een carousel wilde dat het gehele scherm vulde. Het zou met de pijltjestoetsen of knoppen onder het carousel bediend kunnen worden.

![Interacties schets](img/interactieschets.jpg "Interactie schets")

Ik wilde ook een click en drag om door de foto's te navigeren. Eerst maar eens kijken of het lukt met knopjes/pijltjes toetsen.

## stap 2: Opstellen van de html

Ik vond het best wel lastig om te bedenken hoe ik de elementen zou plaatsen binnen de html. Met klasgenoten zijn we erachter gekomen dat we het beste een ul konden aan maken als een soort "container", met daarin de li's, wat de foto's zouden worden.

![carousel versie 01](img/stap01.jpg "Basis html")

De afbeeldingen gaan wel al netjes naast elkaar, maar verlaten de viewport waardoor je een horizontale scroll krijgt. Dat is niet helemaal de bedoeling, maar met een beetje googelen vond ik "overflow-x: auto", waardoor er nu als het ware in de ul wordt gescrolt, en niet in de body.

![carousel versie 02](img/stap02.jpg "scrollen in de ul")

Ik vond het toch niet mooi, zo links in de hoek een foto'tje. Dus ben ik terug gegaan naar mijn schets en heb ik de carousel over de gehele breedte van het scherm. Ook zijn er nu knopjes waarmee er binnenkort genavigeert kan worden.

![carousel versie 03](img/stap03.jpg "versie 3 vormgeving")

Ik vond het erg lastig om verder te gaan, omdat ik niet wist waar ik moest beginnen, welke elementen op elkaar moesten gaan reageren en hoe ik dat op de beste manier kon toepassen. Ik heb een youtube tutorial erbij gehaald die opzich al had wat ik had, de ul als een container met daarin li's als de images. Wat ik niet had was daarom heen weer een div die de boel bij elkaar houdt, dus die heb ik toegevoegd. Ook heb ik hier een nieuw stukje code ondekt, de "--", wat een class afzonderlijk kan modifyen. Ik had het nog niet eerder gezien of gebruikt.



## stap 3: Vormgeven met css

 Met deze tutorial heb ik de balletjes onderaan de foto's kunnen maken als indicators. Ook heb ik hier geleerd dat je een class kunt modifyen in css (ik heb bijvoorbeeld .slideshowindicator, een punt er tussen, en dan actieveslide) om alleen die specifieke slideshowindicator in mijn geval aan te passen. In dit geval een kleurtje geven aan de actieve slide indicator.

![carousel versie 04](img/stap04.jpg "versie 3 vormgeving")

Met de tutorial heb ik nu een basis gezet om verder te gaan met javascript. Ik had dus eerst een scrollend element dus wat dat betreft ben ik wel wat stapjes achteruit. Maar ik wist oprecht niet hoe ik verder moest, dus probeer ik het zo op te lossen.

## stap 4: Javascript


