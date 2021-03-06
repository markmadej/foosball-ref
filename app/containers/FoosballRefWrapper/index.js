/*
 * FoosballRefWrapper
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CountdownTimerDisplayWrapper from '../CountdownTimerDisplayWrapper';
import Counter from '../../components/Counter';
import PossessionArrow from '../../components/PossessionArrow';

export default class FoosballRefWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
      super(props);
      this.state = {
        teamInPossession: 1,
      };
      this.startTimer = this.startTimeout.bind(this);
      this.changePossessionAfterScore = this.changePossessionAfterScore.bind(this);
  }

  changePossessionAfterScore(newTeam) {
    this.setState(previousState => {
      return {
        teamInPossession: newTeam,
        startTimerAfterScore: Date.now(),
      }
    });
  }

  startTimeout() {
    this.setState({
      startTimeout: Date.now(),
    });
  }

  render() {
    const containerStyle = {
      display: 'grid',
      gridGap: '10 px',
      gridTemplateRows: '30% 30% 10% 10% 10% 10%',
      gridTemplateColumns: '33% 16.5% 16.5% 33%',
      height: '100%',
    }

    const displayPanelStyle = {
      gridRow: '1 / 3',
      gridColumn: '1 / 5',
    }

    const leftToText = {
      gridRow: '3 / 4',
      gridColumn: '1 / 3',
      textAlign: 'center',
    };

    const rightToText = {
      gridRow: '3 / 4',
      gridColumn: '3 / 5',
      textAlign: 'center',
    }

    const leftTOButton = {
      gridColumn: '1 / 3',
      gridRow: '4 / 5',
      textAlign: 'center',
      fontSize: '2em',
    };

    const rightTOButton = {
      gridColumn: '3 / 5',
      gridRow: '4 / 5',
      textAlign: 'center',
      fontSize: '2em',
    };

    const leftScoreText = {
      gridColumn: '1 / 2',
      gridRow: '5 / 6',
      textAlign: 'center',
    };

    const rightScoreText = {
      gridColumn: '4 / 5',
      gridRow: '5 / 6',
      textAlign: 'center',
    };

    const leftScoreButton = {
      gridColumn: '1 / 2',
      gridRow: '6 / 7',
      textAlign: 'center',
      fontSize: '2em',
    };

    const rightScoreButton = {
      gridColumn: '4 / 5',
      gridRow: '6 / 7',
      textAlign: 'center',
      fontSize: '2em',
    };

    const possessionTextStyle = {
      gridColumn: '2 / 4',
      gridRow: '5 / 6',
      textAlign: 'center',
    }
    const possessionArrowStyle = {
      gridColumn: '2 / 4',
      gridRow: '6 / 7',
      textAlign: 'center',
      fontSize: '2em',
    }

    var timerStartSeconds = null;
    if (this.state.startTime != null) {
      timerStartSeconds = this.state.startTime;
    }

    return (
      <div style={containerStyle}>
        <div style={displayPanelStyle}>
          <CountdownTimerDisplayWrapper
            startTimerAfterScore={this.state.startTimerAfterScore}
            startTimeout={this.state.startTimeout}
            />
        </div>
        <div style={leftToText}>Timeouts</div>
        <div style={rightToText}>Timeouts</div>
        <div style={leftTOButton}>
          <Counter maxCount={2} dataTestRef="left-timeout" clickHandler={()=>this.startTimeout()}/>
        </div>
        <div style={rightTOButton}>
          <Counter maxCount={2} dataTestRef="right-timeout" clickHandler={()=>this.startTimeout()}/>
        </div>
        <div style={leftScoreText}>Score</div>
        <div style={rightScoreText}>Score</div>
        <div style={leftScoreButton}>
          <Counter dataTestRef="left-score" maxCount={5}  clickHandler={()=>this.changePossessionAfterScore(2)}/>
        </div>
        <div style={possessionTextStyle}>Possession</div>
        <PossessionArrow style={possessionArrowStyle} teamInPossession={this.state.teamInPossession}/>
        <div style={rightScoreButton}>
          <Counter dataTestRef="right-score" maxCount={5}  clickHandler={()=>this.changePossessionAfterScore(1)}/>
        </div>
      </div>
    );
  }
}
