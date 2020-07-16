import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { changeNotifMsg, removeNotifMsg } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

export default function AnecdoteForm() {
    const dispatch = useDispatch();

    const create = (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
        e.target.anecdote.value = '';
        anecdoteService.newAnecdote(content).then((anecdote) => {
            dispatch(createAnecdote(anecdote));
            dispatch(changeNotifMsg(`you created ${anecdote.content}`));
            setTimeout(() => {
                dispatch(removeNotifMsg());
            }, 5000);
        });
    };

    return (
        <form onSubmit={(e) => create(e)}>
            <div>
                <input name="anecdote" />
            </div>
            <button>create</button>
        </form>
    );
}
