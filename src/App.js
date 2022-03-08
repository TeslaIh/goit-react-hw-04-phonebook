import './App.styled.css';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './components/Form/Form';
import ContactItems from './components/ContactItems/ContactItems';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    };
  };
  
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...contacts],
        }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  render() {
    const VisibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <h1>My Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <ContactItems
          contacts={VisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
