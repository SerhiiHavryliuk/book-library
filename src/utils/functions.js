import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import data from '../data/books.json';

const bookTemplate = {
  id: uuidv4(),
  title: '',
  author: '',
  isFavorite: false
};

export const showNotify = (message) => {
  toast(message);
};

export const createNewBook = (title, author) => {
  return {
    ...bookTemplate,
    title,
    author
  };
};

export const createRandomBook = () => {
  const bookNumber = Math.floor(Math.random() * data.length);
  return {
    ...bookTemplate,
    title: data[bookNumber].title,
    author: data[bookNumber].author
  };
};
