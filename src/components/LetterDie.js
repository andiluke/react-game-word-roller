import React, { Component } from 'react';

class LetterDie extends Component {
    
      constructor(props) {
        super(props);
        this.state = {
          letter: undefined
        };
      }
    
      roll = () => {
        let choice = Math.floor(Math.random() * Math.floor(this.props.letters.length));
        let l = this.props.letters[choice];
        
        this.setState((state, props) => {
          return {letter: l};
        });
       
        this.props.setDieResult(this.props.counter, l);
      }
    
      render() {
        return (
          <div 
            className={!this.state.letter ? "letter_die letter_die_initial" : "letter_die"}

            onClick={this.roll}
          >
            {this.state.letter ? this.state.letter : 'Roll Me!'}
            
          </div>
        );
      }
    }

  export default LetterDie;