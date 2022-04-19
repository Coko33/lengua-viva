import React from "react";
import cuentosonline from "./../../img/nuevas/cuentos-online.png";
import CuentoOnline from "./CuentoOnline";
import "./CuentosOnline.css";

export default function CuentosOnline() {
  return (
    <>
      <div className="seccion">
        <div className="head4 wrapper">
          <div className="head4-title titulo">
            <h1>
              <span>Cuentos online</span>
            </h1>
          </div>
          <div className="grid grid1">
            <img src={cuentosonline}></img>
          </div>
          <div className="grid grid2">
            <CuentoOnline></CuentoOnline>
          </div>
          <div className="grid grid3">
            <CuentoOnline></CuentoOnline>
          </div>
          <div className="grid grid4">
            <CuentoOnline></CuentoOnline>
          </div>
        </div>
      </div>
    </>
  );
}
