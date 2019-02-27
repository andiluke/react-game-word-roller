import React from 'react';

  const Welcome = (props) => {
    const handleBtnClick = () => {
        let username = document.getElementById('welcome_username').value;
        props.setUserName(username);
    }

    const EnterName = (props) => (
        <div className="welcome">
            <h2>Hello! What is your name?</h2>
            <input id="welcome_username" data-lpignore="true" /> <button onClick={handleBtnClick}>Go</button>
        </div>
    );

    const DisplayInfo = (props) => (
        <div className="display_info_wrap">
            Hi {props.username}! Your score is: {props.score}
        </div>
    );

    if (props.username) {
        return <DisplayInfo username={props.username} score={props.score}/>;
    } else {
        return <EnterName />;
    }
  }
  export default Welcome;