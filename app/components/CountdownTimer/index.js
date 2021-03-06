/*
 * CountdownTimer
 *
 * This component represents the number of seconds left on a given rod.
 * When clicked, this starts counting down the time.
 *
 */

import React from 'react';

export default class CountdownTimer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    var testRef = "countdown-timer-" + this.props.defaultSeconds;
    return (
      <div onClick={this.props.onClick} data-test-ref={testRef}>
        {this.props.timerRunning ? Number(this.props.currTimerSeconds).toFixed(1) : this.props.defaultSeconds}
      </div>
    );
  }
}
