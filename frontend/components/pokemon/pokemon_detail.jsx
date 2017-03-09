import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  renderEachItem() {
    if (this.props.pokemon.items === undefined) {
      return (<div></div>);
    }
    return (
      this.props.pokemon.items.map((itemObject, idx) => (
        <li>
        <Link key={idx} to={`pokemon/${this.props.pokemon.id}/items/${idx}`}>
          <img width="100" height="100" src={itemObject.image_url} />
        </Link>
        </li>
      ))
    );
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <ul>
        <img src={pokemon.image_url} />
        <li>{pokemon.name}</li>
        <li>{pokemon.attack}</li>
        <li>{pokemon.defense}</li>
        <li>{pokemon.moves}</li>
        <ul>
          {this.renderEachItem.bind(this)()}
          {this.props.children}
        </ul>

      </ul>
    );
  }
}

export default PokemonDetail;
