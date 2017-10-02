/*
 * Counter
 *
 * This is a div with the game count for a particular team.
 * When you click it, the counter increments up to 2, or back to zero.
 *
 * maxGames prop is required.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    // If the counter is less than or equal to maxGames, increment.
    // If the counter is already at max games, set back to zero.
    if (this.state.count < this.props.maxCount) {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount,
      });
    } else {
      this.setState({
        count: 0,
      });
    }
  }

  render() {
    return (
      <div onClick={ ()=>this.incrementCounter() }>{this.state.count}</div>
    );
  }
}

Counter.propTypes = {
  maxCount: PropTypes.number.isRequired
};
