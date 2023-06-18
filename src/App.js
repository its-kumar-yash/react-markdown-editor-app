import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import MarkedInput from "./components/MarkedInput";
import EditorContext from "./editorContext";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  //created global state for markdown text
  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <div className="App" id="app-container">
        <h1 className="title">React-Mark-Pro</h1>
        <h1 className="para">A simple markdown-editor built using react.js</h1>
        <div className="editor-container">
          <MarkedInput />
          <Result />
        </div>
      </div>
    </EditorContext.Provider>
  );
}

export default App;
