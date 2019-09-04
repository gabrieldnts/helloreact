import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  //Props default para quando o button não tiver valores atribuidos
  static defaultProps = {
    children: "-"
  };
  //Props default para quando o button não tiver funções atribuidas
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };
  //único método obrigatório de um Component
  render() {
    return (
      //passando os valores para o componet gerados no App Component
      <button onClick={this.props.onClick} href="">
        {this.props.children}
      </button>
    );
  }
}
