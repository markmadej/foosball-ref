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

  render() {
    return (
      <div>
        <CountdownTimerWrapper defaultSeconds='10'/>
        <CountdownTimerWrapper defaultSeconds='15'/>
      </div>
    );
  }
}
