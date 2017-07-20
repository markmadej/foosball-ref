import React from 'react';
import { shallow } from 'enzyme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import TimeOutBox from '../index';


describe('<TimeOutBox />', () => {
  it('should contain 2 buttons - plus and minus with data-test-ref attributes', () => {
    const renderedComponent = shallow(
      <TimeOutBox />
    );
    expect(renderedComponent.find(FloatingActionButton).length).toBe(2);
    expect(renderedComponent.find(ContentAdd).length).toBe(1);
    expect(renderedComponent.find(ContentRemove).length).toBe(1);
    expect(renderedComponent.find('[data-test-ref]').length).toBe(2);
  });

});
