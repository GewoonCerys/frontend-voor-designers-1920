const track = document.querySelector('.slideshowtrack');
const slides = Array.from(track.children);
// ik gebruik een array om alle 4 de "kind" elementen uit de slideshowtrack te halen. In dit geval zijn dat de li'tjes met de class "slide"
const volgendePijl = document.querySelector('.slidebutton--right'); 
const vorigePijl = document.querySelector('.slidebutton--left');
const balletjesNav = document.querySelector('.slideshownav');
const balletjes = Array.from(balletjesNav.children);
// Ik wil navigatie balletjes onderaan mijn plaatjes die ook interactief zijn, dus met de array roep ik deze hier alle 4 op
const slideBreedte = slides[0].getBoundingClientRect().width;
// Geeft de breedte weer van de slides, die veranderd als je de schermgrootte aanpast

const setSlidePositie = (slide, index) => {
    slide.style.left = slideBreedte * index + 'px';
};
slides.forEach(setSlidePositie);
// plaatst alle slide images naast elkaar

const beweegDeSlide = (track, actieveSlide, doelSlide) => {
    track.style.transform = 'translateX(-' + doelSlide.style.left + ')';
    // hij verplaatst hier de volgende slide over de x-as
    actieveSlide.classList.remove('actieveslide');
    doelSlide.classList.add('actieveslide');
    // Hier verplaats ik constant de actieve slide zodat ik naar de volgende kan klikken. Met CSS heb ik het een transition gegeven waardoor hij smooth naar de volgende gaat

}

// Als je op de vorige pijl klikt, ga je naar het vorige plaatje
vorigePijl.addEventListener('click', e => {
    const actieveSlide = track.querySelector('.actieveslide');
    const vorigeSlide = actieveSlide.previousElementSibling;
    
    beweegDeSlide(track, actieveSlide, vorigeSlide);
       // Hier zeg ik dat hij de track, actieveSlide en vorigeSlide mag aanpassen, zoals dat hierboven gebeurd   
})

// Als je op de volgende pijl klikt, ga je naar het volgende plaatje
volgendePijl.addEventListener('click', e => {
    const actieveSlide = track.querySelector('.actieveslide');
    const volgendeSlide = actieveSlide.nextElementSibling;
    
    beweegDeSlide(track, actieveSlide, volgendeSlide);
    // Hier zeg ik dat hij de track, actieveSlide en volgendeSlide mag aanpassen, zoals dat hierboven gebeurd
})

balletjesNav.addEventListener('click', e => {
const doelBalletje = e.target.closest('button');

if (!doelBalletje) return;  

const actieveSlide = track.querySelector('.actieveslide');
const actieveBalletje = balletjesNav.querySelector('.actieveslide');
const doelIndex = balletjes.findIndex(balletje => balletje === doelBalletje);
// Welk navigatie balletje actief is en welk "nummer" hij heeft met findIndex
const doelSlide = slides[doelIndex];

  beweegDeSlide(track, actieveSlide, doelSlide);

actieveBalletje.classList.remove('.actieveslide');
doelBalletje.classList.add('.actieveslide');
})






