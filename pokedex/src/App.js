import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import CaughtPokemons from "./Components/CaughtPokemons";
import HomePage from "./Components/HomePage";
import PokemonPage from "./Components/PokemonPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/caught" component={CaughtPokemons} />
          <Route path="/:id" component={PokemonPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
