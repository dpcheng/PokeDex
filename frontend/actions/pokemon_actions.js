import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const RECEIVE_NEW_POKEMON = "CREATE_NEW_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivepokemonDetail = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const receiveNewPokemon = pokemon => ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
});

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestpokemonDetail = (pokemon) => dispatch => (
  APIUtil.fetchpokemonDetail(pokemon)
    .then(poke => dispatch(receivepokemonDetail(poke)))
);

export const requestNewPokemon = pokemon => dispatch => (
  APIUtil.createNewPokemon(pokemon).then(poke => {
    dispatch(receiveNewPokemon(poke));
    return poke;
  }).fail(error => {
    dispatch(receivePokemonErrors(error));
  })
);
