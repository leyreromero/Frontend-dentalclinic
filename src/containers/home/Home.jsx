import React from "react";
import "./Home.scss";
import imagenPaciente from "../../../public/images/paciente.jpeg";

function Home() {
  return (
    <div className="Home-intro">
      <div className="text-home">
        <h2>Clinica Dental Prime</h2>
        <p>
          Te ofrecemos mucho más. Prime Dental no es únicamente un clínica
          dental en Sant Feliu de Llobregat, si no un centro de alta
          especialización dental, en el que la excelencia en los tratamientos y
          la atención de nuestros pacientes sean premisas fundamentales.
        </p>
      </div>
      <div className="main-homeContainer">
        <div className="image-home">
          <img
            className="image-style"
            src={imagenPaciente}
            alt="doctora-cliente"
          />
        </div>
        <div className="info-homeText">
          <p>
            Cada paciente que llega a nuestro centro dental es para nosotros una
            nueva ilusión y un nuevo reto, por eso, no podemos más que ofrecerle
            una atención excelente y totalmente personalizada. Para ello,
            contamos con especialistas altamente cualificados en cada área
            odontológica. Respaldamos la especialización y el excelente trato de
            nuestros especialistas y técnicos con unas modernas instalaciones en
            el corazón de Sant Feliu de LLobregat y los últimos avances
            tecnológicos. Queremos demostrar que nuestros pacientes pueden
            disfrutar de la odontología, mejorando la experiencia de ir al
            dentista desde la primera visita, promoviendo la prevención y
            realizando una odontología responsable basada en mínima
            intervención.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
