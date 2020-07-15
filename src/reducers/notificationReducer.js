export const changeNotifMsg = (msg) => {
    return {
        type: 'CHANGE_NOTIF',
        msg,
    };
};

const reducer = (state = 'HELLO PEOPLE', action) => {
    switch (action.type) {
        case 'CHANGE_NOTIF':
            return (state = action.msg);

        default:
            return state;
    }
};

export default reducer;
