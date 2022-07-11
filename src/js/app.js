import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

new Swiper('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  pagination: {
    el: ".reviews-slider__navigation",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      autoHeight: false
    }
  }
});


const faq = document.querySelector('.faq');

faq.addEventListener('click', (e) => {
  let textElementHeight = e.target.nextElementSibling.scrollHeight;
  let element = e.target;
  if(element.className === 'faq__title') {
    element.parentElement.classList.toggle('faq__item-active');
    
    (element.parentElement.classList.contains('faq__item-active')) ?
      element.nextElementSibling.style.height = textElementHeight + 'px' :
      element.nextElementSibling.style.height = '0px';
  }  
 
});