import { ACTIONS } from '../../actions/game';

const defaultState = {
    currentPlayerId: 0,
    playerCount: 2
};

const getNextPlayerId = (currentPlayerId, playerCount) =>
    currentPlayerId + 1 < playerCount ? currentPlayerId + 1 : 0;

export default (state = defaultState, action) => {
    switch (action.type) {
    case ACTIONS.END_TURN:
        return Object.assign({}, state, {
            currentPlayerId: getNextPlayerId(
                state.currentPlayerId,
                state.playerCount
            )
        });
    default:
        return state;
    }
};
