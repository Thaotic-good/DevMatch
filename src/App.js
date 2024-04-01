import logo from './logo.svg';
import './App.css';
import {ButtonsChoiceProvider} from "./ButtonsChoiceContext";
import {UsersStackContextProvider} from "./UsersStackContext";
import React from "react";
import JobListingCard from "./JobListingCard";

/*TASKS:
* 1. */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersStackContextProvider>
        <ButtonsChoiceProvider>
        <PercentageMatchContext.Provider>
          <JobListingCard/>
        </PercentageMatchContext.Provider>
        </ButtonsChoiceProvider>
        </UsersStackContextProvider>

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
