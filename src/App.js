import React, { Component } from 'react';
import './App.css';

import LetterDice from './components/LetterDice.js';
import RollResults from './components/RollResults.js';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
/*
sat, sad, saw, sap,
set, sew, 
sit, sip, sin,
sob, sod, sow, son
sud, sum, sun, sup
tab, tad, tan, tap
ten,
tin, tip,
tot, tow, ton, top
tub
bat, bad, ban,
bet, bed,
bit, bid, bin,
bot, bob, bow, bop,
but, bud, bum, bun,
dab, dad, dam, 
den,
did, dim, din, dip,
dot, don,
dub, dud,
cat, cab, cad, can, cap,
cot, cob, cow, cop,
cut, cub, cud, cup,
rat, rad, raw, ram, ran, rap,
red,
rib, rid, rim, rip,
rot, rob, rod, row, 
rut, rub, run,
mat, mad, maw, man, map,
met, men,
mit, 
mob, mow, mop,
mud, 
nab, nap,
net, new, 
nit, nib, nip,
not, nod, now, 
nut

*/
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
      username: undefined,
      score: 0
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
        <Welcome setUserName={this.setUserName} username={this.state.username} score={this.state.score}/>
        {this.state.username && <LetterDice dice={this.state.dice} setDieResult={this.setDieResult} results={this.state.results}></LetterDice>}
        {this.state.username && <RollResults results={this.state.results} howManyDice={this.state.dice.length}></RollResults>} 
      </div>
    );
  }
}

export default App;
