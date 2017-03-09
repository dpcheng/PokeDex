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

  // renderEachItem(pokemon) {
  //   if (pokemon.items === undefined) {
  //     return (<div></div>);
  //   } else {
  //     return (
  //       pokemon.items.map(id =>
  //         <li>
  //           <img src={pokemon.items[id].image_url} />
  //         </li>
  //       )
  //     );
  //   }
  // }

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

        </ul>

      </ul>
    );
  }
}

export default PokemonDetail;
