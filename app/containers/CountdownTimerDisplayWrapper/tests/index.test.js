import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import CountdownTimerDisplayWrapper from '../index';
import CountdownTimerDisplay from '../../../components/CountdownTimerDisplay';

describe('<CountdownTimerDisplayWrapper />', () => {
  // Skipping test now because I think I'll get rid of this and go
  // with CountdownTimerDisplay and associated components.
  it('should render a CountdownTimerDisplay', () => {
    const renderedComponent = shallow(
      <CountdownTimerDisplayWrapper />
    );
    console.log(renderedComponent.debug());
    expect(renderedComponent.find(CountdownTimerDisplay).length).toBe(1);
  });

  it('should start to run a timer when one of the timers is clicked', () => {
    var clock = sinon.useFakeTimers();
    const renderedComponent = mount(
      <CountdownTimerDisplayWrapper />
    );

    renderedComponent.find("[data-test-ref='timer15']").simulate('click');
    clock.tick(1001);
    expect(renderedComponent.find(".displayPanel").text()).toBe('14.0');
    clock.restore();
  });

  it('should restart the timer if clicked while another timer is running', () => {
    var clock = sinon.useFakeTimers();
    const renderedComponent = mount(
      <CountdownTimerDisplayWrapper />
    );

    renderedComponent.find("[data-test-ref='timer15']").simulate('click');
    clock.tick(1001);
    renderedComponent.find("[data-test-ref='timer10']").simulate('click');
    clock.tick(1001);
    expect(renderedComponent.find(".displayPanel").text()).toBe('9.0');
    clock.restore();
  });

});
