export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon'
  })
);

export const fetchpokemonDetail = pokemonId => (
  $.ajax({
    url: `api/pokemon/${pokemonId}`,
  })
);

export const createNewPokemon = pokemon => (
  $.ajax({
    url: `api/pokemon`,
    type: 'POST',
    data: {pokemon}
  })
);
