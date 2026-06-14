import { getFeedbacks } from './js/api/api-feetback';
import { createFeedback } from './js/modules/feedback-slider';
import './js/modules/about-slider';
import { renderCategories, startPetList } from './js/modules/pets-list';

import { openModal, closeModal } from './js/modals/modal-cl-op';

renderCategories();
startPetList('all');


async function renderFeedbacks() {
  try {
    const feedbacks = await getFeedbacks();

    createFeedback(feedbacks);
  } catch (error) {
    console.log(error);
  }
}

renderFeedbacks();
