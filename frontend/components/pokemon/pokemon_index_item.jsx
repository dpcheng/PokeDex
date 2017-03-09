import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img height="25" width="25" src={pokemon.image_url}></img>
      {pokemon.name}
    </Link>
  </li>
);

export default PokemonIndexItem;
