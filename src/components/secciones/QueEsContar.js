import React from "react";
import comosecuenta1 from "./../../img/nuevas/comosecuenta1.png";
import comosecuenta2 from "./../../img/nuevas/como-contar.png";
import "./QueEsContar.css";

import FadeInSection from "../../hooks/FadeIntersection";

export default function QueEsContar() {
  return (
    <>
      <div className="seccion">
        <FadeInSection>
          <div className="head1">
            <div className="head1-fondoGris"></div>
            <div className="head1-title">
              <h1>
                <span>
                  ¿Qué es <br></br>
                </span>
                <span>
                  contar un <br></br>
                </span>
                <span>cuento?</span>
              </h1>
            </div>

            <div className="head1-image">{<img src={comosecuenta1}></img>}</div>
            <div className="head1-articulito">
              <p className="articulito-asterisco">*</p>
              <p className="articulito-txt">
                Había una vez una niñita en un pueblo, la más bonita que jamás
                se hubiera visto; su madre estaba enloquecida con ella y su
                abuela mucho más todavía.
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="body1">
          <FadeInSection>
            <div className="articulo uno">
              <div className="articulo-title">
                <h3 className="fade-in-fwd">
                  <span className="fade">Filosofía</span> de
                </h3>
                <h3>la Narración Oral</h3>
              </div>
              <div className="articulo-body">
                <p className="articulo-txt">
                  Había una vez una niñita en un pueblo, la más bonita que jamás
                  se hubiera visto; su madre estaba enloquecida con ella y su
                  abuela mucho más todavía.
                </p>
                <p className="articulo-leermas">LEER MÁS...</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="articulo dos">
              <div className="articulo-title">
                <h3>
                  Narración Oral <br></br>
                  <span id="span2">y música</span>
                </h3>
              </div>
              <div className="articulo-body">
                <p className="articulo-txt">
                  Esta buena mujer le había mandado hacer una caperucita roja y
                  le sentaba tanto que todos la llamaban Caperucita Roja. Un día
                  su madre, habiendo cocinado unas tortas, le dijo.
                </p>
                <p className="articulo-leermas">LEER MÁS...</p>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="head1 head2">
            <div className="head2-fondoGris">
              <p className="fondogris-txt">
                Anda a ver cómo está tu abuela, pues me dicen que ha estado
                enferma; llévale una torta y este tarrito de mantequilla.
              </p>
            </div>
            <div className="head1-image head2-image">
              {<img src={comosecuenta2}></img>}
            </div>
          </div>
        </FadeInSection>

        <div className="body1 body2">
          <FadeInSection>
            <div className="articulo tres">
              <div className="articulo-title">
                <h3>
                  <span>Maestros</span> del
                </h3>
                <h3>cuento</h3>
              </div>
              <div className="articulo-body">
                <p className="articulo-txt">
                  Caperucita Roja partió en seguida a ver a su abuela que vivía
                  en otro pueblo. Al pasar por un bosque, se encontró con el
                  compadre lobo, que tuvo muchas ganas de comérsela, pero no se
                  atrevió porque unos leñadores andaban por ahí cerca.
                </p>
                <p className="articulo-leermas">LEER MÁS...</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="articulo cuatro">
              <div className="articulo-title">
                <h3>
                  Narración Oral <br></br>
                  <span id="span2">argentina</span>
                </h3>
              </div>
              <div className="articulo-body">
                <p className="articulo-txt">
                  El lugar en cuestión tiene un valor estimado en 1,2 millones
                  de dólares, a razón de unos 545 dólares (tipo de cambio
                  oficial) el metro cuadrado. El precio es barato, dada la
                  ubicación privilegiada, en uno de los balnearios más costosos
                  de la Argentina.
                </p>
                <p className="articulo-leermas">LEER MÁS...</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
}
