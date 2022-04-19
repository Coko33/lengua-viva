import React from "react";
import CuentoOnline1 from "./../../img/CuentoOnline.png";
import "./CuentosOnline.css";
import Play from "./../../iconos/play.svg";

export default function CuentoOnline() {
  return (
    <>
      <div className="cuento-online">
        {/* <img src={CuentoOnline1}></img> */}
        <img src="https://firebasestorage.googleapis.com/v0/b/lenguaviva-d1346.appspot.com/o/fotos-galeria%2FMarianoRosas23.jpg?alt=media&token=7a9fa8bd-a3cb-4162-9c50-a9a32c0b2f1e"></img>
        <div className="cuentoOnline_descripcion">
          <div className="botonPlay">
            <img src={Play}></img>
          </div>
          <h3>Viaje al Oeste</h3>
          <p>
            Esta obra es una de las cuatro novelas más importantes de la
            literatura china tradicional, sin embargo, es muy poco conocida
            entre el público de habla hispana. Se trata de una aventura llena de
            audacia, maravilla, oscuridad y sabiduría. Un viaje a pie de la
            China hacia la Inda en busca de las escrituras Buda y la salvación
            del imperio.
          </p>
        </div>
      </div>
    </>
  );
}
