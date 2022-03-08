import React from "react";
import PropTypes from "prop-types";
import ContactDelete from "./ContactDelete";
import { Item, Button } from "./ContactItems.styled";

const ContactItems = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <Item key={id} className="contactDelete">
                <ContactDelete id={id} name={name} number={number} />
                    <Button type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </Button>
                </Item>
            ))}
        </ul>
    );
}

ContactItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItems;
