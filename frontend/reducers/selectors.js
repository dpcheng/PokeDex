import values from 'lodash/values';

export const selectAllPokemon = state => (
  values(state.pokemon)
);

export const selectPokemonItem = (state, itemId) => {
  return state.singlePokemon.items[itemId];
};
