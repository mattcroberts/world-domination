import { expect } from 'chai';
import { mapStateToProps } from './index';

const players = {
    '0': {
        color: 'red'
    },
    '1': {
        color: 'blue'
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

it('should map nation id', () => {
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

    expect(mapped.nations[0]).to.have.property('id', 0);
});

it('should map nation player', () => {
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

    expect(mapped.nations[0]).to.have.property('player', 0);
});

it('should map nation troops', () => {
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

    expect(mapped.nations[0]).to.have.property('troops', 0);
});

it('should map nation borders', () => {
    const mapped = mapStateToProps({
        nations: {
            0: {
                id: 0,
                player: 0,
                troops: 0,
                borders: [1]
            }
        },
        players
    }, {});

    expect(mapped.nations[0].borders).to.be.an('Array');
    expect(mapped.nations[0].borders).to.include(1);
});


it('should map nation targets', () => {
    const mapped = mapStateToProps({
        nations: {
            0: {
                id: 0,
                player: 0,
                troops: 100,
                borders: [1]
            },
            1: {
                id: 1,
                player: 1,
                troops: 100,
                borders: [0]
            }
        },
        players
    }, {});

    expect(mapped.nations[0].targets).to.be.an('Array');
    expect(mapped.nations[0].borders).to.include(1);
});

it('should not map nation targets when there are < 2 troops', () => {
    const mapped = mapStateToProps({
        nations: {
            0: {
                id: 0,
                player: 0,
                troops: 1,
                borders: [1]
            },
            1: {
                id: 1,
                player: 1,
                troops: 100,
                borders: [0]
            }
        }, 
        players
    }, {});

    expect(mapped.nations[0].targets).to.be.an('Array');
    expect(mapped.nations[0].targets).to.not.include(1); 
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

    expect(mapped.nations[0]).to.have.property('player', null);
});