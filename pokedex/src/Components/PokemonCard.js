import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import HomePage from "./HomePage";
import axios from "axios";
import moment from "moment";

const catchIt = async (id, name) => {
  const url = "http://localhost:3004/pokemons/" + id;
  const data = {
    id,
    name,
    catchedAt: moment().format("DD.MM.YYYY HH:mm:ss"),
  };

  axios.patch(url, data).then((data) => data);
};

export default function PokemonCard({ id, name, catchedAt }) {
  const match = useRouteMatch("/caught");

  return (
    <div className="cards">
      <Link to={`/${id}`}>
        <img
          src={"/pokemons/" + id + ".png"}
          alt="I don't have an image!"
          width="300"
          height="320"
        />
      </Link>
      <div className="card-body">
        <h2>{name}</h2>
        {catchedAt && match ? (
          <h3> You cought me: {catchedAt} </h3>
        ) : (
          <button
            className="btn"
            onClick={() => catchIt(id, name, catchedAt)}
            disabled={catchedAt}
          >
            Catch me
          </button>
        )}
      </div>
    </div>
  );
}
