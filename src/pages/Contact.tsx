import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm';
export {};

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Link to="/contact/new">Create Contact</Link>
      <ContactForm />
      <ContactList />
    </div>
  );
}
export default Contact;
