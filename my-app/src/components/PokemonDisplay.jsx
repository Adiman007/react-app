import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/PokemonDisplay.css";

const PokemonDisplay = ({name}) => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [types, setTypes] = useState([]);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        
        const randPokemon = Math.floor(Math.random() * 1010) + 1;
        const rand = name ? name : randPokemon;
        const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${rand}`
      );
      setPokemon(result.data);
      setPokemonName(result.data.name);
      setTypes(result.data.types.map((type) => type.type.name));
    };
    fetchData();
  }, [name]);

  const handleMouseOver = () => {
    setBool(true);
  };

  const handleMouseOut = () => {
    setBool(false);
  };

  const getGradientColors = () => {
    if (!types.length) {
      return "";
    }
    if (types.length === 1) {
      return `var(--${types[0]})`;
    }
    return `linear-gradient(45deg, var(--${types[0]}) 0%, var(--${types[1]}) 100%)`;
  };

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

  const imgDisplay = () => {
    if (bool && pokemon.sprites.front_shiny){
      return <img
        className="pokemon-image"
        src={pokemon.sprites.front_shiny}
        alt="pokemon"
      />
    } else {
      return <img
        className="pokemon-image"
        src={pokemon.sprites.front_default}
        alt="pokemon"
      />
    }
  }
  const getDisplayContent = () => {
  return (
    <div className="PokemonDisplay" style={{ background: getGradientColors() }}>
      {pokemon && (
        <>
          <h2 className="pokemon-name">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
          {imgDisplay()}
          
          <ul className="pokemon-types">
            {types.map((type) => (
              <div key={type} className="pokemon-type">
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
        </>
      )}
    </div>
  );
};
return (
  <div
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
  >
    {getDisplayContent()}
  </div>
);
};

export default PokemonDisplay;