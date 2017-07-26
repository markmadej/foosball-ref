import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import TimerGroupWrapper from '../index';
import CountdownTimerWrapper from '../../../containers/CountdownTimerWrapper';

describe('<TimerGroupWrapper />', () => {
  it('should render two CountdownTimerWrapper', () => {
    const renderedComponent = shallow(
      <TimerGroupWrapper />
    );
    expect(renderedComponent.find(CountdownTimerWrapper).length).toBe(2);
  });
});
