import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

import { ReactComponent as HomeIcon } from "../assets/house.svg";
import { ReactComponent as RandomIcon } from "../assets/egg.svg";
import { ReactComponent as TeamIcon } from "../assets/pokeball.svg";
import { ReactComponent as SearchIcon } from "../assets/magnifying.svg";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">
          <HomeIcon class="icon"/>
          Home
          </Link>
        </li>
        <li>
          <Link to="/team">
          <TeamIcon class="icon"/>
          Team
          </Link>
        </li>
        <li>
          <Link to="/random">
          <RandomIcon class="icon"/>
          Random
          </Link>
        </li>
        <li>
          <Link to="/search">
          <SearchIcon class="icon"/>
          Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;