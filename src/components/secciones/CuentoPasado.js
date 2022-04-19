import React from "react";
import ImgCuentoPasado from "./../../img/captura1.png";
import Flechas from "./../../iconos/flechas.svg";
import "./CuentoPasado.css";

export default function CuentoPasado({ evento }) {
  return (
    <>
      <div className="cuentoPasado-container">
        <div className="cuentoPasado-imagen">
          <img className="flyer" src={evento.data.url}></img>
          <img className="flechas" src={Flechas}></img>
        </div>
        <p className="descripcion">
          {evento.data.descripcion}
          {/* La cándida abuela, que estaba en cama porque no se sentía bien, le
          gritó: —Tira la aldaba y el cerrojo caerá. */}
        </p>
        <p className="descripcion">
          Café Vinilo.<br></br>
          123@gmail.com
        </p>
      </div>
    </>
  );
}
