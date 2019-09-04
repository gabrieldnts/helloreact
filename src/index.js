//Importando biblioteca react e react-dom
import React, { Component, Fragment } from "react";
import { render } from "react-dom";

//Importando Components de outro arquivo
import Button from "./Button";

//Classe padrão para a exibição do conteúdo
class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10 && nextState.counter >= -10;
  }
  componentDidUpdate(prevProps, prevState) {
    return alert("Adicionado ao carrinho!");
  }

  componentWillAmount() {}

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
