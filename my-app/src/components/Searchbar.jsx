import { useState } from 'react';
import PokemonDisplay from './PokemonDisplay';

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const [pokemon, setPokemon] = useState("pikachu");

  const handleInputChange = (event) => {
    setInputValue((event.target.value).toLowerCase());
  }

  function handleChoice() {
    setPokemon(inputValue);
    setInputValue("");
  }

  return (
    <div className="pokemon">
      <PokemonDisplay name={pokemon} />
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className="pokemon-button" onClick={handleChoice}>
          Find your pokemon
      </button>
    </div>
  );
}

export default Searchbar;