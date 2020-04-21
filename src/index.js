import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {Provider} from "react-redux";
import reducer from "./reducer";
import {createStore} from "redux";

const rootElement = document.getElementById("root");
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
