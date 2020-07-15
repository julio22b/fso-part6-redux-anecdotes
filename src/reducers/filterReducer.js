export const changeFilter = (filter) => {
    return {
        type: 'FILTER',
        filter,
    };
};

const reducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            return (state = action.filter);
        default:
            return state;
    }
};

export default reducer;
