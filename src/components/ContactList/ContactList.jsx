import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { List, ListItem, Button, Text,SubText } from "./ContactList.styled";


export const ContactList = ({contacts, deleteContact}) => {
    
    return (<List>
        {contacts.map(({ name, number, id}) =>
            <ListItem key={nanoid()}>
                <SubText>{name}:</SubText>
                <Text>{number}</Text>
                <Button onClick={() => deleteContact(id)}>Удалить</Button>
            </ListItem>
        )}
    </List>)
};

ContactList.proptype = {
    deleteContact:PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
  ),
};
  
