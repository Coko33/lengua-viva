import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import flechaNar from "./../iconos/flechaNar.svg";
import cruz from "./../iconos/cruz.svg";

export default function Menu({ isOpen, closeModal }) {
  const [seccion, setSeccion] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  let { pathname } = useLocation();
  pathname = pathname.substring(1);

  useEffect(() => {
    setSeccion(parseInt(pathname));
  }, [pathname]);

  const cerrar = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
    }, 700);
  };

  return (
    <>
      <div
        className={`menuBlur aparece ${isOpen && "isOpen"} ${
          isClosing && "desaparece"
        }`}
      >
        <div className={`menu caer ${isClosing && "subir"}`}>
          <button onClick={() => cerrar()} className="menu-cerrar">
            <img src={cruz} alt="cerrar" />
          </button>
          <div className="menu-list">
            <ul className="menu-ul">
              <NavLink to="/1">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 1 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 1 && "isActive"}`}>
                    <img
                      className={`${seccion === 1 && "isActive"}`}
                      src={flechaNar}
                      alt="1"
                    />
                  </div>
                  <span>¿Que es contar un cuento?</span>
                </li>
              </NavLink>

              <NavLink to="/2">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 2 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 2 && "isActive"}`}>
                    <img
                      className={`${seccion === 2 && "isActive"}`}
                      src={flechaNar}
                      alt="2"
                    />
                  </div>
                  <span>Talleres</span>
                </li>
              </NavLink>

              <NavLink to="/3">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 3 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 3 && "isActive"}`}>
                    <img
                      className={`${seccion === 3 && "isActive"}`}
                      src={flechaNar}
                      alt="3"
                    />
                  </div>
                  <span>Cuentos en vivo</span>
                </li>
              </NavLink>

              <NavLink to="/4">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 4 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 4 && "isActive"}`}>
                    <img
                      className={`${seccion === 4 && "isActive"}`}
                      src={flechaNar}
                      alt="4"
                    />
                  </div>
                  <span>Cuentos online</span>
                </li>
              </NavLink>

              <NavLink to="/5">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 5 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 5 && "isActive"}`}>
                    <img
                      className={`${seccion === 5 && "isActive"}`}
                      src={flechaNar}
                      alt="5"
                    />
                  </div>
                  <span>Cuentos en tu escuela</span>
                </li>
              </NavLink>

              <NavLink to="/6">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 6 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 6 && "isActive"}`}>
                    <img
                      className={`${seccion === 6 && "isActive"}`}
                      src={flechaNar}
                      alt="6"
                    />
                  </div>
                  <span>Juan M. Tapia: cuentero</span>
                </li>
              </NavLink>

              <NavLink to="/7">
                <li
                  onClick={() => cerrar()}
                  className={`${seccion === 7 && "isActive"}`}
                >
                  <div className={`flech ${seccion === 17 && "isActive"}`}>
                    <img
                      className={`${seccion === 7 && "isActive"}`}
                      src={flechaNar}
                      alt="7"
                    />
                  </div>
                  <span>Manifiesto</span>
                </li>
              </NavLink>
            </ul>
          </div>
          <ul></ul>
        </div>
      </div>
    </>
  );
}
