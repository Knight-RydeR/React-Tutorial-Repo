// import logo from './logo.svg';
import About from './components/About';
import FirstDisplay from './components/FirstDisplay';
import Interests from './components/Interests';
import IconFooter from './components/IconFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main><FirstDisplay />
        <About />
        <Interests />
        <IconFooter /></main>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
