import React from 'react';
import { changeFilter } from '../reducers/filterReducer';
import { useDispatch } from 'react-redux';

export default function Filter() {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const filter = e.target.value;
        dispatch(changeFilter(filter));
    };
    return (
        <div>
            <input type="text" name="filter" onChange={(e) => handleChange(e)} />
        </div>
    );
}
