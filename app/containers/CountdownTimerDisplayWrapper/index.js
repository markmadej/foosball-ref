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
      displaySeconds: -1,
      startSeconds: -1,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);


  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startTimerAfterScore == null &&
        nextProps.startTimeout != null &&
        nextProps.startTimeout != this.props.startTimeout){
        //Timeout timer has started, score timer has not, so set the timeout timer.
      this.startTimer(30);
      return;
    }

    if (nextProps.startTimeout == null &&
        nextProps.startTimerAfterScore != null &&
        nextProps.startTimerAfterScore != this.props.startTimerAfterScore) {
        //Score timer has started, timeout timer has not, so set the score timer.
      this.startTimer(5);
      return;
    }

    // Both are set - use the most recent one.
    if (nextProps.startTimeout > nextProps.startTimerAfterScore) {
      this.startTimer(30);
    } else {
      this.startTimer(5);
    }
  }

  startTimer(seconds) {
    this.stopTimer();
    this.setState(previousState => {
      return {
        running: true,
        displaySeconds: Number(seconds).toFixed(2),
        startSeconds: Number(seconds),
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
      <CountdownTimerDisplay
        currentTime={currentTime}
        running={this.state.running}
        startTimer={this.startTimer}
        startTime={this.state.startSeconds}/>
    );
  }
}
