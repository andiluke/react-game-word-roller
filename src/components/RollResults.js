import React, {Component} from 'react';

class ShowResults extends Component {
    render() {
        return (
            <div className="roll_results">
                <div className="roll_results_header">Is it a word?</div>
                <div className="result_maybe_word">{this.props.results.join('')}</div>
                <div className="result_maybe_word_images">
                {this.props.results.map((letter, index) => (
                    <img src={'images/letters/' + letter + '.png'} alt={letter} key={index} />
                ))}
                </div>
            </div>
        );
    }
}


class RollResults extends Component {
    render() {
      return (
        <div className="roll_results_wrap">
        {this.props.results.length === this.props.howManyDice ? <ShowResults results={this.props.results} /> : 'Keep on Rolling!'}    
        </div>
      );
    }
  }

  export default RollResults;