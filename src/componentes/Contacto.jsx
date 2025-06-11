import React from "react";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="logo-social">
          <div className="logo">
            <img
              src="/img/02-logos/logo-coordinandoproyectos.png"
              alt="Logo Coordinando Proyectos"
              className="logo-img"
            />
          </div>
          <div className="social">
            <h3 className="social-title">
              <i className="bi bi-heart-fill" /> Síguenos <i className="bi bi-heart-fill" />
            </h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-facebook" />
                <span>Facebook</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-instagram" />
                <span>Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-youtube" />
                <span>YouTube</span>
              </a>
              <a href="mailto:#" className="social-link">
                <i className="bi bi-envelope-heart" />
                <span>Escríbenos</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-banner">
          <img
            src="/img/03-img-banners/banner2.png"
            alt="Banner Coordinando Proyectos"
            className="banner-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
