export const actions = {
    NATION_CLICK: 'NATION_CLICK',
    NATION_INIT: 'NATION_INIT'
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
