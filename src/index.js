import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import TodoContextProvider from "./context/TodoContext";

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementById("root")
);
