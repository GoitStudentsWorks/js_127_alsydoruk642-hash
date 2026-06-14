export async function renderFeedbacks() {
  try {
    const feedbacks = await getFeedbacks();

    createFeedback(feedbacks);
  } catch (error) {
    console.log(error);
  }
}