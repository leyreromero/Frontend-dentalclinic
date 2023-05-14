import React from "react";
import "./Footer.scss";
import logo from "../../../public/images/logo.jpg";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="flex-cv">
          <div className="logo-zone">
            <img src={logo} alt="" className="imagen" />
          </div>
          <div className="footer-content">
            <div className="content-container-one">
              <h2>CONTACTA</h2>
              <p>Tel: 930 150 456</p>
              <p>Email: info@primedentalclinic.com</p>
            </div>
            <div className="content-container-two">
              <h2>HORARIO</h2>
              <p>Lunes a viernes 10:00 – 14:00 y 16:00 – 20:00</p>
              <p>Sábados y Domingos Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
