import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { changeNotifMsg, removeNotifMsg } from '../reducers/notificationReducer';

export default function AnecdoteList() {
    const dispatch = useDispatch();
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        if (filter) {
            return anecdotes.filter((a) => a.content.toLowerCase().includes(filter));
        }
        return anecdotes;
    });
    console.log(anecdotes);

    const vote = (id, content) => {
        dispatch(voteAnecdote(id));
        dispatch(changeNotifMsg(`you voted for ${content}`));
        setTimeout(() => {
            dispatch(removeNotifMsg());
        }, 5000);
    };

    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div style={voteStyle}>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    );
}

const voteStyle = {
    backgroundColor: '#cdcdcd',
};
