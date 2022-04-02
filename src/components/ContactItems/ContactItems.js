import React from "react";
import PropTypes from "prop-types";
import ContactDelete from "./ContactDelete";
import { Item } from "./ContactItems.styled";

const ContactItems = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id} className="contactDelete">
          <ContactDelete
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </Item>
      ))}
    </ul>
  );
};

ContactItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactItems;
