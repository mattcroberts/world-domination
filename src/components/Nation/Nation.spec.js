import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Nation from './index';

describe('Nation', () => {
    it('should render', () => {
        shallow(<Nation />);
    });

    it('should set stroke width when selected', () => {
        const component = shallow(<Nation selected={true} />);

        expect(component.find('Path').props().strokeWidth).to.equal(0.5);
    });
});
