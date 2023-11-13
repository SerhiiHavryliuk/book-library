import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import data from '../data/books.json';

export const showNotify = (message) => {
  toast(message);
};

export const createNewBook = (title, author) => {
  return {
    id: uuidv4(),
    title,
    author,
    isFavorite: false
  };
};

export const createRandomBook = () => {
  const bookNumber = Math.floor(Math.random() * data.length);
  return createNewBook(data[bookNumber].title, data[bookNumber].author);
};
