import '../css/Team.css';

import React, { Component } from 'react';
import PokemonDisplay from './PokemonDisplay';


class Team extends Component {
  render() {
    return (
      <div className="Team">
        <table>
          <tr>
            <td>
              <PokemonDisplay />
            </td>
            <td>
              <PokemonDisplay />
            </td>
            <td>
              <PokemonDisplay />
            </td>
          </tr>
          <tr>
            <td>
              <PokemonDisplay />
            </td>
            <td>
              <PokemonDisplay />
            </td>
            <td>
              <PokemonDisplay/>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Team;
