import React, {Component} from 'react';
import Dictionary from '../lib/Dictionary';




class ShowResults extends Component {
    render() {
        return (
            <div className="roll_results">
                <div className="result_maybe_word_images">
                {this.props.results.map((letter, index) => (
                    <img src={'images/letters/' + letter + '.png'} alt={letter} key={index} />
                ))}
                </div>
                <div className="roll_results_header">Is it a word?</div>
                <div className="roll_results_buttons_wrap">
                    <button className="roll_result_button">Yes</button>
                    <button className="roll_result_button">No</button>
                </div>
            </div>
        );
    }
}

export default ShowResults;