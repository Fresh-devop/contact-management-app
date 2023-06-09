import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateContact } from '../store/contactsSlice';
export {};

function ContactForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(CreateContact({ id: Date.now().toString(), name }));
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button type="submit">Create Contact</button>
    </form>
  );
}

export default ContactForm;
