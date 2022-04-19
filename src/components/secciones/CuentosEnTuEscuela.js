import React from "react";
import "./CuentosEnTuEscuela.css";
import escuela from "./../../img/nuevas/ninis2.png";
import tallerdocente from "./../../img/nuevas/Tallerdocente.png";
import lunaInicial from "./../../img/nuevas/luna-1.png";
import lunaPrimaria from "./../../img/nuevas/luna-2.png";
import lunaSecundaria from "./../../img/nuevas/luna-3.png";
import FadeInSection from "../../hooks/FadeIntersection";

export default function CuentosEnTuEscuela() {
  return (
    <>
      <div className="seccion">
        <FadeInSection>
          <div className="head5">
            <div className="head5-title">
              <h1>
                <span>Cuentos en</span>
                <br></br>
                <span>tu escuela</span>
              </h1>
            </div>
            <img className="head5-img" src={escuela}></img>
          </div>
          <p className="head5-cita">
            “Con diamantes y dinero mucho se obtiene en verdad, pero con dulces
            palabras aún se obtiene mucho más.”
          </p>
        </FadeInSection>

        <div className="head5-cursos">
          <FadeInSection>
            <div className="articulo uno cursoEscuela">
              <div className="cursoEscuelaImg">
                <img src={lunaInicial}></img>
              </div>

              <div className="articulo-body">
                <div className="articulo-title titulo-cursoEscuela">
                  <h3>Inicial</h3>
                </div>
                <p className="articulo-txt">
                  Aquí vemos que la adolescencia, en especial las señoritas,
                  bien hechas, amables y bonitas no deben a cualquiera oír con
                  complacencia,
                </p>
                <button className="cta-talleres">
                  <i></i>+ Información
                </button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="articulo dos cursoEscuela">
              <div className="cursoEscuelaImg">
                <img src={lunaPrimaria}></img>
              </div>

              <div className="articulo-body">
                <div className="articulo-title titulo-cursoEscuela">
                  <h3>Primaria</h3>
                </div>
                <p className="articulo-txt">
                  y no resulta causa de extrañeza ver que muchas del lobo son la
                  presa. Y digo el lobo, pues bajo su envoltura no todos son de
                  igual calaña:
                </p>
                <button className="cta-talleres">
                  <i></i>+ Información
                </button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="articulo tres cursoEscuela">
              <div className="cursoEscuelaImg">
                <img src={lunaSecundaria}></img>
              </div>

              <div className="articulo-body">
                <div className="articulo-title titulo-cursoEscuela">
                  <h3>Secundaria</h3>
                </div>
                <p className="articulo-txt">
                  Los hay con no poca maña, silenciosos, sin odio ni amargura,
                  que en secreto, pacientes, con dulzura van a la siga de las
                  damiselas hasta las casas y en las callejuelas; más, bien
                  sabemos que los zalameros entre todos los lobos ¡ay! son los
                  más fieros.
                </p>
                <button className="cta-talleres">
                  <i></i>+ Información
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="head5-ultimoCurso">
            <div className="ultimoCurso-title">
              <h1>
                <span className="spanMob">Capacitación</span>
                <span className="spanMob">docente</span>
              </h1>
            </div>
            <img
              className="ultimoCurso-container-img desk"
              src={tallerdocente}
            ></img>
            <div className="ultimoCurso-container-img">
              <img src={tallerdocente}></img>
              <div className="ultimoCurso-viñeta"></div>
              <h3>
                Talleres de Narración<br></br>oral para docentes
              </h3>
            </div>

            <div className="ultimoCurso-container-fondoGris">
              <h1>
                <span className="spanDesk">Capacitación docente</span>
              </h1>
              <h3>
                Talleres de Narración<br></br>oral para docentes
              </h3>

              <p className="articulo-txt">
                El lobo partió corriendo a toda velocidad por el camino que era
                más corto y la niña se fue por el más largo entreteniéndose en
                coger avellanas, en correr tras las mariposas y en hacer ramos
                con las florecillas que encontraba. Poco tardó el lobo en llegar
                a casa de la abuela; golpea: Toc, toc.
              </p>
              <button className="cta-talleres">
                <i></i>+ Información
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
}
