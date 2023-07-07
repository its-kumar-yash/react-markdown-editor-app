import React, { useContext } from "react";
import "./MarkedInput.css";
import editorContext from "../../editorContext";

const MarkedInput = () => {
  //globally acessing/updating markdown text
  const { setMarkdownText } = useContext(editorContext);
  //handling user input
  const onInputChangeHander = (e) => {
    const enteredText = e.target.value;
    setMarkdownText(enteredText);
  };

  return (
    <div className="container">
      <div className="title">Input</div>
      <textarea
        className="textarea-container"
        placeholder="Write Input Here..."
        onChange={onInputChangeHander}
      ></textarea>
    </div>
  );
};

export default MarkedInput;
