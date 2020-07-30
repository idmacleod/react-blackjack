import React from 'react';
import Player from '../models/player';

class GameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '',
            name2: ''
        }

        this.handleName1Input = this.handleName1Input.bind(this);
        this.handleName2Input = this.handleName2Input.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleName1Input(e) {
        this.setState({name1: e.target.value});
    }

    handleName2Input(e) {
        this.setState({name2: e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const player1 = new Player(e.target.name1.value);
        const player2 = new Player(e.target.name2.value);
        this.props.onStartGame(player1, player2);
    }

    render() {
        return (
            <div className="game-form">
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name1">Player 1:</label>
                    <input type="text" name="name1" id="name1" onChange={this.handleName1Input} />
                    <label htmlFor="name2">Player 2:</label>
                    <input type="text" name="name2" id="name2" onChange={this.handleName2Input} />
                    <input type="submit" value="Start Game" />
                </form>
            </div>
        );
    }
}

export default GameForm;