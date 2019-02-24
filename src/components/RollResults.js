import React, {Component} from 'react';

class RollResults extends Component {
    render() {
      return (
        <div>
          Roll Results: {this.props.results}
        </div>
      );
    }
  }

  export default RollResults;