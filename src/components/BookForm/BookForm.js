import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBook, createRandomBook } from '../../utils/functions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addBookFromDB, selectIsLoadingViaAPI } from '../../app/slices/booksSlice';
import style from './BookForm.module.scss';
import { toast } from 'react-toastify';

function BookForm() {
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handlerAddBook = (e) => {
    e.preventDefault();

    if (title && author) {
      const newBook = createNewBook(title, author);
      dispatch(addBookFromDB(newBook));
      clearForm();
    } else {
      toast.error('ERROR! Please fill in the fields');
    }
  };

  const handlerAddRandomBook = () => {
    const newBook = createRandomBook();
    dispatch(addBookFromDB(newBook));
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
            value={isLoadingViaAPI ? 'is loading...' : 'add button'}
            variant="primary"
            className={style.btnAddBook}
            disabled={isLoadingViaAPI}
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
