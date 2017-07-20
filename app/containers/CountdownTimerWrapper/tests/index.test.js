import React from 'react';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import CountdownTimerWrapper from '../index';
import CountdownTimer from '../../../components/CountdownTimer';

describe('<CountdownTimerWrapper />', () => {

  it('should render a CountdownTimer', () => {
    const renderedComponent = shallow(
      <CountdownTimerWrapper defaultSeconds='15' />
    );
    expect(renderedComponent.find(CountdownTimer).length).toBe(1);
  });

  it('should render the default seconds', () => {
    const renderedComponent = render(
      <CountdownTimerWrapper defaultSeconds='15' />
    );
    expect(renderedComponent.text()).toBe('15');
  });

  it('should render the current seconds over default', () => {
    const renderedComponent = render(
      <CountdownTimerWrapper defaultSeconds='15' currTimerSeconds='8.9' />
    );
    expect(renderedComponent.text()).toBe('8.9');
  });

  it('should start to run a timer when clicked', () => {

    var clock = sinon.useFakeTimers();
    const renderedComponent = mount(
      <CountdownTimerWrapper defaultSeconds='15' />
    );
    expect(renderedComponent.text()).toBe('15');
    renderedComponent.simulate('click');
    clock.tick(1001);
    expect(renderedComponent.text()).toBe('14.0');

    clock.restore();
  });

});
