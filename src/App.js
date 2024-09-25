import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cv-container">
        <h1 className="name">Elmer Gama</h1>
        <h2 className="profession">Informático</h2>

        <div className="info-section">
          <h3>Datos Referenciales</h3>
          <p><strong>Nombre:</strong> Elmer</p>
          <p><strong>Apellidos:</strong> Gama</p>
          <p><strong>Dirección:</strong> Cochabamba, Bolivia</p>
        </div>

        <div className="education-section">
          <h3>Formación</h3>
          <ul>
            <li>Curso de Desarrollo Web Avanzado</li>
            <li>Diplomado en Gestión de Bases de Datos</li>
            <li>Certificación en Programación en Python</li>
            <li>Curso de Inteligencia Artificial</li>
            <li>Maestría en Seguridad Informática</li>
          </ul>
        </div>

        <div className="hobbies-section">
          <h3>Hobbies</h3>
          <ul>
            <li>Programación</li>
            <li>Juegos Deportivos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
