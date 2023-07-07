import React, { useContext } from "react";
import "./Result.css";
import ReactMarkdown from "react-markdown";
import editorContext from "../../editorContext";

const Result = () => {
  //outputting the markdown text
  const { markdownText } = useContext(editorContext);

  return (
    <div className="container">
      <div className="title">Output</div>
      <div className="result-area">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Result;
