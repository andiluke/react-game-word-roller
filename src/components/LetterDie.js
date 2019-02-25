import React from 'react';

const LetterDie = (props) => {
  
  const roll = () => {
    let choice = Math.floor(Math.random() * Math.floor(props.letters.length));
    let l = props.letters[choice];
    props.setDieResult(props.counter, l);
  }


  return (
    <div 
      className={!props.currentRoll ? "letter_die letter_die_initial" : "letter_die"}
      onClick={roll}
    >
      {props.currentRoll ? props.currentRoll : 'Roll Me'}
      
    </div>
  );

}

  export default LetterDie;