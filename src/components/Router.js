import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cursos from "./Cursos";
import Header from "./Header";
import SingleCurso from "./SingleCurso";
import Error from "./Error";
import info from "../datos/datos.json";

class Router extends Component {
  state = {
    cursos: info,
    terminoBusqueda: ""
  };

  busquedaCurso = busqueda => {
    if (busqueda.length > 1) {
      this.setState({
        terminoBusqueda: busqueda
      });
    } else {
      this.setState({
        terminoBusqueda: ""
      });
    }
  }

  render() {
    let cursos = [...this.state.cursos]; //copia del state
    let busqueda = this.state.terminoBusqueda;
    let resultado;

    if (busqueda !== "") {
      resultado = cursos.filter(
        cc => cc.curso.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
      );
    } else {
      resultado = cursos;
    }

    return (
      <BrowserRouter>
        <Header titulo="Links Cursos" />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Cursos cursos={resultado} busquedaCurso={this.busquedaCurso} />
            )}
          />
          <Route
            exact
            path="/curso/:cursoid"
            render={props => {
              let idProducto = props.location.pathname.replace("/curso/", "");
              return <SingleCurso curso={this.state.cursos[idProducto]} />;
            }}
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
