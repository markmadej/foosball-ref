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
    this.state = {};

    // This binding is necessary to make `this` work in the callback - magic from React docs
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.timerRunning === true) {
      console.log("Timer already running, exiting handleClick");
      return;
    }

    this.timerID = setInterval(
      () => this.decrementTimer(),
      100 //run every 1/10 second
    );
  }

  decrementTimer() {

  }

  render() {
    return (
      <CountdownTimer defaultSeconds={this.props.defaultSeconds}
        currTimerSeconds={this.props.currTimerSeconds} onClick={this.handleClick} />
    );
  }
}
