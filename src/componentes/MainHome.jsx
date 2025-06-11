import React from "react";
import Novedades from "./Novedades";
import MainGaleriaHome from "./MainGaleriaHome";
import MainPublicidadSlider from "./MainPublicidadSlider";
import ProximoShowContadorDias from "./ProximoShowContadorDias";
import "../assets/scss/_03-Componentes/_MainHome.scss";

function MainHome() {
  return (
    <div className="main-home-container">
      <ProximoShowContadorDias />
      <Novedades />
      <MainGaleriaHome />
      <MainPublicidadSlider />
    </div>
  );
}

export default MainHome;