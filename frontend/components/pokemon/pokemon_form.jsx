import React from 'react';
import { withRouter } from 'react-router';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: [],
      image_url: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.attack = parseInt(this.state.attack);
    this.state.defense = parseInt(this.state.defense);
    this.props.requestNewPokemon(this.state).then( pokemon => {
      this.props.router.push(`pokemon/${pokemon.id}`);
    });
  }

  render() {
    return (
      <form>
        Name
        <input type="text" onChange={this.update("name")} value={this.state.name} /><br/>

        Attack
        <input type="text" onChange={this.update("attack")} value={this.state.attack} /><br/>

        Defense
        <input type="text" onChange={this.update("defense")} value={this.state.defense}/><br/>

        Poke-Type
        <select onChange={this.update("poke_type")}>
          {TYPES.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
        </select><br/>

        Image
        <input type="text" onChange={this.update("image_url")} value={this.state.image_url} /><br/>

        <button onClick={this.handleSubmit}>Submit New Pokemon</button>

      </form>
    );
  }
}

export default withRouter(PokemonForm);
