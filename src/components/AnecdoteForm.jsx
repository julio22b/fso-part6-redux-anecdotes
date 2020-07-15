import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

export default function AnecdoteForm() {
    const dispatch = useDispatch();

    const create = (e) => {
        e.preventDefault();
        const anecdote = e.target.anecdote.value;
        e.target.anecdote.value = '';
        dispatch(createAnecdote(anecdote));
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
