import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import HomePage from './HomePage';

function PokemonPage() {
const [poke, setPoke] = useState([]);

useEffect(() => {
  getPoke();
}, []);

  const uri = window.location.pathname.split("/")[1];

  const getPoke = async () => {
    const data = await fetch("http://localhost:3004/pokemons");
    const response = await data.json();
    setPoke(response);

  };

  return (
    <div>
      <img src={"/pokemons/" + uri + ".png"}/>
      {poke.filter(po => po.id == uri).map(po =>
        <div>
          <h1>name: {po.name}</h1>
          <h2>id: {po.id}</h2>
    {po.catchedAt ?  <h1> You cought me at:{po.catchedAt}</h1> : <h1>Try to catch me!</h1>}
      </div>)}
    </div>
  );
}

export default PokemonPage;
