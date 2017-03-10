import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestpokemonDetail(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestpokemonDetail(newProps.params.pokemonId);
    }
  }

  renderEachItem() {
    if (this.props.pokemon.items === undefined) {
      return (<div></div>);
    }
    return (
      this.props.pokemon.items.map((itemObject, idx) => (
        <Link key={idx} to={`pokemon/${this.props.pokemon.id}/items/${idx}`}>
          <li>
            <img width="100" height="100" src={itemObject.image_url} />
          </li>
        </Link>
      ))
    );
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <ul className="detail">
        <img src={pokemon.image_url} />
        <li>{pokemon.name}</li>
        <li>Attack: {pokemon.attack}</li>
        <li>Defense: {pokemon.defense}</li>
        <li>Moves: {pokemon.moves}</li>
        <ul>
          {this.renderEachItem.bind(this)()}
        </ul>
        {this.props.children}

      </ul>
    );
  }
}

export default PokemonDetail;
