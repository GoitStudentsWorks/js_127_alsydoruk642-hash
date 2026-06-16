const BASE_URL = 'https://paw-hut.b.goit.study/api';

export async function createOrder(orderData) {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || `HTTP error ${response.status}`);
  }

  return data;
}
