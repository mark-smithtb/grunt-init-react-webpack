import React, { Component } from "react";
import { HashaRouter as Router, Route } from "react-router-dom";
import { Home, Screen, SignIn, SignInContainer } from "./components";
import { PrivateRoute } from "./routing/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div />
      </Router>
    );
  }
}

export default App;
