import React, { useState } from "react";
import "./App.css";
import EditorContext from "./editorContext";
import MarkdownEditor from "./pages/MarkdownEditor/MarkdownEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  //created global state for markdown text
  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <Router>
        <Routes>
            <Route path="/" element={<MarkdownEditor />} />
            <Route path="/contactus" />
        </Routes>
      </Router>
    </EditorContext.Provider>
  );
}

export default App;
