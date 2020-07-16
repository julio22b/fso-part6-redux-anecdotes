const baseUrl = 'http://localhost:3004/anecdotes';

const getAll = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
};

const newAnecdote = async (content) => {
    const response = await fetch(baseUrl, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, votes: 0 }),
    });

    return await response.json();
};

export default {
    getAll,
    newAnecdote,
};
