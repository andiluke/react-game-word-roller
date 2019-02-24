import React, {Component} from 'react';

class RollResults extends Component {
    render() {
      return (
        <div>
          Roll Results: {this.props.results.toString()}
        </div>
      );
    }
  }

  export default RollResults;