import React, {useState} from "react";
import {ContactForm} from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Box } from "./App.styled";

export const App = () => {

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);


  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  // const deleteContact = id => {
  //   setContacts(
  //     contacts.filter(contact => contact.id !== id)
  //   )
  // }
  
  // const getVisibleContacts = () => {

  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter));
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm 
      />
    
      <h2>Contacts</h2>
      <Box>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        
        <ContactList/>
      </Box>
    </Container>
  );
};

 