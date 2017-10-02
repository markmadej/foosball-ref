import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Counter from '../index';


describe('<Counter />', () => {
  it('should display zero by default', () => {
    const renderedComponent = shallow(
      <Counter maxCount={2}/>
    );
    expect(renderedComponent.text()).toBe('0');
  });

  it('Should increment the counter when clicked', () => {
    const renderedComponent = mount(
      <Counter maxCount={2} />
    );
    expect(renderedComponent.text()).toBe('0');
    renderedComponent.simulate('click');
    expect(renderedComponent.text()).toBe('1');
    renderedComponent.simulate('click');
    expect(renderedComponent.text()).toBe('2');
  });

  it('should wrap around to zero after the max games are reached', () => {
    const renderedComponent = mount(
      <Counter maxCount={1} />
    );
    expect(renderedComponent.text()).toBe('0');
    renderedComponent.simulate('click');
    expect(renderedComponent.text()).toBe('1');
    renderedComponent.simulate('click');
    expect(renderedComponent.text()).toBe('0');
  });

});
