'use strict'

let slideIndex = 0;

function showSlides() {   
    const slides = document.querySelectorAll(".slider__container");
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } 
    slides[slideIndex-1].style.display = "flex"; 
    setTimeout(showSlides, 6000); 
}
showSlides();

