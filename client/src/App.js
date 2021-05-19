import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// Main pages

import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
