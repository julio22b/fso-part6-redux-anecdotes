import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

export default function AnecdoteList() {
    const dispatch = useDispatch();
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter) {
            return anecdotes.filter((a) => a.content.toLowerCase().includes(filter));
        }
        return anecdotes;
    });

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote));
        dispatch(setNotification(anecdote.content, 10000));
    };

    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div style={voteStyle}>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    );
}

const voteStyle = {
    backgroundColor: '#cdcdcd',
};
