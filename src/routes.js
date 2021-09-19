import React from "react";
import "./index.scss";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  NavList,
  Home,
  Cards,
  Invoice,
  Chart,
  Transaction,
  Accounting,
  Filter,
} from "./Component";

export default function Routes() {
  return (
    <div className="App">
      <Router>
        <NavList />
        <div className="right-container">
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/cards/:aId" component={() => <Cards />} />
            <Route exact path="/invoice/:aId" component={() => <Invoice />} />
            <Route exact path="/chart/:aId" component={() => <Chart />} />
            <Route
              exact
              path="/transaction/:aId"
              component={() => <Transaction />}
            />
            <Route
              exact
              path="/accounting/:aId"
              component={() => <Accounting />}
            />
            <Route exact path="/filter/:aId" component={() => <Filter />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
