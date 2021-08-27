import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './carousel';

const data = [
  {
    id: 0,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    alt: 'bulbasaur'
  },
  {
    id: 1,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    alt: 'charmander'
  },
  {
    id: 2,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    alt: 'squirtle'
  },
  {
    id: 3,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    alt: 'pikachu'
  },
  {
    id: 4,
    url: 'https://external-preview.redd.it/UgRlloILTWWn3ReYOH7GBMs7L_oVvsVdcE73lFe1naM.jpg?auto=webp&s=401872182748c12b09c4617a177ede65a12e1e02',
    alt: 'the bee movie script'
  },
  {
    id: 5,
    url: 'https://assets2.theenglishfarm.com/sites/default/files/styles/featured_image/public/harold_2.jpg?itok=NGsRc1Co',
    alt: 'hide the pain harold'
  }
];

ReactDOM.render(
  <Carousel data={data} />,
  document.querySelector('#root')
);
