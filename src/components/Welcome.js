import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

  class Welcome extends React.Component {
      render() {
        if (this.props.username) {
            return (
                <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
      
                <this.DisplayInfo username={this.props.username} score={this.props.score} key="welcome" />
              </ReactCSSTransitionGroup>
              );
        } else {
            return <this.EnterName />;
        }
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
          console.log('componentDidUpdate');
          console.log(prevProps);
          console.log(this.props);
          
          const el = document.getElementsByClassName('display_info_wrap')[0];
          // score increaese, happy dance
          el.classList.remove('score_decreased', 'score_increased');
          if (prevProps.score < this.props.score) {
              console.log('score increased!');
              el.classList.add('score_increased');
          } else if (prevProps.score > this.props.score) {
              console.log('score decreased!');
              el.classList.add('score_decreased');
          }
      }

    handleBtnClick = () => {
        let username = document.getElementById('welcome_username').value;
        this.props.setUserName(username);
    }

    EnterName = (props) => (
        <div className="welcome">
            <h2>Hello! What is your name?</h2>
            <input id="welcome_username" data-lpignore="true" className="input_name"/> <button onClick={this.handleBtnClick} className="name_btn">Go</button>
        </div>
    );

    DisplayInfo = (props) => (
        <div className="display_info_wrap">
            {props.username}'s score: {props.score}
        </div>
    );
    
  }

  export default Welcome;