// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const gallery = document.querySelector('.success-stories-list')

export function createFeedback(feedbacks) {
  const markup = feedbacks
    .map(
      feedback => `
        <li class="swiper-slide success-stories-list-item">
          <div class="success-stories-rate">
            ${feedback.rate}
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
  
  const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
    },

    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    }

  });
    
    

}
