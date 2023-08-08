

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;
/*
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
*/


// console.log(slideSize);



// arrange the slides next to one another
    /*slides[0].style.left = slideWidth * 0 + 'px';
    slides[1].style.left = slideWidth * 1 + 'px';
    slides[2].style.left = slideWidth * 2 + 'px';

    -or-

    slides.forEach((slide, index)) => {
    slide.style.left = slideWidth * index + 'px'; 
    }

    */


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});





// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    
    /* move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    */

    moveToSlide(track, currentSlide, nextSlide);
});


// when I click nav indicator, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on 
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    /*
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    */

    updateDots(currentDot, targetDot);
})