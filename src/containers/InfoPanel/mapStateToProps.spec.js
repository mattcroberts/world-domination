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

describe('InfoPanel mapStateToProps', () => {
    it('should handle no nations', () => {
        const mapped = mapStateToProps(
            {
                nations: {},
                players,
                game
            },
            {}
        );

        expect(mapped.selectedNation).to.be.null;
    });

    it('should map nation', () => {
        const mapped = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [],
                        selected: true
                    }
                },
                players,
                game
            },
            {}
        );

        expect(mapped.selectedNation).to.deep.equal({
            id: 0,
            player: 0,
            troops: 0,
            borders: [],
            selected: true
        });
    });

    it('should map nation id', () => {
        const mapped = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [],
                        selected: true
                    }
                },
                players,
                game
            },
            {}
        );

        expect(mapped.selectedNation).to.have.property('id', 0);
    });

    it('should map nation player', () => {
        const mapped = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [],
                        selected: true
                    }
                },
                players,
                game
            },
            {}
        );

        expect(mapped.selectedNation).to.have.property('player', 0);
    });

    it('should map nation troops', () => {
        const mapped = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [],
                        selected: true
                    }
                },
                players,
                game
            },
            {}
        );

        expect(mapped.selectedNation).to.have.property('troops', 0);
    });

    it('should map nation borders', () => {
        const mapped = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [1],
                        selected: true
                    },
                    1: {
                        id: 1,
                        player: 1,
                        troops: 0,
                        borders: [0],
                        selected: false
                    }
                },
                players,
                game
            },
            {}
        );

        expect(mapped.selectedNation.borders).to.be.an('Array');
        expect(mapped.selectedNation.borders).to.include(1);
    });

    it('should map attackTargets', () => {
        const mapped = mapStateToProps(
            {
                players,
                game,
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 100,
                        borders: [1],
                        selected: true
                    },
                    1: {
                        id: 1,
                        player: 1,
                        troops: 100,
                        borders: [0],
                        selected: false
                    }
                },
                players
            },
            {}
        );

        expect(mapped.attackTargets).to.be.an('Array');
        expect(mapped.attackTargets).to.include(1);
    });

    it('should map invasion targets', () => {
        const mapped = mapStateToProps(
            {
                players,
                game,
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 100,
                        borders: [1],
                        selected: true
                    },
                    1: {
                        id: 1,
                        player: null,
                        troops: 0,
                        borders: [0],
                        selected: false
                    }
                },
                players
            },
            {}
        );

        expect(mapped.invasionTargets).to.be.an('Array');
        expect(mapped.invasionTargets).to.include(1);
    });
});
