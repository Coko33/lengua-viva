import React from "react";
import talleres from "./../../img/nuevas/talleres.png";
import "./Talleres.css";
import FadeInSection from "../../hooks/FadeIntersection";

export default function Talleres() {
  return (
    <>
      <div className="seccion>">
        <FadeInSection>
          <div className="head">
            <div className="titulo">
              <h1>
                <span>Talleres</span>
              </h1>
            </div>
            <div className="container-img-titu">
              <div className="text-foto mob">
                <h2 className="titulo2 mob">
                  Taller de <br></br>narración oral
                </h2>
                <p className="bajada mob">Prescencial / Virtual</p>
              </div>
              <img src={talleres}></img>
              <div className="bordeBlanco"></div>
            </div>
            <div className="fondoGris">
              <div className="text-foto desk">
                <h2 className="titulo2 desk">
                  Taller de <br></br>narración oral
                </h2>
                <p className="bajada desk">Prescencial / Virtual</p>
              </div>

              <p className="descripcion-tno">
                El lobo partió corriendo a toda velocidad por el camino que era
                más corto y la niña se fue por el más largo entreteniéndose en
                coger avellanas, en correr tras las mariposas y en hacer ramos
                con las florecillas que encontraba.
              </p>
              <button className="cta-talleres tno">+ Información</button>
            </div>
          </div>
        </FadeInSection>
        <div className="body1 tno">
          <FadeInSection>
            <div className="articulo uno tallercorto">
              <div className="articulo-title">
                <h3>NOMBRE.</h3>
                <h3>Taller corto 1</h3>
              </div>
              <div className="articulo-body">
                <p className="articulo-txt">
                  Es su nieta, Caperucita Roja, dijo el lobo, disfrazando la
                  voz, le traigo una torta y un tarrito de mantequilla que mi
                  madre le envía.
                </p>
                <button className="cta-talleres tc">
                  <i></i>+ Información
                </button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="articulo dos tallercorto">
              <div className="articulo-title">
                <h3>NOMBRE.</h3>
                <h3>Taller corto 2</h3>
              </div>
              <div className="articulo-body">
                <p className="articulo-txt">
                  El lobo tiró la aldaba, y la puerta se abrió. Se abalanzó
                  sobre la buena mujer y la devoró en un santiamén, pues hacía
                  más de tres días que no comía.
                </p>
                <button className="cta-talleres tc">
                  <i></i>+ Información
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
}
