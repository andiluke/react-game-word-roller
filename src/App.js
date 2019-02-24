import React, { Component } from 'react';
import './App.css';

import LetterDice from './components/LetterDice.js';
import RollResults from './components/RollResults.js';
import Header from './components/Header.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dice: [
        ['s', 't', 'b', 'd', 'c', 'r', 'm', 'n'],
        ['a', 'a', 'e', 'i', 'o', 'u'],
        ['t', 'b', 'd', 'w', 'm', 'n', 'p']
      ],
      results: []
    };
    this.setDieResult = this.setDieResult.bind(this);
  }

  setDieResult = (index, result) => {
    console.log('setDieResult: ' + result);
    this.setState((prevState, props) => {
      let updated = prevState.results;
      updated[index] = result;
      console.log('updated: ' + updated);
      return {results: updated};
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <LetterDice dice={this.state.dice} setDieResult={this.setDieResult}></LetterDice>
        <RollResults results={this.state.results}></RollResults>
      </div>
    );
  }
}

export default App;
