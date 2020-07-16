import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import anecdotesService from './services/anecdotes';
import { useDispatch } from 'react-redux';
import { initAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        anecdotesService.getAll().then((anecdotes) => {
            dispatch(initAnecdotes(anecdotes));
        });
    }, [dispatch]);

    return (
        <div>
            <Notification />
            <Filter />
            <h2>Anecdotes</h2>
            <AnecdoteList />
            <h2>create new</h2>
            <AnecdoteForm />
        </div>
    );
};

export default App;
