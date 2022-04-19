import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";
import Menu from "./Menu";
import hamburguesa from "./../iconos/Hamburguesa.svg";
import { useModal } from "../hooks/useModal";

export default function Nav({ isInicio }) {
  const [isOpenMenu, openModalMenu, closeModalMenu] = useModal(false);

  const openMenu = () => {
    openModalMenu();
  };

  return (
    <>
      <div className="nav">
        {!isInicio && (
          <div className="nav-title">
            <NavLink to="/">
              <h3>Lengua Viva</h3>
            </NavLink>
          </div>
        )}
        <button onClick={() => openMenu()} className="nav-burger">
          <img src={hamburguesa} alt="menu" />
        </button>
      </div>
      <Menu isOpen={isOpenMenu} closeModal={closeModalMenu} />
    </>
  );
}
