import React, { Component } from 'react';

class Buscador extends Component{
  
  leerDatos = e => {
      const termino = e.target.value;
      //enviar por  props al componentes principal
      this.props.busqueda(termino);
  }
  
  render(){
    return(
      <form className="mt-4 mb-4">
          <h3 className="text-center text-white mb-4">Buscar Curso</h3>
          <div className="form-group">
              <input type="text" className="form-control" placeholder="Ingresa nombre del curso" onChange={this.leerDatos} />
          </div>
      </form>
    )
  }
}

export default Buscador;