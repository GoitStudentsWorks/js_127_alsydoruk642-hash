import { getFeedbacks } from './js/api/api-feetback';
import { createFeedback } from './js/modules/feedback-slider';

async function renderFeedbacks() {
  try {
    const feedbacks = await getFeedbacks();

    createFeedback(feedbacks);
  } catch (error) {
    console.log(error);
  }
}

renderFeedbacks();