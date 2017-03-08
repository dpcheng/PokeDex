import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to="/pokemon/:pokemonId">
      {pokemon.name}
      <img src={pokemon.image_url}></img>
    </Link>
  </li>
);

export default PokemonIndexItem;
