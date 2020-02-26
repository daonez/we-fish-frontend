import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />

        </Switch>
      </Router>
    );
  }
}

export default Routes;
