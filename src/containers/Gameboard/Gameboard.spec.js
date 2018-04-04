import { shallow } from 'enzyme';
import React from 'react';

import { GameboardContainer } from './index';

describe('GameboardContainer', () => {
    const nations = {};
    it('should render', () => {
        const component = shallow(
            <GameboardContainer
                nations={nations}
                nationClick={() => undefined}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
