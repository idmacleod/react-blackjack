import React from 'react';
import GameForm from './components/GameForm';
import GameDisplay from './containers/GameDisplay';

function App() {
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

export default App;