import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokeList(props) {
  const listItems = (
    <ul>
      {props.pokedex.map(pokedex =>
        <li key={pokedex.number}>
          {pokedex.name}
        </li>
      )}
    </ul>
  );
  return (
    <div>
      { listItems }
    </div>
  );
}

ReactDOM.render(
  <PokeList pokedex={pokedex} />,
  document.getElementById('root')
);
