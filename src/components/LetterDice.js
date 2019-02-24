import React from 'react';
import LetterDie from './LetterDie.js';

  const LetterDice = (props) => (
    <div className="letter_dice_wrap">
        {props.dice.map((die, index) => (
        <LetterDie 
            letters={die} 
            key={index}
            setDieResult={props.setDieResult} />
        ))}
    </div>
  );

  export default LetterDice;