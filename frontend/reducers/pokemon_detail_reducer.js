import { RECEIVE_SINGLE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const PokemonDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
