'use strict'

let slideIndex = 0;
showSlides();

function showSlides() {   
    let i;
    const slides = document.querySelectorAll(".slider__container");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "flex"; 
    setTimeout(showSlides, 6000); 
}

