import { useSelector } from 'react-redux';
import style from './BookList.module.scss';

function BookList() {
  const books = useSelector((state) => state.books.booksList);

  return (
    <div className={style.bookList}>
      <h2> Book List </h2>
      <ul>
        {books.map((item, index) => {
          return (
            <li key={index}>
              {item.title} <b> {item.author}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;
