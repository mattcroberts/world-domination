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

// it('should not map nation targets when there are < 2 troops', () => {
//     const mapped = mapStateToProps(
//         {
//             nations: {
//                 0: {
//                     id: 0,
//                     player: 0,
//                     troops: 1,
//                     borders: [1]
//                 },
//                 1: {
//                     id: 1,
//                     player: 1,
//                     troops: 100,
//                     borders: [0]
//                 }
//             },
//             players
//         },
//         {}
//     );

//     console.log(mapped);
//     expect(mapped.nations[0].targets).to.be.an('Array');
//     expect(mapped.nations[0].targets).to.not.include(1);
// });

// it('should map nation borders', () => {
//     const mapped = mapStateToProps(
//         {
//             nations: {
//                 0: {
//                     id: 0,
//                     player: 0,
//                     troops: 0,
//                     borders: [1]
//                 }
//             },
//             players
//         },
//         {}
//     );

//     expect(mapped.nations[0].borders).to.be.an('Array');
//     expect(mapped.nations[0].borders).to.include(1);
// });

describe('Controls mapStateToProps', () => {
    it('should map currentPlayerId', () => {
        const result = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [1]
                    }
                },
                players,
                game
            },
            {}
        );

        expect(result.currentPlayerId).to.equal(0);
    });

    it('should map selectedNation', () => {
        const result = mapStateToProps(
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

        expect(result.selectedNation).to.deep.equal({
            id: 0,
            player: 0,
            troops: 0,
            borders: [1],
            selected: true
        });
    });

    it('should map attackTargets', () => {
        const result = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [1]
                    }
                },
                players,
                game
            },
            {}
        );

        expect(result.attackTargets).to.be.an('array');
    });

    it('should map selectedNation', () => {
        const result = mapStateToProps(
            {
                nations: {
                    0: {
                        id: 0,
                        player: 0,
                        troops: 0,
                        borders: [1]
                    }
                },
                players,
                game
            },
            {}
        );

        expect(result.selectedNation).to.not.exist;
    });
});
