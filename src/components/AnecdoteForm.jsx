import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

export default function AnecdoteForm() {
    const dispatch = useDispatch();

    const create = (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
        e.target.anecdote.value = '';
        dispatch(createAnecdote(content));
        dispatch(setNotification(content, 10000));
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
