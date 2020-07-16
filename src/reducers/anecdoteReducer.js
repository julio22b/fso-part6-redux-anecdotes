import anecdoteService from '../services/anecdotes';

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.newAnecdote(content);
        dispatch({
            type: 'NEW_ANECDOTE',
            payload: newAnecdote,
        });
    };
};

export const voteAnecdote = (anecdote) => {
    return async (dispatch) => {
        const votedAnecdote = await anecdoteService.voteAnecdote(anecdote);
        dispatch({
            type: 'VOTE',
            id: votedAnecdote.id,
        });
    };
};

export const initAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll();
        dispatch({
            type: 'INIT_ANECDOTES',
            anecdotes,
        });
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
            return action.anecdotes.sort((a, b) => b.votes - a.votes);
        default:
            break;
    }
    return state;
};

export default reducer;
