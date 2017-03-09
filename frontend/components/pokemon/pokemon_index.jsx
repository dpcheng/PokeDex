import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    let pokemonItems = pokemon.map( poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <section>
        <ul>
          {pokemonItems}
        </ul>
        {this.props.children}

      </section>
    );
  }
}

export default PokemonIndex;
