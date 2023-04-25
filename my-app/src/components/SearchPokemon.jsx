import React, { useState, useEffect } from "react";

function PokemonInput(props) {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue((event.target.value).toLowerCase());
  };

  function handleChoice() {
    if (pokemonNames.includes(inputValue)) {
        props.onPokemonChange(inputValue);
        setPokemonList([...pokemonList, inputValue]);
    } else {
      alert("This is not a valid pokemon name.");
    }
    setInputValue("");
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => response.json())
      .then((data) => 
      {
        const allPokemonNames = data.results.map((pokemon) => pokemon.name);
        const availablePokemonNames = allPokemonNames.filter(
            (name) => !pokemonList.includes(name)
          );
          setPokemonNames(availablePokemonNames);
      });
  }, [pokemonList]);

  return (
    <div>
      <input list="pokemonNames" placeholder="Pick a Pokemon" value={inputValue} onChange={handleInputChange}/>
      <datalist id="pokemonNames">
        {pokemonNames.map((name) => (
          <option key={name} value={name} />
        ))}
      </datalist>
      <button className="pokemon-button" onClick={handleChoice}>New Guess ?</button>
    </div>
  );
}

export default PokemonInput;