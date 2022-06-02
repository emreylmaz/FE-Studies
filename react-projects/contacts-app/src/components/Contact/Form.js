import React from 'react';

import {nanoid} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactSlice";

function Form() {
    const [name, setName] = React.useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return false;

    const names = name.split(',');



    dispatch(addContact({id:nanoid(), name}));

    setName('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} />
            </form>
        </div>
    );
}

export default Form;
