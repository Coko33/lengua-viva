import React from "react";
import EjFlyer1 from "./../../img/captura1.png";

export default function CuentoEnVivo() {
  return (
    <>
      <div className="container-cuento">
        <img className="imagen-cuento" src={EjFlyer1} />
        <div className="descripcion-cuento">
          <p className="descripcion">
            Él le preguntó a dónde iba. La pobre niña, que no sabía que era
            peligroso detenerse a hablar con un lobo, le dijo: —Voy a ver a mi
            abuela, y le llevo una torta y un tarrito de mantequilla que mi
            madre le envía.
          </p>
          <p className="descripcion">
            Café Vinilo.<br></br>
            123@gmail.com
          </p>
          <button className="cta-talleres">COMPRAR</button>
        </div>
      </div>
    </>
  );
}
