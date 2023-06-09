import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store'; // Import RootState from '../store/store'
import { deleteContact } from '../store/contactsSlice';
export {};

function ContactList() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

