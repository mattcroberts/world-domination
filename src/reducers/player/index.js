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
export default (state = defaultState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};
