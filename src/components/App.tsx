import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input, Button } from "semantic-ui-react";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sign in</p>
        <section>
          <Input
            type="mail"
            className="App-input"
            placeholder="Email"
            autoComplete="off"
          />
          <Input
            type="password"
            className="App-input"
            placeholder="Password"
            autoComplete="off"
          />
        </section>
        <Button className="App-button" primary>
          Sign in
        </Button>
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
