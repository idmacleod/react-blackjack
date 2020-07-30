import React from 'react';
import GameForm from './components/GameForm';
import GameDisplay from './containers/GameDisplay';
import Game from './models/game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null
    }

    this.handleStartGame = this.handleStartGame.bind(this);
  }

  handleStartGame(player1, player2) {
    const newGame = new Game(player1, player2)
    this.setState({game: newGame});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Blackjack</h1>
        </header>
        {!this.state.game && <GameForm onStartGame={this.handleStartGame} />}
        {this.state.game && <GameDisplay game={this.state.game} />}
      </div>
    );
  }
}

export default App;