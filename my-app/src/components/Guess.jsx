import '../css/Guess.css';

import React, { useEffect, useState} from "react";
import axios from "axios";

import { ReactComponent as UpArrowIcon } from "../assets/arrow-up.svg";
import { ReactComponent as DownArrowIcon } from "../assets/arrow-down.svg";


const Guess = ({name, pokemonList, answer, onWinChange}) => {
  const [pokemon, setPokemon] = useState(null);
  const [result, setResult] = useState(null);
  const [win, setWin] = useState(false);
  const [sameTypes, setSameTypes] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    const fetchDataAnswer = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${answer}`
      );
      setResult(result.data);
    };
  
    fetchDataAnswer();
  }, [answer]);
  useEffect(() => {
    const fetchDataName = async () => {
        
        const randPokemon = Math.floor(Math.random() * 1010) + 1;
        const rand = name ? name : randPokemon;
        try{
          const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${rand}`
        );
        setPokemon(result.data);
        }
        catch(error){
          setError(true);
          console.log(error);
        }
    };
    fetchDataName();
  }, [name]);

  useEffect(() => {
    if (win) {
      handleWinChange(true);
    }
  }, [win]);

  function handleWinChange(win) {
    onWinChange(win);
  }

  useEffect(() => {
    if (pokemon && pokemon.id === answer){
      setWin(true);
    } else {
      setWin(false);
    }
  }, [pokemon, answer]);

  const imgDict = { 
    "normal": "https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/96px-Normal_icon_SwSh.png",
    "fire": "https://archives.bulbagarden.net/media/upload/thumb/a/ab/Fire_icon_SwSh.png/96px-Fire_icon_SwSh.png",
    "water": "https://archives.bulbagarden.net/media/upload/thumb/8/80/Water_icon_SwSh.png/96px-Water_icon_SwSh.png",
    "electric": "https://archives.bulbagarden.net/media/upload/thumb/7/7b/Electric_icon_SwSh.png/96px-Electric_icon_SwSh.png",
    "grass": "https://archives.bulbagarden.net/media/upload/thumb/a/a8/Grass_icon_SwSh.png/96px-Grass_icon_SwSh.png",
    "ice": "https://archives.bulbagarden.net/media/upload/thumb/1/15/Ice_icon_SwSh.png/96px-Ice_icon_SwSh.png",
    "fighting": "https://archives.bulbagarden.net/media/upload/thumb/3/3b/Fighting_icon_SwSh.png/96px-Fighting_icon_SwSh.png",
    "poison": "https://archives.bulbagarden.net/media/upload/thumb/8/8d/Poison_icon_SwSh.png/96px-Poison_icon_SwSh.png",
    "ground": "https://archives.bulbagarden.net/media/upload/thumb/2/27/Ground_icon_SwSh.png/96px-Ground_icon_SwSh.png",
    "flying": "https://archives.bulbagarden.net/media/upload/thumb/b/b5/Flying_icon_SwSh.png/96px-Flying_icon_SwSh.png",
    "psychic": "https://archives.bulbagarden.net/media/upload/thumb/7/73/Psychic_icon_SwSh.png/96px-Psychic_icon_SwSh.png",
    "bug": "https://archives.bulbagarden.net/media/upload/thumb/9/9c/Bug_icon_SwSh.png/96px-Bug_icon_SwSh.png",
    "rock": "https://archives.bulbagarden.net/media/upload/thumb/1/11/Rock_icon_SwSh.png/96px-Rock_icon_SwSh.png",
    "ghost": "https://archives.bulbagarden.net/media/upload/thumb/0/01/Ghost_icon_SwSh.png/96px-Ghost_icon_SwSh.png",
    "dragon": "https://archives.bulbagarden.net/media/upload/thumb/7/70/Dragon_icon_SwSh.png/96px-Dragon_icon_SwSh.png",
    "dark": "https://archives.bulbagarden.net/media/upload/thumb/d/d5/Dark_icon_SwSh.png/96px-Dark_icon_SwSh.png",
    "steel": "https://archives.bulbagarden.net/media/upload/thumb/0/09/Steel_icon_SwSh.png/96px-Steel_icon_SwSh.png",
    "fairy": "https://archives.bulbagarden.net/media/upload/thumb/c/c6/Fairy_icon_SwSh.png/96px-Fairy_icon_SwSh.png"
    };

  const getTypeImage = (type) => {
    const typeName = type.charAt(0) + type.slice(1);
    const imgName = imgDict[typeName];
    return imgName;
  };
useEffect(() => {
  const testTypes =()=> {
    if(result && pokemon) {
      if (result.types.length === pokemon.types.length) {
        if (result.types.length === 1) {
          return result.types[0].type.name === pokemon.types[0].type.name;
        } 
        else {
          return result.types[0].type.name === pokemon.types[0].type.name && result.types[1].type.name === pokemon.types[1].type.name;
        }
      }
    } 
    return false
  }
  setSameTypes(testTypes());
}, [pokemon, result]);
  


  const line = () => {
    if (pokemon && result) {
    return (
      <div className="GuessDisplay">
        <div className={pokemon.id===result.id ? "good-guess" : "bad-guess"}>
          <img className='pokemon-photo' src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        <div className={pokemon.id===result.id ? "good-guess" : "bad-guess"}>
          <p className="pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </div>
        <div className={sameTypes ? "good-guess" : "bad-guess"}>
          <ul className="pokemon-types">
            {pokemon.types.map((type) => type.type.name).map((type) => (
              <div key={type} className="pokemon-type" >
                <img
                  src={getTypeImage(type)}
                  alt={type}
                  width="60"
                  height="60"
                />
                <p> {type}</p>
              </div>  
            ))}
          </ul>
        </div>
        <div className={pokemon.id===result.id ? "good-guess" : "bad-guess"}>
        {pokemon && result && pokemon.id !== result.id &&
        <div className="arrow-container">
              {pokemon.id > result.id 
              ? (
                <DownArrowIcon className="icon"/>
              ) 
              : (
                <UpArrowIcon className="icon"/>
              )}
          </div>
      }
          <p className="pokemon-id" >#{pokemon.id}</p>
        </div>
        <div className={pokemon.stats[0].base_stat===result.stats[0].base_stat ? "good-guess" : "bad-guess"}>
        {pokemon && result && pokemon.stats[0].base_stat !== result.stats[0].base_stat &&
          <div className="arrow-container">
                {pokemon.stats[0].base_stat > result.stats[0].base_stat 
                ? (
                  <DownArrowIcon className="icon"/>
                ) 
                : (
                  <UpArrowIcon className="icon"/>
                )}
          </div>
        }
          <p className="pokemon-base-hp" >{pokemon.stats[0].base_stat}</p>
        </div>
        <div className={pokemon.stats[5].base_stat===result.stats[5].base_stat ? "good-guess" : "bad-guess"}>
        {pokemon && result && pokemon.stats[5].base_stat !== result.stats[5].base_stat &&
          <div className="arrow-container">
              {pokemon.stats[5].base_stat > result.stats[5].base_stat 
              ? (
                <DownArrowIcon className="icon"/>
              ) 
              : (
                <UpArrowIcon className="icon"/>
              )}
          </div>
        }
          <p className="pokemon-base-speed" >{pokemon.stats[5].base_stat}</p>
        </div>
        <div className={pokemon.weight===result.weight ? "good-guess" : "bad-guess"}>
        {pokemon && result && pokemon.weight !== result.weight &&
          <div className="arrow-container">
              {pokemon.weight > result.weight 
              ? (
                <DownArrowIcon className="icon"/>
              ) 
              : (
                <UpArrowIcon className="icon"/>
              )}
          </div>
        }
          <p className="pokemon-weight" >{pokemon.weight}</p>
        </div>  
        <div className={pokemon.height===result.height ? "good-guess" : "bad-guess"}>
          {pokemon && result && pokemon.height !== result.height &&
          <div className="arrow-container">
            {pokemon.height > result.height 
            ? (
              <DownArrowIcon className="icon"/>
            ) 
            : (
              <UpArrowIcon className="icon"/>
            )}
         </div>
         }
          <p className="pokemon-height" >{pokemon.height}</p>
        </div>         
      </div>
    )
  } 
  else {
    return (
      <div className="Load">
        <p>Loading..</p>
      </div>
    );
  };
  };

  return (
    <>
      {error ? null:<>{line()}</>}
    </>
  );
};
export default Guess;
