import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// Main pages

import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
