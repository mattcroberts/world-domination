export const ACTIONS = {
    REQUEST: 'ASYNC/REQUEST',
    RESPONSE: 'ASYNC/RESPONSE',
    ERROR: 'ASYNC/ERROR'
};

export const request = () => {
    return {
        type: ACTIONS.REQUEST
    };
};

export const response = () => {
    return {
        type: ACTIONS.RESPONSE
    };
};

export const error = () => {
    return {
        type: ACTIONS.ERROR
    };
};

export const fetchData = url => dispatch => {
    dispatch(request());
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ myData: 1 });
        }, 500);
    })
        // .then(resp => resp.json())
        .then(resp => {
            dispatch(response(resp));
        })
        .catch(err => {
            dispatch(error(err));
        });
};
