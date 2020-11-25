import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import PokemonPage from "./PokemonPage";

function HomePage() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(40);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const data = await fetch("http://localhost:3004/pokemons");

    const response = await data.json();
    setCards(response);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="d-flex flex-wrap w-100 justify-content-center">
        {currentCards.map((i) => (
          <div key={i.id} className="p-2 bd-highlight">
            <PokemonCard
             id={i.id}
             name={i.name}
             catchedAt={i.catchedAt} />
          </div>
        ))}
      </div>

      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
