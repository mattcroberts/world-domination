export const ACTIONS = {
    END_TURN: 'GAME/END_TURN'
};

export const endTurn = player => {
    return {
        type: ACTIONS.END_TURN,
        player
    };
};
