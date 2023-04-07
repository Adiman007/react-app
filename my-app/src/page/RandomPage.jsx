import React, { useState } from "react";
import PokemonDisplay from "../components/PokemonDisplay";
import "../css/RandomPage.css";

export default function RandomPage()  {
  const randomPokemonId = Math.floor(Math.random() * 1000) + 1
  const [pokemon, setPokemon] = useState(randomPokemonId);

  function handleRandomPokemonClick() {
    setPokemon(Math.floor(Math.random() * 1000) + 1);
  }

    return (
      <div className="pokemon">
        <PokemonDisplay name={pokemon} />
        <button className="pokemon-button" onClick={handleRandomPokemonClick}>
          Hacth a random pokemon
        </button>
      </div>
    );
  }