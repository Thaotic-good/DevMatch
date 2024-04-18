import './App.css';
import {ButtonsChoiceProvider} from "./ButtonsChoiceContext";
import {UsersStackContextProvider} from "./UsersStackContext";
import {PercentageMatchProvider} from "./PercentageMatchContext";
import React from "react";
import JobListingCard from "./JobListingCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersStackContextProvider>
        <ButtonsChoiceProvider>
        <PercentageMatchProvider>
          <JobListingCard/>
        </PercentageMatchProvider>
        </ButtonsChoiceProvider>
        </UsersStackContextProvider>
      </header>
    </div>
  );
}

export default App;
