import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import FoosballRefWrapper from '../index';


describe('<FoosballRefWrapper />', () => {

  it('should change the direction of the possession arrow after score changes', () => {
    const renderedComponent = mount(
      <FoosballRefWrapper />
    );

    var arrowText = renderedComponent.find("[data-test-ref='possession-arrow']").text();
    renderedComponent.find("[data-test-ref='left-score']").simulate('click');
    var arrowTextAfter = renderedComponent.find("[data-test-ref='possession-arrow']").text();
    expect(arrowText).not.toBe(arrowTextAfter);
  });

  it('should set a 30 second timer anytime a timeout button is clicked', () => {
    const renderedComponent = mount(
      <FoosballRefWrapper />
    );

    var beforeTimerText = renderedComponent.find("[data-test-ref='countdown-display']").text();
    renderedComponent.find("[data-test-ref='left-timeout']").simulate('click');
    var timerText = renderedComponent.find("[data-test-ref='countdown-display']").text();
    expect(beforeTimerText).not.toBe(timerText);
    expect(timerText).toBe('30.0');
  });

});
