import React, { Component } from 'react';
import './App.css';

import LetterDice from './components/LetterDice.js'




class RollResults extends Component {
  render() {
    return (
      <div>
        Roll Results: {this.props.results}
      </div>
    );
  }
}

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
  }

  setDieResult = (result) => {
    console.log('setDieResult: ' + result);
    this.setState((state, props) => {
      return {results: [...state.results, result]};
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.rollDie}>
          
          Aloha!
         
        </header>
        <LetterDice dice={this.state.dice} setDieResult={this.setDieResult}></LetterDice>
        <RollResults results={this.state.results}></RollResults>


      </div>
    );
  }
}

export default App;
