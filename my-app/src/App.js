import './App.css';

import React, { Component } from 'react';
import PokemonDisplay from './PokemonDisplay';


class App extends Component {
  render() {

    return (
      <div className="App">
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
              <PokemonDisplay name="pikachu"/>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
