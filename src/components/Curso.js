import React from "react";
import { Link } from "react-router-dom";

const Curso = props => {
  const { curso, autor, categoria, peso, link, imagen, id } = props.informacion;
  return (
    <div className="col-xl-4 col-md-4 col-sm-12 my-4">
      <div className="card bg-secondary my-4">
        <img src={`img/${imagen}`} className="card-img-top" alt={curso} />
        <div className="card-body">
          <h2 className="card-title">{curso}</h2>
          <p className="card-text">Categoría : {categoria}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Autor : {autor}</li>
          <li className="list-group-item">Peso : {peso}</li>
        </ul>
        <div className="card-body">
          <a href={link} className="card-link btn btn-success">
            Ir a Descargar
          </a>
          <Link to={`/curso/${id}`} className="card-link btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curso;
