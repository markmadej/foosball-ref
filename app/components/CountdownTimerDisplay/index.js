/*
 * CountdownTimerDisplay
 *
 * This is a presentational component that
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class CountdownTimerDisplay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
      <div className="displayPanel">{this.props.running ? Number(this.props.currentTime).toFixed(1) : "0.0"}</div>
      <div className="timerButton" data-test-ref="timer10" onClick={()=>this.props.startTimer(10)}>10</div>
      <div className="timerButton" data-test-ref="timer15" onClick={()=>this.props.startTimer(15)}>15</div>
      </div>
    );
  }
}

CountdownTimerDisplay.propTypes = {
  running: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired
};
