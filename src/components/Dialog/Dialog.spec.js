import { shallow } from 'enzyme';
import React from 'react';

import Dialog from './index';

describe('Dialog', () => {
    it('should render', () => {
        shallow(<Dialog />);
    });
});
