import React from "react";
import propTypes from "prop-types";
import "./ContactDelete.css";

const ContactDelete = ({ name, number, id, onDeleteContact }) => (
  <p className="contactText">
    {name}: {number}
    <button
      className="button"
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </p>
);

ContactDelete.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactDelete;

