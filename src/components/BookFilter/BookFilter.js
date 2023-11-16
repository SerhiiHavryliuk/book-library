import { useState } from 'react';
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import style from './BookFilter.module.scss';
import { useDispatch } from 'react-redux';
import {
  filterByAuthor,
  filterByTitle,
  filterOnlyFavorite,
  resetAllFilters
} from '../../app/slices/filterSlice';

function BookFilter() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleFilterTitle = (title) => {
    setTitle(title);
    dispatch(filterByTitle(title));
  };
  const handleFilterAuthor = (author) => {
    setAuthor(author);
    dispatch(filterByAuthor(author));
  };
  const handleFilterToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    dispatch(filterOnlyFavorite(!isFavorite));
  };
  const handleFilterReset = () => {
    resetFilters();
    dispatch(resetAllFilters());
  };

  const resetFilters = () => {
    setTitle('');
    setAuthor('');
    setIsFavorite(false);
    dispatch(filterOnlyFavorite(false));
  };

  return (
    <div className={style.bookFilter}>
      <h2> Book Filter </h2>
      <div className={style.filters}>
        <Form.Control
          className={style.titleInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => handleFilterTitle(event.target.value)}
        />
        <Form.Control
          className={style.authorInput}
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => handleFilterAuthor(event.target.value)}
        />
        <div className={style.favorite} onClick={() => handleFilterToggleFavorite()}>
          {isFavorite ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
        </div>
        <Button
          variant="outline-primary"
          className={style.btnResetFilters}
          onClick={handleFilterReset}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
}

export default BookFilter;
