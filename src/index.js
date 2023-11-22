import './styles/style.scss';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  mousewheel: true,
  keyboard: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  }
});

// открыть-закрыть popupMenu in Header
const buttonOpenBurger = document.querySelector('.burger__open');
const popupBurgerMenu = document.querySelector('.popup_left');

if (buttonOpenBurger) buttonOpenBurger.addEventListener('click', function() {
  popupBurgerMenu.classList.toggle('popup_active');
  buttonOpenBurger.classList.toggle('burger__open_rotated');
})

// карусель с бестцелерами
// let i = 0;
// const widthEl = 230 + 30;
// const arrayElements = document.querySelectorAll('.bestsellers__el');
// const unorderaryList = document.querySelector('.bestsellers__galary');
// let position = 0;

// const buttonPrevEl = document.getElementById('bestsellers-button-prev');
// const buttonNextEl = document.getElementById('bestsellers-button-next');

// function checkPosition(i) {
//   let widthContainer = document.querySelector('.galary-container').offsetWidth;
//   let k = Math.floor(widthContainer/widthEl)

//   if (i === 0 && !buttonPrevEl.hasAttribute('disabled')) {
//     buttonPrevEl.setAttribute('disabled', true)
//   } else if (i !== 0 && buttonPrevEl.hasAttribute('disabled')) {
//     buttonPrevEl.removeAttribute('disabled')
//   } 
//   if (i === arrayElements.length - k && !buttonNextEl.hasAttribute('disabled')) {
//     buttonNextEl.setAttribute('disabled', true)
//   } else if (i !== arrayElements.length - k && buttonNextEl.hasAttribute('disabled')) {
//     buttonNextEl.removeAttribute('disabled')
//   } 
// }

// if (buttonPrevEl) buttonPrevEl.addEventListener('click', function() {
//   i--;
//   if (i < 0) {
//     i = 0
//     checkPosition(i)
//   } else {
//     position = widthEl * i;
//     position = Math.min( -position, 0);
//     unorderaryList.style.marginLeft = position + 'px';
//     checkPosition(i)
//   }
// });

// if (buttonNextEl) buttonNextEl.addEventListener('click', function() {
//   i++;
//   let widthContainer = document.querySelector('.galary-container').offsetWidth;
//   let k = Math.floor(widthContainer/widthEl)
//   if (i > arrayElements.length-k) {
//     i = arrayElements.length-k
//     checkPosition(i)
//   } else {
//     position = widthEl * i;
//     position = Math.min(position, arrayElements.length * widthEl - widthContainer);
//     unorderaryList.style.marginLeft = '-' + position + 'px';
//     checkPosition(i)
//   }
// });

