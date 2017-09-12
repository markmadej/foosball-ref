/*
 * TimerGroupWrapper
 *
 * This component represents a container that contains two timers, one for
 * 10 seconds and one for 15.  When one starts, the other resets.
 *
 */
import React from 'react';
import CountdownTimerWrapper from '../../containers/CountdownTimerWrapper';

export default class TimerGroupWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      // There will at most be one timer running.  This contains the default seconds
      // of the currently running timer.
      currentRunningTimer: null
    };

    // This binding is necessary to make `this` work in the callback - magic from React docs
    this.stopOtherTimers = this.stopOtherTimers.bind(this);
  }

  stopOtherTimers(runningTimerSeconds) {
    this.setState({
      currentRunningTimer: runningTimerSeconds
    });
  }

  render() {
    var reset10 = false;
    var reset15 = false;
    if (this.state.currentRunningTimer === 15) {
      reset10 = true;
    } else if (this.state.currentRunningTimer === 10) {
      reset15 = true;
    }
    return (
      <div>
        <CountdownTimerWrapper reset={reset10} defaultSeconds='10' stopOtherTimers={this.stopOtherTimers} />
        <CountdownTimerWrapper reset={reset15} defaultSeconds='15' stopOtherTimers={this.stopOtherTimers} />
      </div>
    );
  }
}
