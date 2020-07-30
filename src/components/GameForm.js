import React from 'react';

const GameForm = (props) => {
    return (
        <div className="game-form">
            <form>
                <label htmlFor="p1">Player 1:</label>
                <input type="text" name="p1" id="p1" />
                <label htmlFor="p2">Player 2:</label>
                <input type="text" name="p2" id="p2" />
                <input type="submit" value="Start Game" />
            </form>
        </div>
    );
}

export default GameForm;