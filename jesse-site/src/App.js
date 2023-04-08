
import './App.css';
import Header from './Header';
import ContactUs from './contact';
import Main from './Body';
import Photos from "./card";

function App() {
  return (
    <div className="App">
      <div className="header">
        <span><Header /></span>
        </div>
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
      <div className="body">
        < Main />
      </div>
      < Photos />
      
      <footer><ContactUs /></footer>
    </div>
    
  );
}

export default App;
