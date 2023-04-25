import React, { useState, useEffect } from "react";
import Guess from "../components/Guess";
import seedrandom from 'seedrandom';
import "../css/pokedle.css";
import PokemonInput from "../components/SearchPokemon";

export default function Pokedle()  {
    const [daily,setDaily] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [hasWon, setHasWon] = useState(false);

    useEffect(() => {
      const dailyPokemon = () => {

        // Get the current date as a string 
        const now = new Date().toISOString().slice(0, 10).replace(/[-T]/g, '');
        // Create a new random number generator using the seed based on the current date
        const random = seedrandom(now);
        // Generate a random integer between 1 and 151
        const randomInt = Math.floor(random() * 151) + 1;
        console.log(randomInt);
        return randomInt;
      }
  
      setDaily(dailyPokemon());
    }, []);
  const handleChoice = (newPokemon) => {
    const newPokemonList = [...pokemonList,newPokemon];
    setPokemonList(newPokemonList);
  }
  function handleWinChange(hasWon) {
    setHasWon(hasWon);
  }
  const WinningScreen = ({ hasWon }) => {
    if (hasWon) {
      return (
        <div className="winningScreen">
          <h1>YOU WON IN {pokemonList.length} TRIES !</h1>
          <h1>GOOD JOB !</h1>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <>
    <div className="Title">
      <h1>Guess this generation 1 pokemon !</h1>
    </div>
    <div className="categories">
      <p>Image</p>
      <p>Name</p>
      <p>Types</p>
      <p>ID</p>
      <p>Base HP</p>
      <p>Base Speed</p>
      <p>Weight</p>
      <p>Height</p>
    </div>
      <div className="tableGuess">
      <table>
      <tbody>
            {pokemonList.map((pokemon, index) => (
              <tr key={index}>
                <td>
                  <Guess name={pokemon} pokemonList={pokemonList} answer={daily} onWinChange={handleWinChange} />
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
      <WinningScreen hasWon={hasWon} />
      {!hasWon ?(
      <div className="pokemon">
         <PokemonInput onPokemonChange={handleChoice} pokemonList={pokemonList}/>
      </div>
      ) : null}
    </>
    
  );
};
