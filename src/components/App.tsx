import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sign in to frontend-validation</p>
        <a
          className="App-link"
          href="https://github.com/kato1628/frontend-validation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
};

export default App;
