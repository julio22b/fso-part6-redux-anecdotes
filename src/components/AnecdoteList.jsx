import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

export default function AnecdoteList() {
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state);
    console.log(anecdotes);

    const vote = (id) => {
        dispatch(voteAnecdote(id));
    };

    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div style={voteStyle}>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    );
}

const voteStyle = {
    backgroundColor: '#cdcdcd',
};
