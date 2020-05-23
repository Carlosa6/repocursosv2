import React, { Component } from "react";
import Curso from "./Curso";
import Buscador from './Buscador';

class Cursos extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4 p-4">
        <Buscador busqueda={this.props.busquedaCurso} />
        <div className="row match-height my-4">
          {Object.keys(this.props.cursos).map(cc => (
            <Curso informacion={this.props.cursos[cc]} key={cc} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cursos;
