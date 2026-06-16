// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Raty from 'raty-js';
import starOn from '../../img/webp/stars/vector_1.png';
import starOff from '../../img/webp/stars/vector_0.png';
import starHalf from '../../img/webp/stars/vector_05.png';

const gallery = document.querySelector('.success-stories-list');

export function createFeedback(feedbacks) {
  const markup = feedbacks
    .map(
      feedback => `
        <li class="swiper-slide success-stories-list-item">
          <div class="success-stories-rate"
           data-rate="${feedback.rate}">
          </div>

          <p class="success-stories-text">
            ${feedback.description}
          </p>

          <h3 class="success-stories-author">
            ${feedback.author}
          </h3>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  document.querySelectorAll('.success-stories-rate').forEach(el => {
    const raty = new Raty(el, {
      score: Number(el.dataset.rate),
      readOnly: true,
      starOn,
      starOff,
      starHalf,
    });
    raty.init();
  });

  const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: window.innerWidth > 768,
    },

    slidesPerView: 1,

    breakpoints: {
      768: {
        dynamicBullets: true,
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
  window.addEventListener('resize', () => {
    swiper.update();
    swiper.params.pagination.dynamicBullets = window.innerWidth > 768;

    swiper.pagination.destroy();
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  });
}

function updatePagination(e) {
  swiper.params.pagination.dynamicBullets = e.matches;

  swiper.pagination.destroy();
  swiper.pagination.init();
  swiper.pagination.render();
  swiper.pagination.update();
}
