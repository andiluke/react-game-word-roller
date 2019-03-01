import React, {Component} from 'react';
import ShowResults from './ShowResults';


const KeepRolling = () => (
    <div className="no_results_yet">
    Keep on Rolling!
    </div>
);


class RollResults extends Component {
    render() {
      return (
        <div className="roll_results_wrap">
        {this.props.results.length === this.props.howManyDice ? <ShowResults results={this.props.results} changeScore={this.props.changeScore} /> : <KeepRolling />}    
        </div>
      );
    }
  }

  export default RollResults;