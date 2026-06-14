import axios from 'axios';

const BASE_URL = 'https://paw-hut.b.goit.study';

export async function getFeedbacks() {
  const response = await axios.get(
    `${BASE_URL}/api/feedbacks?limit=6&page=1`
  );

  return response.data.feedbacks;
}