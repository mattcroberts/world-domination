import { shallow } from 'enzyme';
import React from 'react';

import Dialog from './index';

describe('Dialog', () => {
    it('should render', () => {
        const component = shallow(<Dialog />);

        expect(component).toMatchSnapshot();
    });

    it('should show when visible prop is true', () => {
        const component = shallow(<Dialog visible={true} />);
        expect(component).toMatchSnapshot();
        expect(component.find('form').hasClass('show')).toEqual(true);
    });

    it('should hide when visible prop is false', () => {
        const component = shallow(<Dialog visible={false} />);
        expect(component.find('form').hasClass('show')).toEqual(false);
    });
});
