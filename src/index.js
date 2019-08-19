import React from "react";
import ReactDOM from "react-dom";
import Routes from "./router";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer, { initialState } from "./reducers/index";

import "antd/dist/antd.css";
import "./styles.css";

const rootElement = document.getElementById("index");

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);
console.log(store.getState());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, rootElement);
