import React from 'react';
import Dictionary from '../lib/Dictionary';

const dictionary = new Dictionary();


const ShowResults = function (props) {


    const handleYesClick = () => {
        console.log('yes: ', props.results.join(''));
        if (dictionary.isWord(props.results.join(''))){
            // increase score
            console.log('+1');
            props.changeScore(1);
        } else {
            // decrease score
            console.log('-1');
            props.changeScore(-1);
        }
        props.clearDiceRoll();
    };

    const handleNoClick = () => {
        console.log('no: ', props.results.join(''));
        if (!dictionary.isWord(props.results.join(''))){
            // increase score
            console.log('+1');
            props.changeScore(1);
        } else {
            // decrease score
            console.log('-1');
            props.changeScore(-1);
        }
        props.clearDiceRoll();
    };


    return (
        <div className="roll_results">
            <div className="result_maybe_word_images">
            {props.results.map((letter, index) => (
                <img src={'images/letters/' + letter + '.png'} alt={letter} key={index} />
            ))}
            </div>
            <div className="roll_results_header">Is it a word?</div>
            <div className="roll_results_buttons_wrap">
                <button className="roll_result_button" onClick={handleYesClick}>Yes</button>
                <button className="roll_result_button" onClick={handleNoClick}>No</button>
            </div>
        </div>
    );

}

export default ShowResults;