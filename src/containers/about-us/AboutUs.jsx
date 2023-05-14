import React from "react";
import "./AboutUs.scss";
import imagenDoctora from "../../../public/images/doctora.webp";

function AboutUs() {
  return (
    <div className="AboutUs-container">
      <h1>Nosotros</h1>
      <div className="image-container">
        <img className="image-aboutUs"src={imagenDoctora} alt="dentista" />
      </div>
      <div className="text-aboutUs">
        <p>
          El equipo emprendedor consta de dos odontólogas, Mentxu Bergés Miranda
          y María Nieto Blas, cuya experiencia profesional y colaboración
          conjunta suma más de 10 años en el ámbito odontológico. Las
          especialidades de ambas son complementarias, lo cual permite abarcar
          múltiples casos clínicos de principio a fin. El equipo consta de
          especialistas en cada área. Esto permite, tanto un trato personalizado
          de los pacientes, como el buen pronóstico de los tratamientos. Además,
          el equipo inicial constará de una auxiliar/recepcionista y gestor.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
