import React from "react";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={props.imagen} alt="Foto 1" />
      <div className="contenedor-texto">
        <p className="name-country">
          <strong>{props.nombre}</strong> in {props.country}</p>
        <p className="cargo">
          {props.cargo} at <strong>{props.empresa}</strong>
        </p>
        <p className="texto">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
