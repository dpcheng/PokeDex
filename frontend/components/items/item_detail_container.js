import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.params.itemId)
});

const ItemDetailContainer = connect(mapStateToProps, null)(ItemDetail);

export default ItemDetailContainer;
