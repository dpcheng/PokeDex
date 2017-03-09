import React from 'react';

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

  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        {pokemon.name}
        <img src={pokemon.image_url}></img>
      </div>
    );
  }
}

export default PokemonDetail;
