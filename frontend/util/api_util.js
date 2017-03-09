export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = pokemonId => (
  $.ajax({
    url: `api/pokemon/${pokemonId}`,
  })
);
