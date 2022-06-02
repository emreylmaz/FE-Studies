import React from 'react';

import {useDispatch} from "react-redux";
import {updateContact} from "../../redux/contactSlice";

function EditForm({contact}) {
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();

        if (!name || !number) return false;

        dispatch(updateContact({id:contact.id,
        changes:{
            name,
            phone_number: number
        }
        }));
        setNumber('');
        setName('');
    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                EditForm
                <input placeholder="name" value={name}/>
                <input placeholder="phone number" value={number} />
                <div className="btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;