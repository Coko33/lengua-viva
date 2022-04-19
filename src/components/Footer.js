import React from "react";
import iconoYtb from "./../iconos/youtube.svg";
import iconoIg from "./../iconos/instagram.svg";
import iconoMail from "./../iconos/mail.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="iconos">
            <img src={iconoYtb} />
            <img src={iconoIg} />
            <img src={iconoMail} />
          </div>
          <p>Juan M. Tapia</p>
          <p>©2022</p>
        </div>
      </div>
    </>
  );
}
