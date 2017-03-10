import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({pokemon}) => (
    <Link to={`/pokemon/${pokemon.id}`}>
      <li className="index-item">
        <img height="25" width="25" src={pokemon.image_url}></img>
        {pokemon.name}
    </li>
    </Link>
);

export default PokemonIndexItem;
