import axios from 'axios';

const BASE_URL = 'https://paw-hut.b.goit.study';
const CATEGORIES = '/api/categories';
const ANIMALS = '/api/animals';

export async function getCategories() {
  const res = await axios.get(BASE_URL + CATEGORIES);
  return res.data;
}

export async function getCategory(id, numPage, count) {
  const params = {
    page: numPage,
    limit: count,
  };
  if (id !== 'all') params.categoryId = String(id);
  const res = await axios.get(BASE_URL + ANIMALS, { params });
  return res.data;
}
