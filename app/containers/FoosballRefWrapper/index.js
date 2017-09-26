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
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <h1>
        <CountdownTimerDisplayWrapper />
        <Counter maxCount="2" />
        <Counter maxCount="2" />
      </h1>
      </MuiThemeProvider>
    );
  }
}
