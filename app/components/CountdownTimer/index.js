/*
 * CountdownTimer
 *
 * This component represents the number of seconds left on a given rod.
 * When clicked, this starts counting down the time.
 *
 */

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default class CountdownTimer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.currTimerSeconds ? this.props.currTimerSeconds : this.props.defaultSeconds}
      </div>
    );
  }
}
