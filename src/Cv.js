import React from 'react';
import './cv.css';
import profileImage from './assets/profile.jpg'; // Asegúrate de que la ruta sea correcta

function Cv() {
  return (
    <div className="cv-container">
      <div className="image-container">
        <img src={profileImage} alt="Elmer Gama" className="profile-image" />
      </div>
      <h1 className="name">Elmer Gama</h1>
      <h2 className="profession">Informático</h2>

      <div className="info-section">
        <h3 className="section-title">Datos Referenciales</h3>
        <p><strong>Nombre:</strong> Elmer</p>
        <p><strong>Apellidos:</strong> Gama</p>
        <p><strong>Dirección:</strong> Cochabamba, Bolivia</p>
      </div>

      <div className="education-section">
        <h3 className="section-title">Formación</h3>
        <ul>
          <li>Curso de Desarrollo Web Avanzado</li>
          <li>Diplomado en Gestión de Bases de Datos</li>
          <li>Certificación en Programación en Python</li>
          <li>Curso de Inteligencia Artificial</li>
          <li>Maestría en Seguridad Informática</li>
        </ul>
      </div>

      <div className="hobbies-section">
        <h3 className="section-title">Hobbies</h3>
        <ul>
          <li>Programación</li>
          <li>Juegos Deportivos</li>
        </ul>
      </div>
    </div>
  );
}

export {Cv};
