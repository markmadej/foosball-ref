/*
 * GameCounter
 *
 * This is a div with the game count for a particular team.
 * When you click it, the counter increments up to 2, or back to zero.
 *
 * maxGames prop is required.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default class GameCounter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      gameCount: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {

    // If the counter is less than or equal to maxGames, increment.
    // If the counter is already at max games, set back to zero.
    if (this.state.gameCount < this.props.maxGames) {
      var newGameCt = this.state.gameCount + 1;
      this.setState({
        gameCount: newGameCt
      });
    } else {
      this.setState({
        gameCount: 0
      });
    }
  }

  render() {
    return (
      <div onClick={this.incrementCounter}>{this.state.gameCount}</div>
    );
  }
}
