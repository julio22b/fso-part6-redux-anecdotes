export const changeNotifMsg = (msg) => {
    return {
        type: 'CHANGE_NOTIF',
        msg,
    };
};

export const removeNotifMsg = (msg = 'HELLLO PEOPLE') => {
    return {
        type: 'REMOVE_NOTIF',
        msg,
    };
};

export const setNotification = (content, timeOut) => {
    return async (dispatch) => {
        dispatch(changeNotifMsg(`you voted for ${content}`));
        setTimeout(() => {
            dispatch(removeNotifMsg());
        }, timeOut);
    };
};

const reducer = (state = 'HELLO PEOPLE', action) => {
    switch (action.type) {
        case 'CHANGE_NOTIF':
            return (state = action.msg);
        case 'REMOVE_NOTIF':
            return (state = action.msg);
        default:
            return state;
    }
};

export default reducer;
