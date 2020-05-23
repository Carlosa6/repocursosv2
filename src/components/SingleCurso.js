import React from "react";

const SingleCurso = (props) => {
  
  if (!props.curso) return null;

  const {
    imagen,
    descripcion,
    curso,
    categoria,
    autor,
    peso,
    link
  } = props.curso;

  return (
    <div className="card mx-auto mb-3 mt-5 ancho">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`/img/${imagen}`}
            className="card-img img-fluid"
            alt={curso}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{curso}</h3>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">Categoría : {categoria}</p>
            <p className="card-text">Autor : {autor}</p>
            <p className="card-text">
              <small className="text-muted">Peso : {peso}</small>
            </p>
            <a href={link} className="btn btn-warning">
              Ir a descargar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCurso;
