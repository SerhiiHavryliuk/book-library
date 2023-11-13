import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNotify, createNewBook, createRandomBook } from '../../utils/functions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addBook } from '../../app/slices/booksSlice';
import style from './BookForm.module.scss';

function BookForm() {
  const books = useSelector((state) => state.books.booksList);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handlerAddBook = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createNewBook(title, author)));
      showNotify('Success add new book');
      clearForm();
    }

    console.log(books);
  };

  const handlerAddRandomBook = () => {
    dispatch(addBook(createRandomBook(title, author)));
    showNotify('Success add new book');
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
  };

  return (
    <div className={style.bookForm}>
      <h2> Add new book </h2>
      <form onSubmit={handlerAddBook}>
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <br />
        <div className={style.buttons}>
          <Form.Control
            type="submit"
            value="add book"
            variant="primary"
            className={style.btnAddBook}
          />
          <Button
            variant="primary"
            className={style.btnAddRandomBook}
            onClick={handlerAddRandomBook}>
            Add random book
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
