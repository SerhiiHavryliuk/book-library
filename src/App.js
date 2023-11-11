import BookList from './components/BookList/BookList';
import BookHeader from './components/BookHeader/BookHeader';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import BookFilter from './components/BookFilter/BookFilter';
import BookForm from './components/BookForm/BookForm';

function App() {
  return (
    <div className="App">
      <div className="header">
        <BookHeader />
      </div>
      <div className="form">
        <BookForm />
      </div>
      <div className="filter">
        <BookFilter />
      </div>
      <div className="list">
        <BookList />
      </div>
    </div>
  );
}

export default App;
