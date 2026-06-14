// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const aboutUsSwiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next.about-us-button-next',
    prevEl: '.swiper-button-prev.about-us-button-prev',
  },

  pagination: {
    el: '.about-us-swiper-pagination',
    clickable: true,
    dynamicBullets: window.innerWidth < 768,
  },
});

const mediaQuery = window.matchMedia('(max-width: 767px)'); // для мобільних пристроїв

function updatePagination(e) {
  console.log('matches:', e.matches);

  aboutUsSwiper.params.pagination.dynamicBullets = e.matches;

  aboutUsSwiper.pagination.destroy();
  aboutUsSwiper.pagination.init();
  aboutUsSwiper.pagination.render();
  aboutUsSwiper.pagination.update();

  console.log(aboutUsSwiper.params.pagination.dynamicBullets);
}

updatePagination(mediaQuery);
mediaQuery.addEventListener('change', updatePagination);
