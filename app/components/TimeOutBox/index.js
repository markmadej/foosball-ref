/*
 * TimeOutBox
 *
 * This is a strip of 3 buttons, labeled 0, 1, and 2.
 * When a button is clicked, it shows as being pressed and all other buttons are not pressed.
 *
 */

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default class TimeOutBox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FloatingActionButton data-test-ref='button-timeout-add'>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton data-test-ref='button-timeout-remove'>
          <ContentRemove />
        </FloatingActionButton>
      </div>
    );
  }
}
