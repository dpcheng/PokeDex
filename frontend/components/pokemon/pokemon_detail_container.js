import { requestpokemonDetail } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestpokemonDetail: pokemonId => dispatch(requestpokemonDetail(pokemonId))
});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

export default PokemonDetailContainer;
