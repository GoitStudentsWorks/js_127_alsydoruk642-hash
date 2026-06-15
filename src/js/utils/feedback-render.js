import { getFeedbacks } from '../api/api-feetback.js';
import { createFeedback } from '../modules/feedback-slider.js';

export async function renderFeedbacks() {
  try {
    const feedbacks = await getFeedbacks();
    createFeedback(feedbacks);
  } catch (error) {
    console.log(error);
  }
}
