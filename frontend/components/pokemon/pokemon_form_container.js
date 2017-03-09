import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { requestNewPokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => ({
  requestNewPokemon: pokemon => dispatch(requestNewPokemon(pokemon))
});

const PokemonFormContainer = connect(
  null, mapDispatchToProps
)(PokemonForm);

export default PokemonFormContainer;
