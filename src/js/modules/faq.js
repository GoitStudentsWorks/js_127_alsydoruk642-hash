export async function renderFeedbacks() {
  try {
    const data = await getFeedbacks();

    createFeedback(data.feedbacks);
  } catch (error) {
    console.log(error);
  }
}