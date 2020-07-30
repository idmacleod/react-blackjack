import React from 'react';

const GameForm = (props) => {
    return (
        <div className="game-form">
            <form>
                <label for="p1">Player 1:</label>
                <input type="text" name="p1" id="p1" />
                <label for="p2">Player 2:</label>
                <input type="text" name="p2" id="p2" />
                <input type="submit" value="Start Game" />
            </form>
        </div>
    );
}

export default GameForm;