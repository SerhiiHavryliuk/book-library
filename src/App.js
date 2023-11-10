import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <header className="App-header">
          <h2>My id is: {uuidv4()}</h2>
        <Counter />
        <Button variant="primary" onClick={onClickUsers}>Get users</Button>
          <Button variant="primary" onClick={notify}>Notify!</Button>
          <ToastContainer />
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
