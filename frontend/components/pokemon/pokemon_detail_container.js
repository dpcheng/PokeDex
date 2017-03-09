import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: pokemonId => dispatch(requestSinglePokemon(pokemonId))
});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

export default PokemonDetailContainer;
