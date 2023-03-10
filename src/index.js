import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import "./index.css";
import * as reducers from "./reducers";
import * as services from "./services";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunk.withExtraArgument(services))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
