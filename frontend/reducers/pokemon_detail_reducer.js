import { RECEIVE_SINGLE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const PokemonDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    case RECEIVE_ALL_POKEMON:
    default:
      return state;
  }
};

export default PokemonDetailReducer;
