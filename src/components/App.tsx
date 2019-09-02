import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input, Button } from "semantic-ui-react";
import {
  AppPropsMappedFromState,
  AppPropsMappedFromDispatch
} from "../containers/AppContainer";

type AppProps = AppPropsMappedFromState & AppPropsMappedFromDispatch;

const App: React.FC<AppProps> = ({ errors, onChangeEmail }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sign in</p>
        <section className="App-section">
          <Input
            type="email"
            className="App-input"
            placeholder="Email"
            autoComplete="off"
            onChange={onChangeEmail}
          />
          <p className="App-p-error-message">{errors.email}</p>
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
