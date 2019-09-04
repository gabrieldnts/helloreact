//Importando biblioteca react e react-dom
import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  //único método obrigatório de um Component
  render() {
    return (
      <a onClick={this.props.onClick} href="">
        Google
      </a>
    );
  }
}
class Input extends Component {
  render() {
    return <input placeholder="Pesquise aqui"></input>;
  }
}

//Classe padrão para a exibição do conteúdo
class App extends Component {
  handleClick() {
    alert("google");
  }
  render() {
    return (
      //Para chamar mais de um component dentro de outro, é necessário coloca-los dentro de uma Div ou usar Fragment Component
      <Fragment>
        <h1>Hello React</h1>
        <Button onClick={this.handleClick}></Button>
        <Input />
      </Fragment>
    );
  }
}
//Chamando component que será exibido no HTML e em qual div será exibido
render(<App />, document.getElementById("app"));
