import React, { Component } from 'react';
import './App.css';

import LetterDice from './components/LetterDice.js';
import RollResults from './components/RollResults.js';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dice: [
        ['s', 't', 'b', 'd', 'c', 'r', 'm', 'n'],
        ['a', 'a', 'e', 'i', 'o', 'u'],
        ['t', 'b', 'd', 'w', 'm', 'n', 'p']
      ],
      results: [],
      username: undefined
    };
    this.setDieResult = this.setDieResult.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }

  setDieResult = (index, result) => {
    console.log('setDieResult: ' + result);
    this.setState((prevState, props) => {
      prevState.results[index] = result;
      return {results: prevState.results};
    });
  };

  setUserName = (username) => {
    console.log('setUserName: ', username);
    this.setState(() => {
      return {username};
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Welcome setUserName={this.setUserName} username={this.state.username} />
        {this.state.username && <LetterDice dice={this.state.dice} setDieResult={this.setDieResult} results={this.state.results}></LetterDice>}
        {this.state.username && <RollResults results={this.state.results} howManyDice={this.state.dice.length}></RollResults>} 
      </div>
    );
  }
}

export default App;
