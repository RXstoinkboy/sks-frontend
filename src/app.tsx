import React, { useState } from "react";
import logo from "./logo.svg";
import "./app.css";
import { useMount } from "react-use";
import { main } from "./api/main";

const App = () => {
  const [text, setText] = useState("");

  useMount(async () => {
    const { data } = await main.get("");
    setText(data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{text}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
};

export default App;
