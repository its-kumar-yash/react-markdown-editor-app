import React from "react";

const defaultContext = {
  markdownText: "",
  setMarkDown: () => {},
};

export default React.createContext(defaultContext);
