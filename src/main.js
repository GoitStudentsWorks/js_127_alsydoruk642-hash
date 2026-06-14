import { renderFeedbacks } from './js/modules/faq.js';
import { getFeedbacks } from './js/api/api-feetback.js';
import { createFeedback } from './js/modules/feedback-slider.js';

getFeedbacks().then(feedbacks => {
  createFeedback(feedbacks);
});