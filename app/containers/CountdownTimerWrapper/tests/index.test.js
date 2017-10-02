import React from 'react';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
import CountdownTimerWrapper from '../index';
import CountdownTimer from '../../../components/CountdownTimer';

describe.skip('<CountdownTimerWrapper />', () => {
  // Skipping test now because I think I'll get rid of this and go
  // with CountdownTimerDisplay and associated components.
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

  it('should restart the timer if clicked while the timer is running', () => {
    var clock = sinon.useFakeTimers();
    const renderedComponent = mount(
      <CountdownTimerWrapper defaultSeconds='15' />
    );
    renderedComponent.simulate('click');
    clock.tick(1001);
    renderedComponent.simulate('click');
    clock.tick(1001);
    expect(renderedComponent.text()).toBe('14.0');
    clock.restore();
  });

});
