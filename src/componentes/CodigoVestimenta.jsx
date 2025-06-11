import React from "react";
import Slider from "react-slick";
import { FaPalette, FaArrowLeft, FaArrowRight, FaGuitar, FaDrum, FaMicrophone, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_CodigoVestimenta.scss";

const CodigoVestimenta = () => {
  const inspirationImages = [
    { src: "/img/11-codigovestimenta/inspiracionhombre1.jpeg", alt: "Estilo clásico ochentoso", caption: "Campera de cuero + actitud = combo ganador" },
    { src: "/img/11-codigovestimenta/inspiracionhombre2.jpeg", alt: "Estilo ochentoso para escenario", caption: "Lentes oscuros... aunque sea de noche" },
    { src: "/img/11-codigovestimenta/inspiracionhombre3.jpeg", alt: "Estilo glam noventoso", caption: "Brillo, rock y pelos con vida propia" },
    { src: "/img/11-codigovestimenta/inspiracionhombre4.jpeg", alt: "Estilo banda pop", caption: "Colores, accesorios y flow escénico" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="slick-arrow next" onClick={onClick} aria-label="Next">
        <FaArrowRight />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="slick-arrow prev" onClick={onClick} aria-label="Previous">
        <FaArrowLeft />
      </button>
    );
  }

  return (
    <div className="vestimenta-container">
      <div className="vestimenta-content">
        <header className="vestimenta-header">
          <h1>Manual del Flow Escénico <FaGuitar /></h1>
          <h2>Guía Visual para Rockearla</h2>
          <p>Nos vestimos como sonamos: con onda, estilo y mucha actitud retro pop.</p>
        </header>

        <div className="vestimenta-main">
          <section className="vestimenta-theme">
            <h2><FaPalette /> Identidad Almango</h2>
            <p>Somos cuatro, pero en el escenario explotamos como si fuésemos doce. Cada uno tiene su estilo, pero todos compartimos la misma misión: hacer que la gente viaje en el tiempo con cada tema.</p>

            <div className="theme-cards">
              <div className="theme-card">
                <h3>Estilo</h3>
                <p>Un mix entre la rebeldía ochentosa, el glam noventoso y nuestro toque moderno. Pensá en Queen meets Soda con una pizca de los Guns.</p>
              </div>
              <div className="theme-card">
                <h3>Colores que Van</h3>
                <p>Negro, rojo sangre, dorado, denim, plateado, púrpura... todo lo que brille (literal o metafóricamente) es bienvenido.</p>
              </div>
            </div>
          </section>

          <section className="vestimenta-gallery">
            <h2>Inspiración Visual</h2>
            <div className="gallery-slider">
              <Slider {...sliderSettings}>
                {inspirationImages.map((image, index) => (
                  <div key={index} className="slider-item">
                    <div className="slider-image">
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <p>{image.caption}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          <div className="vestimenta-tips">
            <h3>Tips para un Look Legendario</h3>
            <ul>
              <li>Siempre cómodos: moverse como Jagger requiere movilidad.</li>
              <li>Accesorios con personalidad: pañuelos, gafas, cadenas, sombreros. Sin miedo.</li>
              <li>Ropa que hable: frases, estampas, texturas... que cuenten quién sos.</li>
              <li>No subestimés el peinado: volumen, brillo, rebeldía. Todo vale.</li>
            </ul>
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default CodigoVestimenta;
