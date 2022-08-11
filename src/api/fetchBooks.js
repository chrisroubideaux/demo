import axios from 'axios';

const URL =
  'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=A8U74mXf0N8lMVrtz0TdUQkG4iHhjE9o';

export const fetchBooks = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
    },
  });

  return data;
};
