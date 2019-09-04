//Importando biblioteca react e react-dom
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
//Importando biblioteca PropTypes
import PropTypes from "prop-types";

class Button extends Component {
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

//Classe padrão para a exibição do conteúdo
class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  dishandleClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  setZero = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      //Para chamar mais de um component dentro de outro, é necessário coloca-los dentro de uma Div ou usar Fragment Component
      <Fragment>
        <h1>Hello React</h1>
        <Button onClick={this.handleClick}>+</Button>

        <h2>{this.state.counter}</h2>

        <Button onClick={this.dishandleClick} />
        <Button onClick={this.setZero}>Zerar</Button>
      </Fragment>
    );
  }
}
//Chamando component que será exibido no HTML e em qual div será exibido
render(<App />, document.getElementById("app"));
