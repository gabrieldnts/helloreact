import React from "react";
import PropTypes from "prop-types";

// Sintaxe utilizada para Stateless Component
const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "-"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
