import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import PokemonDetailReducer from './pokemon_detail_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  singlePokemon: PokemonDetailReducer
});

export default rootReducer;
