const defaultState = {
    0: {
        name: 'Matt',
        color: 'red'
    },
    1: {
        name: 'Other Player',
        color: 'blue'
    }
};
export const getPlayerById = (state, playerId) => state.players[playerId];
export const getCurrentPlayer = (state) => state.players[state.game.currentPlayerId];

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
