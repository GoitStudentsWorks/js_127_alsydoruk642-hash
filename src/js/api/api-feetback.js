import axios from 'axios';

const BASE_URL = 'https://paw-hut.b.goit.study';

export async function getFeedbacks(page = 1, limit = 6) {
  const response = await axios.get(
    `${BASE_URL}/api/feedbacks?limit=${limit}&page=${page}`
  );

  return response.data.feedbacks;
}