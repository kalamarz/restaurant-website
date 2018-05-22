'use strict'

let slideIndex = 0;

function showSlides() {   
    const slides = document.querySelectorAll(".slider__container");
    for (let i = 0; i < slides.length; i++) {
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


window.addEventListener('scroll', fixedNavbar);
function fixedNavbar() {
    const navbar = document.querySelector('.navbar');
    const navTop = navbar.offsetTop;
    
    if (window.scrollY >= navTop + 1) {
        navbar.classList.add('navbar--fixed');
    } else {
        navbar.classList.remove('navbar--fixed');
    }
}

const menuTabs = document.querySelector('.tabs__menu');
const content = document.querySelectorAll('.tabs__content');

menuTabs.addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.className == "tabs__menu-link"){
    const targetContent = document.querySelector(e.target.dataset.tab);
    content.forEach(function(menu){
      if(menu == targetContent){
        menu.classList.add('tabs__content--active');
      }else {
        menu.classList.remove('tabs__content--active');
      }
    });
  }
});
