import { expect } from 'chai';
import { mapStateToProps } from './index';

const players = {
    "0": {
        color: 'red'
    }
};

it('should handle no nations', () => {

    mapStateToProps({
        nations: {},
        players
    }, {});
});

it('should map nation', () => {
    const mapped = mapStateToProps({
        nations: {
            0: {
                id: 0,
                player: 0,
                troops: 0,
                borders: []
            }
        },
        players
    }, {});

    expect(Object.keys(mapped.nations)).to.have.length(1);
});

it('should map nation properties', () => {
    const mapped = mapStateToProps({
        nations: {
            0: {
                id: 0,
                player: 0,
                troops: 0,
                borders: []
            }
        },
        players
    }, {});

    expect(mapped).to.deep.equal({
        nations: {
            0: {
                id: 0,
                player: 0,
                troops: 0,
                borders: [],
                fillColor: 'red'
            }
        }
    });
});

it('should map nation with no player', () => {
    const mapped = mapStateToProps({
        nations: {
            0: {
                id: 0,
                player: null,
                troops: 0,
                borders: []
            }
        },
        players
    }, {});

    expect(mapped).to.deep.equal({
        nations: {
            0: {
                id: 0,
                player: null,
                troops: 0,
                borders: [],
                fillColor: undefined
            }
        }
    });
});