import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const onClickUsers = () => {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Button variant="primary" onClick={onClickUsers}>Get users</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" // prettier-ignore
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
