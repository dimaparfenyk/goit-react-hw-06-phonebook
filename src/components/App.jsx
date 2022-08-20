import React, {useState, useEffect} from "react";
import { nanoid } from "nanoid";
import {ContactForm} from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Box } from "./App.styled";

export const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {

    const newContact = {
      name,
      number,
      id: nanoid()
    }
    
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contact!`)
      return
    };

    setContacts([...contacts, newContact])
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(
      contacts.filter(contact => contact.id !== id)
    )
  }
  
  const getVisibleContacts = () => {

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}
      />
    
      <h2>Contacts</h2>
      <Box>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        
        <ContactList
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Box>
    </Container>
  );
};

 