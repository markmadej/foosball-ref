import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import FoosballRefWrapper from '../index';
import messages from '../messages';

describe('<FoosballRefWrapper />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <FoosballRefWrapper />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
