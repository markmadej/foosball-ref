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

    const gridContainerStyle = {
      display: 'grid',
      gridGap: '10 px',
      gridTemplateColumns: '50% 50%',
    };
    const standard = {
      color: 'black',
      gridColumn: '1 / 3',
      textAlign: 'center',
    };

    const warning = {
      color: 'red',
      gridColumn: '1 / 3',
      textAlign: 'center',
    };

    const buttonStyle = {
      borderStyle: 'solid',
      textAlign: 'center',
    };

    return (
      <div style={gridContainerStyle}>
      <div className='displayPanel' style={Number(this.props.currentTime) <= 2.0 ? warning : standard}>
      {Number(this.props.currentTime).toFixed(1)}
      </div>
      <div style={buttonStyle} className="timerButton" data-test-ref="timer10" onClick={()=>this.props.startTimer(10)}>10</div>
      <div style={buttonStyle} className="timerButton" data-test-ref="timer15" onClick={()=>this.props.startTimer(15)}>15</div>
      </div>
    );
  }
}

CountdownTimerDisplay.propTypes = {
  startTimer: PropTypes.func.isRequired
};
