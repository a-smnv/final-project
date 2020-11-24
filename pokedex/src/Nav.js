import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
const navStyle = {
  color:"white"
};

  return (
    <nav >
    <h3>PokedeX</h3>

      <ul className="nav-links">
        <Link style ={navStyle} to="/caught">
          <li>Caught Pokemons </li>
        </Link>
        <Link style ={navStyle} to="/">
          <li>Home page</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
