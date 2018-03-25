import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Gameboard from './index';

describe('Gameboard', () => {
    const props = {
        nations: {
            0: {},
            1: {}
        }
    };
    it('should render', () => {
        shallow(<Gameboard {...props} />);
    });

    it('should render Nation for each object provided', () => {
        const component = shallow(<Gameboard {...props} />);

        expect(component.find('Nation').length).to.equal(2);
    });
});
