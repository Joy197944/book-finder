import axios from 'axios';

const BASE_URL = 'https://openlibrary.org/search.json?q=';

export const searchBooks = async (query) => {
  const response = await axios.get(`${BASE_URL}${query}`);
  return response.data.docs.slice(0, 10); // Return top 10 results
};