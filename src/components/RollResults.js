import React, {Component} from 'react';

class ShowResults extends Component {
    render() {
        return (
            <div className="roll_results">
                <div className="roll_results_header">Is it a word?</div>
                <div className="result_maybe_word">Is {this.props.results.join('')} a word? </div>
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