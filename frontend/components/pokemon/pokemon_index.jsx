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
    return (
      <main>
        <div>{this.props.children}</div>
        <section className="index-bar">
          <ul>
            {pokemon.map( poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
          </ul>
        </section>
      </main>
    );
  }
}

export default PokemonIndex;
