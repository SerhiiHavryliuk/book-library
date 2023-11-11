import style from './BookList.module.scss';
import data from '../../data/books.json';

function BookList() {
  return (
    <div className={style.bookList}>
      <h2> Book List </h2>
      <ul>
        {data.map((item, index) => {
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
