import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function CaughtPokemons() {
  const [coPokes, setCoPokes] = useState([]);

  useEffect(() => {
    getCoPokes();
  }, []);

  const getCoPokes = async () => {
    const data = await fetch("http://localhost:3004/pokemons");

    const response = await data.json();
    setCoPokes(response);
  };
  return (
    <div className="d-flex flex-wrap w-100 justify-content-center">
      {coPokes
        .filter((e) => e.catchedAt !== undefined)
        .map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              catchedAt={pokemon.catchedAt}
            />{" "}
          </div>
        ))}
    </div>
  );
}

export default CaughtPokemons;
