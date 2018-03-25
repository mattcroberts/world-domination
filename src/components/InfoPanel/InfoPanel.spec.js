import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import InfoPanel from './index';

describe('InfoPanel', () => {
    const props = { currentPlayer: { name: 'Matt' }, attackTargets: [] };
    it('should render', () => {
        shallow(<InfoPanel {...props} />);
    });

    it('should render player name', () => {
        const component = shallow(<InfoPanel {...props} />);
        expect(component.find('[data-qaId="playerName"]').text()).to.equal(
            'Matt'
        );
    });
});
