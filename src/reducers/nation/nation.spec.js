import { expect } from 'chai';

import nationReducer from './index';
import { nationClick } from '../../actions';

describe('NATION_CLICK', () => {
    let state;

    beforeEach(() => {
        state = {
            1: {
                id: '1',
                selected: false,
                player: null,
                borders: [],
                troops: 0
            },
            2: {
                id: '2',
                selected: false,
                player: null,
                borders: [],
                troops: 0
            },
            3: {
                id: '3',
                selected: false,
                player: null,
                borders: [],
                troops: 0
            }
        };
    });

    it('should select nation', () => {
        const result = nationReducer(state, nationClick({ id: '1' }));
        expect(result[1].selected).to.equal(true);
    });

    it('should only have one selected nation', () => {
        state[2].selected = true;
        const result = nationReducer(state, nationClick({ id: '1' }));
        expect(
            Object.values(result).filter(nation => nation.selected)
        ).to.have.length(1);
    });
});
