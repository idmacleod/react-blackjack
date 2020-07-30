import React from 'react';
import Player from '../models/player';

const GameForm = (props) => {
    const handleFormSubmit = e => {
        e.preventDefault();
        const player1 = new Player(e.target.name1.value);
        const player2 = new Player(e.target.name2.value);
        props.onStartGame(player1, player2);
    }

    return (
        <div className="game-form">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name1">Player 1:</label>
                <input type="text" name="name1" id="name1" />
                <label htmlFor="name2">Player 2:</label>
                <input type="text" name="name2" id="name2" />
                <input type="submit" value="Start Game" />
            </form>
        </div>
    );
}

export default GameForm;