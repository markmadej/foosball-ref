import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import FoosballRefWrapper from '../index';


describe('<FoosballRefWrapper />', () => {

  it('should change the direction of the possession arrow after score changes', () => {
    const renderedComponent = mount(
      <FoosballRefWrapper />
    );
    console.log(renderedComponent.html());

    var arrowText = renderedComponent.find("[data-test-ref='possession-arrow']").text();
    renderedComponent.find("[data-test-ref='left-score']").simulate('click');
    var arrowTextAfter = renderedComponent.find("[data-test-ref='possession-arrow']").text();
    expect(arrowText).not.toBe(arrowTextAfter);
  });

});
