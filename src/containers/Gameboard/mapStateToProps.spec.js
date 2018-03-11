import { expect } from 'chai';
import { mapStateToProps } from './index';

const players = {
    0: {
        color: 'red'
    },
    1: {
        color: 'blue'
    }
};

const game = {
    currentPlayerId: 0
};

describe('Gameboard mapStateToProps', () => {
    it('should map nation', () => {
        const mapped = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: []
                    }
                },
                players
            },
            {}
        );

        expect(mapped.nations[0]).to.have.property('id', 0);
        expect(mapped.nations[0]).to.have.property('player', 0);
        expect(mapped.nations[0]).to.have.property('troops', 0);
        expect(mapped.nations[0].borders).to.be.an('array');
    });

    it('should map nation fillColor', () => {
        const mapped = mapStateToProps(
            {
                players,
                game,
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
            },
            {}
        );

        expect(mapped.nations[0].fillColor).to.equal('red');
    });
});
