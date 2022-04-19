import React from "react";
import FadeInSection from "../../hooks/FadeIntersection";
import "./Manifiesto.css";
import manifiesto from "./../../img/nuevas/manifiesto.png";

export default function Manifiesto() {
  return (
    <>
      <div className="seccion">
        <FadeInSection>
          <div className="head7">
            <div className="head7-title">
              <h1>
                <span>Manifiesto</span>
              </h1>
            </div>
            <img src={manifiesto}></img>
          </div>
          <div className="manifiesto-txt">
            <p>
              1. La verdadera democracia es aquella donde el gobierno hace lo
              que el pueblo quiere y defiende un solo interés: el del pueblo.{" "}
              <br></br>2. El justicialismo es esencialmente popular. Todo
              círculo político es antipopular, y por lo tanto, no es
              justicialista. <br></br>3. El justicialista trabaja para el
              movimiento. El que en su nombre sirve a un círculo o a un hombre o
              caudillo, lo es solo de nombre.
              <br></br>4. No existe para el justicialismo más que una sola clase
              de hombres: los que trabajan. <br></br>5. En la Nueva Argentina el
              trabajo es un derecho, que crea la dignidad del hombre, y es un
              deber, porque es justo que cada uno produzca por lo menos lo que
              consume. <br></br>6. Para un justicialista no puede haber nada
              mejor que otro justicialista. <br></br>7. Ningún justicialista
              debe sentirse más de lo que es ni menos de lo que debe ser. Cuando
              un justicialista comienza a sentirse más de lo que es, empieza a
              convertirse en oligarca. <br></br>8. En la acción política la
              escala de valores de todo justicialista es la siguiente: primero,
              la Patria, después el movimiento, y luego los hombres. <br></br>9.
              La política no es para nosotros un fin, sino solo el medio para el
              bien de la patria que es la felicidad de sus hijos y la grandeza
              nacional. 10. Los dos brazos del justicialismo son la justicia
              social y la ayuda social. Con ellos damos al pueblo un abrazo de
              justicia y amor.
            </p>
            <p id="head7-cita">
              "La política no es para nosotros un fin, sino solo el medio para
              el bien de la patria que es la felicidad de sus hijos y la
              grandeza nacional."
            </p>
            <p>
              11. El justicialismo anhela la unidad nacional y no la lucha.
              Desea héroes, pero no mártires.
              <br></br>12. En la Nueva Argentina los únicos privilegiados son
              los niños.
              <br></br>13. Un gobierno sin doctrina es un cuerpo sin alma. Por
              eso el peronismo tiene su propia doctrina política, económica y
              social: el Justicialismo. <br></br>14. El justicialismo es una
              nueva filosofía de la vida, simple, práctica, popular,
              profundamente cristiana y profundamente humana. <br></br>15. Como
              doctrina política, el justicialismo realiza el equilibrio del
              derecho del individuo con el de la comunidad. <br></br>16. Como
              doctrina económica, el justicialismo realiza la economía social,
              poniendo el capital al servicio de la economía y ésta al servicio
              del bienestar social. <br></br>17. Como doctrina social, el
              justicialismo realiza la justicia social, que da a cada persona su
              derecho en función social. <br></br>18. Queremos una Argentina
              socialmente justa, económicamente libre y políticamente soberana.{" "}
              <br></br>19. Constituimos un gobierno centralizado, un Estado
              organizado y un pueblo libre. <br></br>20. En esta tierra, lo
              mejor que tenemos es el pueblo.
            </p>
            <div className="citaNaranja1">
              <p>
                Para un justicialista no puede haber nada mejor que otro
                justicialista.
              </p>
            </div>
            <div className="citaNaranja2">
              <p>
                En la Nueva Argentina los únicos privilegiados son los niños.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
}
