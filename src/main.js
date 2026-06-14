import { initSmoothScroll, initHeroAnimation } from './js/hero-scroll.js';
import './js/modules/about-slider';
import { renderCategories, startPetList } from './js/modules/pets-list';

import { openModal, closeModal } from './js/modals/modal-cl-op';
initSmoothScroll();
initHeroAnimation();
renderCategories();
startPetList('all');
