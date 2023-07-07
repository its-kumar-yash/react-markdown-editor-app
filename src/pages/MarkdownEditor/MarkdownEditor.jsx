import React from "react";
import MarkedInput from "../../components/MarkedInput/MarkedInput";
import Result from "../../components/Result/Result";
import styles from "./MarkdownEditor.module.css";
import Footer from "../../components/Footer/Footer";

const MarkdownEditor = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>React-Mark-Pro</h1>
          <h1 className={styles.para}>
            🌟 A markdown-editor built using React.js 🌟
          </h1>
        </div>
        <div className={styles.editorContainer}>
          <MarkedInput />
          <Result />
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
