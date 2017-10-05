import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import PossessionArrow from '../index';

describe('<PossessionArrow />', () => {
  it('should display a left arrow if team 1 is in possession', () => {
    const renderedComponent = shallow(
      <PossessionArrow teamInPossession={1}/>
    );
    expect(renderedComponent.text()).toBe('\u2b05');
  });

  it('should display a right arrow if team 2 is in possession', () => {
    const renderedComponent = shallow(
      <PossessionArrow teamInPossession={2}/>
    );
    expect(renderedComponent.text()).toBe('\u27a1');
  });

  it('should flip the possession arrow upon clicking', () => {
    const renderedComponent = mount(
      <PossessionArrow teamInPossession={1}/>
    );

    expect(renderedComponent.text()).toBe('\u2b05');
    renderedComponent.find("[data-test-ref='possession-arrow']").simulate('click');
    expect(renderedComponent.text()).toBe('\u27a1');
  });

});
