
import './App.css';
import Header from './Header';
import ContactUs from './contact';

function App() {
  return (
    <div className="App">
      <span><Header /></span>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <footer><ContactUs /></footer>
    </div>
    
  );
}

export default App;
