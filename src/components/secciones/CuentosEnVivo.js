import React, { useState, useEffect } from "react";
import "./CuentosEnVivo.css";
import EjFlyer1 from "./../../img/captura1.png";
import EjFlyer2 from "./../../img/captura2.png";
import Flechas from "./../../iconos/flechasCielo.svg";
import CuentoPasado from "./CuentoPasado";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../firebase";
import CuentoEnVivo from "./CuentoEnVivo";

export default function CuentosEnVivo() {
  const [eventos, setEventos] = useState([]);

  console.log(eventos);

  useEffect(() => {
    getEventos();
  }, []);

  useEffect(() => {
    setEventos(eventos);
  }, [eventos]);

  function getEventos() {
    const eventosConectionRef = collection(db, "eventos");

    getDocs(eventosConectionRef)
      .then((res) => {
        const evs = res.docs.map((evento) => ({
          data: evento.data(),
          id: evento.id,
        }));
        setEventos(evs);
      })
      .catch((err) => console.log(err.message));
    console.log(eventos);
  }

  return (
    <>
      <div className="seccion">
        <div className="head3">
          <div className="head3-title">
            <h1>
              <span className="spanMob">Cuentos en vivo</span>
              <span className="spanDesk">
                Cuentos<br></br>
              </span>
              <span className="spanDesk">en vivo</span>
            </h1>
          </div>
          <CuentoEnVivo></CuentoEnVivo>
          <div className="container-cuento">
            <img className="imagen-cuento" src={EjFlyer1} />
            <div className="descripcion-cuento">
              <p className="descripcion">
                Él le preguntó a dónde iba. La pobre niña, que no sabía que era
                peligroso detenerse a hablar con un lobo, le dijo: —Voy a ver a
                mi abuela, y le llevo una torta y un tarrito de mantequilla que
                mi madre le envía.
              </p>
              <p className="descripcion">
                Café Vinilo.<br></br>
                123@gmail.com
              </p>
              <button className="cta-talleres">COMPRAR</button>
            </div>
          </div>
          <div className="container-cuento">
            <img className="imagen-cuento" src={EjFlyer2} />
            <div className="descripcion-cuento">
              <p className="descripcion">
                —Pues bien, dijo el lobo, yo también quiero ir a verla; yo iré
                por este camino, y tú por aquél, y veremos quién llega primero.
              </p>
              <p className="descripcion">
                Café Vinilo.<br></br>
                123@gmail.com
              </p>
              <button className="cta-talleres">COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="cuentosPasados-title">
          <h2>Cuentos pasados</h2>
          <img src={Flechas}></img>
        </div>
        <div className="cuentosPasados-container">
          {eventos &&
            eventos.map((evento, i) => (
              <CuentoPasado evento={evento}></CuentoPasado>
            ))}
        </div>
      </div>
    </>
  );
}
