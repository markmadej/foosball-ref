/*
 * CountdownTimerDisplayWrapper
 *
 * This component represents a container that handles logic for the CountdownTimer.
 *
 */
import React from 'react';
import CountdownTimerDisplay from '../../components/CountdownTimerDisplay';

export default class CountdownTimerDisplayWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      running: false,
      displaySeconds: -1
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer(seconds) {
    this.stopTimer();
    this.setState(previousState => {
      return {
        running: true,
        displaySeconds: Number(seconds).toFixed(2)
      }
    });
    this.timerID = setInterval(
      () => this.decrementTimer(),
      100 //run every 1/10 second
    );
  }

  decrementTimer() {
    let timeLeft = Number(this.state.displaySeconds).toFixed(2) - Number(0.1).toFixed(2);
    this.setState(previousState => {
      return {
        displaySeconds: timeLeft,
        running: timeLeft > 0 ? true : false
      };
    });

    if (timeLeft <= 0) {
      // End of timer reached!  Notify the user
      var success = window.navigator.vibrate(500);
      console.log("vibrated? ", success);
      this.stopTimer();

    }
  }

  stopTimer() {
    if (this.timerID && this.timerID != 0) {
      clearInterval(this.timerID);
      this.timerID = 0;
    }
  }

  render() {
    var currentTime = 0;
    if (this.state.running) {
      currentTime = this.state.displaySeconds;
    }
    return (
      <CountdownTimerDisplay currentTime={currentTime} running={this.state.running} startTimer={this.startTimer} />
    );
  }
}
