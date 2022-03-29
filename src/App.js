import './App.styled.css';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ContactForm from './components/Form/Form';
import ContactItems from './components/ContactItems/ContactItems';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = event => {
    setFilter(event.currentTarge.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase());

    checkUser
      ? alert(`${name} is already in the contacts`)
      : setContacts([...contacts, newContact]);
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
      <div className="App">
        <h1>My Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactItems
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
}
