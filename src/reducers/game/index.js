import { actions } from '../../actions';

const defaultState = {
    currentPlayerId: 0,
    playerCount: 2
};

const getNextPlayerId = (currentPlayerId, playerCount) =>
    currentPlayerId + 1 < playerCount ? currentPlayerId + 1 : 0;

export default (state = defaultState, action) => {
    switch (action.type) {
    case actions.END_TURN:
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
