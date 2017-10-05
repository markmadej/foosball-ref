/*
 * CountdownTimerWrapper
 *
 * This component represents a container that handles logic for the CountdownTimer.
 *
 */
import React from 'react';
import CountdownTimer from '../../components/CountdownTimer';

export default class CountdownTimerWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
      remainingSeconds: 0
    };

    // This binding is necessary to make `this` work in the callback - magic from React docs
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.stopOtherTimers(this.props.defaultSeconds);
    this.stopTimer();
    this.setState(previousState => {
      return {
        timerRunning: true,
        remainingSeconds: Number(this.props.defaultSeconds).toFixed(2)
      }
    });
    this.timerID = setInterval(
      () => this.decrementTimer(),
      100 //run every 1/10 second
    );
  }

  decrementTimer() {
    let timeLeft = Number(this.state.remainingSeconds).toFixed(2) - Number(0.1).toFixed(2);
    this.setState(previousState => {
      return {
        remainingSeconds: timeLeft,
        timerRunning: timeLeft > 0 ? true : false
      };
    });

    if (timeLeft <= 0) {
      console.log("Reached end of timer!  Buzzzzzz");
      this.stopTimer();

    }
  }

  stopTimer() {
    if (this.timerID && this.timerID != 0) {
      clearInterval(this.timerID);
      this.timerID = 0;
    } else {
      console.log("In stopTimer but timer was not running.  Shrug, exiting.");
    }

  }

  render() {
    return (
      <CountdownTimer timerRunning={this.state.timerRunning} defaultSeconds={this.props.defaultSeconds}
        currTimerSeconds={this.state.remainingSeconds} onClick={this.handleClick} />
    );
  }
}
