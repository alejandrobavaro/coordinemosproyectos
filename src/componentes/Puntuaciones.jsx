import React from "react";
import "../assets/scss/_03-Componentes/_Puntuaciones.scss";

const Puntuaciones = () => {
  const puntuaciones = [
    { id: 1, nombre: "Ale Gondra", puntos: 150 },
    { id: 2, nombre: "Pato Conti", puntos: 120 },
    { id: 3, nombre: "Nicolás Traficando", puntos: 90 },
    { id: 4, nombre: "Santiago Sotille", puntos: 80 },
  ];

  return (
    <div className="puntuaciones-container">
      <h2>Puntuaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Miembro</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {puntuaciones.map((miembro) => (
            <tr key={miembro.id}>
              <td>{miembro.nombre}</td>
              <td>{miembro.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Puntuaciones;
