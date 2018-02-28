const defaultState = {
    0: {
        name: 'Matt',
        color: '#ff0000'
    },
    1: {
        name: 'Other Player',
        color: '#000000'
    }
};
export const getPlayerById = (state, playerId) => state.players[playerId];

export default (state = defaultState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};
