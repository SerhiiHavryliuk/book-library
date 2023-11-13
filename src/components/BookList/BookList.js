import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../app/slices/booksSlice';
import { showNotify } from '../../utils/functions';
import style from './BookList.module.scss';

function BookList() {
  const allBooks = useSelector((state) => state.books.booksList);
  // Second variant use state
  //const allBooks = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
    showNotify('Remove book');
  };

  const handleToggleFavoriteBook = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={style.bookList}>
      <h2> Book List </h2>
      {allBooks.length ? (
        <ul className={style.list}>
          {allBooks.map((item, index) => {
            return (
              <li key={index} className={style.item}>
                <div className={style.listDescription}>
                  {item.title} <b> {item.author}</b>
                </div>
                <div onClick={() => handleToggleFavoriteBook(item.id)}>
                  {item.isFavorite ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className={style.buttonDelete}
                    onClick={() => handleDeleteBook(item.id)}>
                    Delete
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p> List is empty!</p>
      )}
    </div>
  );
}

export default BookList;
