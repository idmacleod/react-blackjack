import React from 'react';

class GameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '',
            name2: ''
        }

        this.handleName1Input = this.handleName1Input.bind(this);
        this.handleName2Input = this.handleName2Input.bind(this);
    }

    handleName1Input(e) {
        this.setState({name1: e.target.value});
    }

    handleName2Input(e) {
        this.setState({name2: e.target.value});
    }

    render() {
        return (
            <div className="game-form">
                <form>
                    <label htmlFor="p1">Player 1:</label>
                    <input type="text" name="p1" id="p1" onChange={this.handleName1Input} />
                    <label htmlFor="p2">Player 2:</label>
                    <input type="text" name="p2" id="p2" onChange={this.handleName2Input} />
                    <input type="submit" value="Start Game" />
                </form>
            </div>
        );
    }
}

export default GameForm;