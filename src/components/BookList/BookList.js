import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectTitleFilter
} from '../../app/slices/filterSlice';
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { fetchBooks, deleteBookFromDB, updateBookFromDB } from '../../app/slices/booksSlice';
import style from './BookList.module.scss';

function BookList() {
  const allBooks = useSelector((state) => state.books.booksList);
  const filterTitle = useSelector(selectTitleFilter);
  const filterAuthor = useSelector(selectAuthorFilter);
  const filterOnlyFavorite = useSelector(selectOnlyFavoriteFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const filteredBooks = () => {
    if (filterTitle || filterAuthor || filterOnlyFavorite) {
      return allBooks.filter((item) => {
        const matchesTitle = item.title.toLowerCase().includes(filterTitle.toLowerCase());
        const matchesAuthor = item.author.toLowerCase().includes(filterAuthor.toLowerCase());
        const matchesFavorites = filterOnlyFavorite ? item.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesFavorites;
      });
    }
    return allBooks;
  };

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    let regex = new RegExp(`(${filter})`, 'gi');

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <mark key={i} className="highlight">
            {substring}
          </mark>
        );
      }
      return substring;
    });
  };
  const handleDeleteBook = (id) => {
    dispatch(deleteBookFromDB(id));
  };

  const handleToggleFavoriteBook = (id) => {
    // Перший варіант
    // dispatch(toggleFavorite(id));
    dispatch(updateBookFromDB(id));
  };

  return (
    <div className={style.bookList}>
      <h2> Book List </h2>
      {allBooks.length ? (
        <ul className={style.list}>
          {filteredBooks().map((item, index) => {
            return (
              <li key={item.id} className={style.item}>
                <div className={style.listDescription}>
                  {++index + '.'} {highlightMatch(item.title, filterTitle)}{' '}
                  <b> {highlightMatch(item.author, filterAuthor)}</b>
                </div>
                <div className={style.itemButtons}>
                  <div className={style.favorite} onClick={() => handleToggleFavoriteBook(item.id)}>
                    {item.isFavorite ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
                  </div>
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
