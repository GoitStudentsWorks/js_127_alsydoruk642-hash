import { initSmoothScroll, initHeroAnimation } from './js/hero-scroll.js';
import './js/modules/about-slider';
import './js/utils/constans.js';
import './js/modals/order-modal.js';
import { renderCategories, startPetList } from './js/modules/pets-list.js';
import { renderFeedbacks } from './js/utils/feedback-render.js';
import { openModal, closeModal } from './js/modals/modal-cl-op.js';

initSmoothScroll();
initHeroAnimation();
renderCategories();
startPetList('all');
renderFeedbacks();
