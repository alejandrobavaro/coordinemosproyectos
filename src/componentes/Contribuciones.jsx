import React from "react";
import "../assets/scss/_03-Componentes/_Contribuciones.scss";

const Contribuciones = () => {
  return (
    <div className="contribuciones-container">
      <h2>Registro de Contribuciones</h2>
      <form>
        <div className="form-group">
          <label htmlFor="miembro">Miembro:</label>
          <select id="miembro" name="miembro">
            <option value="miembro1">Ale Gondra</option>
            <option value="miembro2">Pato Conti</option>
            <option value="miembro3">Nicolás Traficando</option>
            <option value="miembro4">Santiago Sotille</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contribucion">Contribución:</label>
          <select id="contribucion" name="contribucion">
            <option value="contribucion1">Asistencia a ensayo</option>
            <option value="contribucion2">Proveer sala de ensayo</option>
            <option value="contribucion3">Prestar batería</option>
            <option value="contribucion4">Buscar fechas para tocar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="puntos">Puntos:</label>
          <input type="number" id="puntos" name="puntos" />
        </div>
        <button type="submit">Registrar Contribución</button>
      </form>
    </div>
  );
};

export default Contribuciones;
