export const actions = {
    'NATION_ATTACK': 'NATION_ATTACK',
    'NATION_CLICK': 'NATION_CLICK',
    'NATION_INIT': 'NATION_INIT',
    'NATION_SET-RULER': 'NATION_SET-RULER',
    'END_TURN': 'END_TURN'
};

export const nationClick = ({ id }) => {
    return {
        type: actions.NATION_CLICK,
        nation: {
            id
        }
    };
};

export const nationInit = ({ id }) => {
    return {
        type: actions.NATION_INIT,
        nation: {
            id
        }
    };
};

export const setNationRuler = (playerId, nationId) => {
    return {
        type: actions['NATION_SET-RULER'],
        playerId,
        nation: {
            id: nationId
        }
    };
};

export const endTurn = player => {
    return {
        type: actions.END_TURN,
        player
    };
};

export const attack = (aggressorPlayerId, nation) => {
    return {
        type: actions.NATION_ATTACK,
        aggressorPlayerId,
        defendingNation: nation
    };
};
