import React from 'react';
import GameForm from './components/GameForm';
import GameDisplay from './containers/GameDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null,
      game: null
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Blackjack</h1>
        </header>
        <GameForm />
        <GameDisplay />
      </div>
    );
  }
}

export default App;