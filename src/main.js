import { initSmoothScroll, initHeroAnimation } from './js/hero-scroll.js';
import './js/modules/about-slider';
import './js/utils/constans.js';
import { renderCategories, startPetList } from './js/modules/pets-list.js';
import { renderFeedbacks } from './js/utils/feedback-render.js';
import { getFeedbacks } from './js/api/api-feetback.js';
import { createFeedback } from './js/modules/feedback-slider.js';
import { openModal, closeModal } from './js/modals/modal-cl-op.js';

import { openModal, closeModal } from './js/modals/modal-cl-op';
initSmoothScroll();
initHeroAnimation();
renderCategories();
startPetList('all');
renderFeedbacks();
