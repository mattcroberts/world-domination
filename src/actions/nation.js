export const ACTIONS = {
    ATTACK: 'NATION/ATTACK',
    CLICK: 'NATION/CLICK',
    SET_RULER: 'NATION/SET_RULER'
};

export const attack = (aggressorPlayerId, nation) => {
    return {
        type: ACTIONS.ATTACK,
        aggressorPlayerId,
        defendingNation: nation
    };
};

export const nationClick = ({ id }) => {
    return {
        type: ACTIONS.CLICK,
        nation: {
            id
        }
    };
};

export const setNationRuler = (playerId, nationId) => {
    return {
        type: ACTIONS.SET_RULER,
        playerId,
        nation: {
            id: nationId
        }
    };
};
