import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import TimerGroupWrapper from '../index';
import CountdownTimerWrapper from '../../../containers/CountdownTimerWrapper';

describe('<TimerGroupWrapper />', () => {
  it('should render two CountdownTimerWrapper', () => {
    const renderedComponent = shallow(
      <TimerGroupWrapper />
    );
    expect(renderedComponent.find(CountdownTimerWrapper).length).toBe(2);
  });

  it('should reset one timer if the other starts', () => {
    var clock = sinon.useFakeTimers();
    const renderedComponent = mount(
      <TimerGroupWrapper />
    );
    var timer15 = renderedComponent.find("[data-test-ref='countdown-timer-15']");
    var timer10 = renderedComponent.find("[data-test-ref='countdown-timer-10']");
    expect(timer15.text()).toBe('15');
    expect(timer10.text()).toBe('10');
    timer15.simulate('click');
    clock.tick(1001);
    expect(timer15.text()).toBe('14.0');
    timer10.simulate('click');
    clock.tick(1001);
    expect(timer15.text()).toBe('15');
    clock.restore();
  });
});
