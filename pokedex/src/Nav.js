import React from "react";
import {Link} from 'react-router-dom';
import "./App.css";

function Nav() {
const navStyle = {
  fontSize:"30px",
  fontWeight: "bold",
  color:"white"
};

  return (
    <nav >
    <img className="logo"
      src={"/logo.png"}
      alt="Pokedex"

    />

      <ul className="nav-links">
        <Link className ="nav-link active" style ={navStyle} to="/caught">
          <li className = "liStyle">Caught Pokemons </li>
        </Link>
        <Link className ="nav-link active" id="home-tab" style ={navStyle} to="/">
          <li className = "liStyle">Home page</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
