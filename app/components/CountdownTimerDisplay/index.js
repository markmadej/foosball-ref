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
      height: '100%',
      gridGap: '10 px',
      gridTemplateRows: '50% 50%',
      gridTemplateColumns: '50% 50%',
    };
    const standard = {
      color: 'black',
      gridColumn: '1 / 3',
      gridRow: 1,
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '4em',
    };

    const warning = {
      color: 'red',
      gridColumn: '1 / 3',
      gridRow: 1,
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '4em',
    };

    const timeOver = {
      color: 'white',
      backgroundColor: 'red',
      gridColumn: '1 / 3',
      gridRow: 1,
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '4em',
    };

    const leftButtonStyle = {
      borderStyle: 'solid',
      textAlign: 'center',
      gridColumn: 1,
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '3em',
    };

    const rightButtonStyle = {
      borderStyle: 'solid',
      textAlign: 'center',
      gridColumn: 2,
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '3em',
    };

    var displayStyle = standard;
    if (Number(this.props.currentTime) === 0) {
      displayStyle = timeOver;
    } else if (Number(this.props.currentTime) <= 2) {
      displayStyle = warning;
    }

    return (
      <div style={gridContainerStyle}>
      <div className='displayPanel' style={displayStyle}>
      {Number(this.props.currentTime).toFixed(1)}
      </div>
      <div style={leftButtonStyle} className="timerButton" data-test-ref="timer10" onClick={()=>this.props.startTimer(10)}>10</div>
      <div style={rightButtonStyle} className="timerButton" data-test-ref="timer15" onClick={()=>this.props.startTimer(15)}>15</div>
      </div>
    );
  }
}

CountdownTimerDisplay.propTypes = {
  startTimer: PropTypes.func.isRequired
};
