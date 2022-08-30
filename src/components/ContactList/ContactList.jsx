import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from "components/redux/features/contactSlice";
import { List, ListItem, Button, Text,SubText } from "./ContactList.styled";

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch= useDispatch()

    return (<List>
        {contacts.map(({ name, number, id}) =>
            <ListItem key={id}>
                <SubText>{name}:</SubText>
                <Text>{number}</Text>
                <Button onClick={() => dispatch(removeContact(id))}>Удалить</Button>    
            </ListItem>
        )}
    </List>)
};

ContactList.proptype = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
  ),
};
  
