
import './App.css';

function App() {
  const app="https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg"
  return (
    <div className="App">
      <header className="App-header">
        <img src={app} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
