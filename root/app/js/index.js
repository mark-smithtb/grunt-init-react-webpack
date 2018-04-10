// Modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// StyleSheets
import "bootstrap";

// Store
import configureStore from "./store";
const store = configureStore();

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
