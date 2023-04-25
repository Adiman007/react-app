import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

import { ReactComponent as HomeIcon } from "../assets/house.svg";
import { ReactComponent as RandomIcon } from "../assets/egg.svg";
import { ReactComponent as TeamIcon } from "../assets/pokeball.svg";
import { ReactComponent as SearchIcon } from "../assets/magnifying.svg";
import { ReactComponent as PokedleIcon } from "../assets/gameboy.svg";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">
          <HomeIcon className="icon"/>
          Home
          </Link>
        </li>
        <li>
          <Link to="/team">
          <TeamIcon className="icon"/>
          Team
          </Link>
        </li>
        <li>
          <Link to="/random">
          <RandomIcon className="icon"/>
          Random
          </Link>
        </li>
        <li>
          <Link to="/search">
          <SearchIcon className="icon"/>
          Search
          </Link>
        </li>
        <li>
          <Link to="/pokedle">
          <PokedleIcon className="icon"/>
          Pokedle
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;