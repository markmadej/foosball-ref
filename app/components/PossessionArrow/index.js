/*
 * PossessionArrow
 *
 * This component displays a possession arrow and clicking the arrow reverses direction.
 *
 * teamInPossession prop is required and the value is either 1 or 2.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class PossessionArrow extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      teamInPossession: this.props.teamInPossession,
    };
    this.changePossession = this.changePossession.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      teamInPossession: nextProps.teamInPossession,
    });
  }

  changePossession() {
    this.setState(previousState => {
      return {
        teamInPossession: previousState.teamInPossession === 1 ? 2 : 1
      };
    });
  }

  render() {

    var arrow = '';
    if (this.state.teamInPossession === 1) {
      arrow = '\u2b05';  //left arrow
    } else {
      arrow = '\u27a1';
    }
    return (
      <div data-test-ref="possession-arrow" style={this.props.style} onClick={() => this.changePossession()}>{arrow}</div>
    );
  }
}

PossessionArrow.propTypes = {
  teamInPossession: PropTypes.number.isRequired
};
