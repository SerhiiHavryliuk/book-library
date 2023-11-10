import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Button variant="primary">Primary</Button>
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
