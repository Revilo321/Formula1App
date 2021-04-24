import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import reducers from "./reducers";
import Header from "./components/Header";
import DriverList from "./components/DriverList";
import RaceList from "./components/RaceList";
import ResultList from "./components/ResultList";
import Standings from "./components/Standings";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Route path="/" exact component={DriverList} />
      <Route path="/Races" component={RaceList} />
      <Route path="/RaceResults" component={ResultList} />
      <Route path="/Standings" component={Standings} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
