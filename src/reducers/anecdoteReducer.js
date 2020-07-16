export const createAnecdote = (anecdote) => {
    return {
        type: 'NEW_ANECDOTE',
        payload: anecdote,
    };
};

export const voteAnecdote = (id) => {
    return {
        type: 'VOTE',
        id,
    };
};

export const initAnecdotes = (anecdotes) => {
    return {
        type: 'INIT_ANECDOTES',
        anecdotes,
    };
};

const reducer = (state = [], action) => {
    console.log('action:', action);
    switch (action.type) {
        case 'VOTE':
            const votedAnecdote = state.find((a) => a.id === action.id);
            const changedAnecdote = { ...votedAnecdote, votes: votedAnecdote.votes + 1 };
            return state
                .map((a) => (a.id === action.id ? changedAnecdote : a))
                .sort((a, b) => b.votes - a.votes);
        case 'NEW_ANECDOTE':
            return [...state, action.payload].sort((a, b) => b.votes - a.votes);
        case 'INIT_ANECDOTES':
            return action.anecdotes;
        default:
            break;
    }
    return state;
};

export default reducer;
