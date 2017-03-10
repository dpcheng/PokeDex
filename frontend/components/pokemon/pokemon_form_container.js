import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { requestNewPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  errors: state.errors.responseJSON
});

const mapDispatchToProps = dispatch => ({
  requestNewPokemon: pokemon => dispatch(requestNewPokemon(pokemon))
});

const PokemonFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);

export default PokemonFormContainer;
