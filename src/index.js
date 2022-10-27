import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { TerminalContextProvider } from "react-terminal";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </StrictMode>,
  rootElement
);
