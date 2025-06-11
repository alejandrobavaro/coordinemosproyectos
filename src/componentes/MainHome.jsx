import React from "react";
import Novedades from "./Novedades";
import MainGaleriaHome from "./MainGaleriaHome";
import MainPublicidadSlider from "./MainPublicidadSlider";
import ProximoShowContadorDias from "./ProximoShowContadorDias";
import "../assets/scss/_03-Componentes/_MainHome.scss";

function MainHome() {
  return (
    <div className="public-container">
      <main className="project-journal">
        <header className="journal-header">
          <h1>Coordinando Proyectos</h1>
          <p className="subtitle">Gestión de contribuciones musicales</p>
          <hr className="lineaSeparador" />
          <p>
            Bienvenidos a la plataforma de gestión de contribuciones para
            proyectos musicales. Aquí podrás registrar y visualizar las
            contribuciones de cada miembro de la banda.
          </p>
        </header>

        <section className="home-sections">
          <ProximoShowContadorDias />
          <Novedades />
          <MainGaleriaHome />
          <MainPublicidadSlider />
        </section>
      </main>
    </div>
  );
}

export default MainHome;
