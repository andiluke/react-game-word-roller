import React from 'react';

  const Welcome = (props) => {
    const handleBtnClick = () => {
        let username = document.getElementById('welcome_username').value;
        console.log('handleBtnClick,', username);
        props.setUserName(username);
    }
    return (
        <div className="welcome">
            <h2>Hello! What is your name?</h2>
            <input id="welcome_username" /> <button onClick={handleBtnClick}>Go</button>
        </div>
    );
  }
  export default Welcome;