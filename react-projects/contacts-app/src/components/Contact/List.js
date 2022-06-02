import React from 'react';


import {useSelector, useDispatch} from "react-redux";
import {contactSelectors, removeAllContacts} from "../../redux/contactSlice";
import Item from "./Item";

function List() {
    const dispatch = useDispatch();

    const contacts = useSelector(contactSelectors.selectAll);
    const total = useSelector(contactSelectors.selectTotal);

    const handleDeleteALl = () => {
        if (window.confirm('Are you sure?')) {
            dispatch(removeAllContacts());
        }
    }

    return (
       <div>
           { total > 0 && (
               <div className="deleteAllBtn" onClick={handleDeleteALl}>
                   DeleteAll
               </div>
           )

           }

           <ul className="list">
               {
                   contacts.map(contact => (<Item key={contact.id} item={contact} />))
               }
           </ul>
       </div>
    );
}

export default List;