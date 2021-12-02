import React, { Component } from 'react';

class Counter extends Component {
    state = {
        loading: true,
        pokemon: null,
        id: Math.floor(Math.random()*20 )+1
    }
    async componentDidMount() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.state.id}`;
        const response = await fetch(url);
        const data = await response.json();
        
        console.log(data);

        this.setState({pokemon: data, 
            loading: false});
    }
    randomNumber () {
        return Math.floor(Math.random()*20)+1
    }
    setOtherId = () => {
        this.setState({id: this.randomNumber(), loading: true});
        this.componentDidMount();
    }
    render() {
        return (
            <div>
                {this.state.loading||!this.state.pokemon ? (
                    <div>Loading...</div>
                ): (
                    <div className="conteiner">
                        <div className="title" id="title-name">{this.state.pokemon.name}</div>
                        <img alt="#" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png`}></img>
                        <div className="title" id="PS">PS: {this.state.pokemon.stats[0].base_stat}</div>
                        <div className="title" id="height">Height: {this.state.pokemon.height}</div>
                        <div className="title" id="weight">Weight: {this.state.pokemon.weight}</div>
                        <button type="button" className="btn" 
                        onClick={this.setOtherId}>
                            Random</button>
                    </div>
                )}
            </div>
        )
    }
}
 
export default Counter;