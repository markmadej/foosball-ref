/*
* The CountdownTimerDisplay is a presentational component that has 3 visual
* elements:
* - 1 display panel that shows the current timer (if it's running)
* - Buttons that start a timer running in the display panel for various times.
*/
import React from 'react';
import { shallow, mount } from 'enzyme';

import CountdownTimerDisplay from '../index';


describe('<CountdownTimerDisplay />', () => {

  it('should have display 10 second and 15 second timer buttons if the game type is standard', () => {
    //"standard" game type should be the default also.
    const renderedComponent = mount(
      <CountdownTimerDisplay running={false} startTimer={ ()=>{} /* no-op for test */ } />
    );
    var timerButtons = renderedComponent.find('.timerButton');
    expect(timerButtons.length).toBe(2);
    var found10 = false;
    var found15 = false;
    for (var i = 0; i <= 1; i++) {
      var button = timerButtons.at(i);
      var buttonText = button.text();
      if (buttonText === "10") {
        found10 = true;
      } else if (buttonText === "15") {
        found15 = true;
      }
    }
    expect(found10).toBe(true);
    expect(found15).toBe(true);
  });

  it('should show the seconds passed through the currentTime prop in the displayPanel', () => {
    const renderedComponent = mount(
      <CountdownTimerDisplay currentTime="14.5" startTimer={ ()=>{} /* no-op for test */ } />
    );
    var displayPanel = renderedComponent.find('.displayPanel');
    expect(displayPanel.text()).toBe("14.5");
  });

});
