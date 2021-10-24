import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";

ReactDOM.render(
  <ThemeProvider theme={dark}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
