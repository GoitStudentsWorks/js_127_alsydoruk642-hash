import './js/modules/about-slider';
import { renderCategories, startPetList } from './js/modules/pets-list.js';
import { renderFeedbacks } from './js/utils/feedback-render.js';
import { getFeedbacks } from './js/api/api-feetback.js';
import { createFeedback } from './js/modules/feedback-slider.js';
import { openModal, closeModal } from './js/modals/modal-cl-op.js';

renderCategories();
startPetList('all');
renderFeedbacks();
