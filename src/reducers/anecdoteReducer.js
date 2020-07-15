const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0,
    };
};

const initialState = anecdotesAtStart.map((anecdote) => asObject(anecdote));

export const createAnecdote = (anecdote) => {
    return {
        type: 'NEW_ANECDOTE',
        anecdote,
    };
};

export const voteAnecdote = (id) => {
    return {
        type: 'VOTE',
        id,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE':
            const votedAnecdote = state.find((a) => a.id === action.id);
            const changedAnecdote = { ...votedAnecdote, votes: votedAnecdote.votes + 1 };
            return state
                .map((a) => (a.id === action.id ? changedAnecdote : a))
                .sort((a, b) => b.votes - a.votes);
        case 'NEW_ANECDOTE':
            return [...state, asObject(action.anecdote)].sort((a, b) => b.votes - a.votes);
        default:
            break;
    }
    return state;
};

export default reducer;