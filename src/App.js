import React from "react";
import "./App.css";
import Result from "./components/Result";
import MarkedInput from "./components/MarkedInput";

function App() {
  return (
    <div className="App" id="app-container">
      <h1 className="title">React Mardown Editor</h1>
      <h1 className="para">A simple md-editor in react.js</h1>
      <div className="editor-container">
        <MarkedInput />
        <Result />
      </div>
    </div>
  );
}

export default App;
