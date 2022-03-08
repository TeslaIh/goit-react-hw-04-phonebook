import React from "react";
import PropTypes from "prop-types";
import "./ContactDelete.css";

const ContactDelete = ({ name, number }) => (
  <p className="contactText">
    {name}: {number}
  </p>
);

ContactDelete.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactDelete;