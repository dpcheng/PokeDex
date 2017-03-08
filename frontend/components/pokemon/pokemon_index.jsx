import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderEachPoke = this.renderEachPoke.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  renderEachPoke(poke, idx) {
    return (
      <li key={idx}>
        {poke.name}
        <img src={poke.image_url}></img>
      </li>
    );
  }

  render() {
    const { pokemon } = this.props;
    return (
      <ul>
        {pokemon.map( (poke, idx) => this.renderEachPoke(poke, idx))}
      </ul>
    );
  }
}

export default PokemonIndex;
