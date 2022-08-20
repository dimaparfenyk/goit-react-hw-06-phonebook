import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import { Button, Container, Label, FormInput} from "./ContactForm.styled";


export function ContactForm({onSubmit}) {
    const [ name, setName ] = useState('');
    const  [number, setNumber]  = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();

   const handleChange = e => {
        const { name, value } = e.currentTarget;
    
       switch (name) {
           case 'name':
               setName(value)
               break;
           
           case 'number':
               setNumber(value)
               break; 
           
           default:
               return;
       }
    };

    const  handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    };
    
    return (
            <form onSubmit={handleSubmit}>
                <Container>
                <Label htmlFor={nameInputId}>Name
                    <FormInput
                        type="text"
                        name="name"
                        id={nameInputId}
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label htmlFor={numberInputId}>Number
                    <FormInput
                        type="tel"
                        name="number"
                        id={numberInputId}
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
        
                <Button
                    type="submit">
                    Add Contact
                    </Button>
            </Container>
            </form>
        );
} 

ContactForm.propTypes =
    { onSubmit: PropTypes.func.isRequired };