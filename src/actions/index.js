export const actions = {
    NATION_CLICK: 'NATION_CLICK',
    NATION_INIT: 'NATION_INIT',
    'NATION_SET-RULER': 'NATION_SET-RULER'
};

export const nationClick = ({ id }) => {
    return {
        type: 'NATION_CLICK',
        nation: {
            id
        }
    };
};

export const nationInit = ({ id }) => {
    return {
        type: 'NATION_INIT',
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
