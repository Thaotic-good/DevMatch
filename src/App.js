import logo from './logo.svg';
import './App.css';
import DevChoice from "./DevChoice";
import TechnologiesList from "./technologiesList";
import {ButtonsChoiceProvider} from "./ButtonsChoiceContext";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonsChoiceProvider>
        <DevChoice/>
        <TechnologiesList/>
        </ButtonsChoiceProvider>
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
      </header>
    </div>
  );
}

export default App;
