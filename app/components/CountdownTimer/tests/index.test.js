import React from 'react';
import { shallow } from 'enzyme';

import CountdownTimer from '../index';


describe('<CountdownTimer />', () => {
  it('should by default render the default seconds passed in', () => {
    const renderedComponent = shallow(
      <CountdownTimer defaultSeconds='15' />
    );
    expect(renderedComponent.text()).toBe('15');
  });

  it('should render the current countdown seconds when present instead of default seconds', () => {
    const renderedComponent = shallow(
      <CountdownTimer defaultSeconds='15' currTimerSeconds='14.1' />
    );
    expect(renderedComponent.text()).toBe('14.1');
  });

});
