import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import imagenInicioDesk from "./../img/nuevas/fondo-tapa-escritorio2.png";
import imagenInicioMob from "./../img/nuevas/fondo-tapa-celular2.png";
import iconoCta from "./../iconos/flecha.svg";

export default function Inicio({ setIsInicio }) {
  const { width } = useWindowDimensions();
  const [isMob, setIsMob] = useState(true);

  useEffect(() => {
    width > 600 ? setIsMob(false) : setIsMob(true);
    setIsInicio(true);
    return () => setIsInicio(false);
  }, [width]);

  return (
    <>
      <div className="inicio fade-in-fwd-inicio">
        <div className="inicio-title">
          <h1>Lengua Viva</h1>
        </div>
        <div className="inicio-img">
          <img
            src={isMob ? imagenInicioMob : imagenInicioDesk}
            alt="imagen lengua viva"
          />
          <div className="cta">
            <NavLink to="/3">
              <button className="cta-boton">
                <p>PRÓXIMAS FUNCIONES</p>
                <div className="buttonIco">
                  <img src={iconoCta} alt="proximasFunciones"></img>
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
