import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Controls from './index';

describe('Controls', () => {
    const controls = { attack: true };

    it('should render', () => {
        shallow(<Controls controlEnabled={controls} />);
    });

    it('should disable attack button', () => {
        const component = shallow(<Controls controlEnabled={controls} />);
        expect(
            component.find('[data-qaId="attack"]').props().disabled
        ).to.equal(false);
    });

    it('should enable attack button', () => {
        const component = shallow(
            <Controls controlEnabled={{ attack: false }} />
        );
        expect(
            component.find('[data-qaId="attack"]').props().disabled
        ).to.equal(true);
    });
});
