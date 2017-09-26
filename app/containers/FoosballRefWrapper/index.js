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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import messages from './messages';
import CountdownTimerDisplayWrapper from '../CountdownTimerDisplayWrapper';
import Counter from '../../components/Counter';

export default class FoosballRefWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const containerStyle = {
      display: 'grid',
      gridGap: '10 px',
      gridTemplateRows: '75% 25%',
      gridTemplateColumns: '50% 50%',
    }
    const topDiv = {
        gridTemplateColumns: '1 / 3',
        gridTemplateRows: '1 / 2',
    };

    const leftButton = {
      gridTemplateColumns: '1 / 2',
      gridTemplateRows: '2 / 3',
    };

    const rightButton = {
      gridTemplateColumns: '2 / 3',
      gridTemplateRows: '2 / 3',
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div style={containerStyle}>
        <div style={topDiv}>
          <CountdownTimerDisplayWrapper />
        </div>
        <div style={leftButton}><Counter maxCount={2} /></div>
        <div style={rightButton}><Counter maxCount={2} /></div>
      </div>
      </MuiThemeProvider>
    );
  }
}
