import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_MainGaleriaHome.scss";

function MainGaleriaHome() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: window.innerWidth > 768,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '15%',
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '5%',
          arrows: false,
          dots: false
        }
      }
    ]
  };

  const [fotos] = useState([
    { id: 1, src: "/img/06-img-galeria3/id1-c1.png", category: "Show en vivo" },
    { id: 2, src: "/img/06-img-galeria3/id2-c2.png", category: "Ensayos" },
    { id: 3, src: "/img/06-img-galeria3/id3-c3.png", category: "Backstage" },
    { id: 4, src: "/img/06-img-galeria3/id4-c4.png", category: "Fans" },
    { id: 5, src: "/img/06-img-galeria3/id5-c5.png", category: "Ensayos" },
    { id: 6, src: "/img/06-img-galeria3/id6-c6.png", category: "Show en vivo" },
    { id: 7, src: "/img/06-img-galeria3/id7-c7.png", category: "Backstage" },
    { id: 8, src: "/img/06-img-galeria3/id8-c8.png", category: "Fans" },
    { id: 9, src: "/img/06-img-galeria3/id9-c9.png", category: "Show en vivo" },
    { id: 10, src: "/img/06-img-galeria3/id10-c10.png", category: "Ensayos" },
    { id: 11, src: "/img/06-img-galeria3/id11-c11.png", category: "Backstage" },
    { id: 12, src: "/img/06-img-galeria3/id12-c12.png", category: "Fans" },
    { id: 13, src: "/img/06-img-galeria3/id13-c13.png", category: "Show en vivo" },
    { id: 14, src: "/img/06-img-galeria3/id14-c14.png", category: "Ensayos" },
    { id: 15, src: "/img/06-img-galeria3/id15-c15.png", category: "Backstage" },
    { id: 16, src: "/img/06-img-galeria3/id16-c16.png", category: "Fans" },
    { id: 17, src: "/img/06-img-galeria3/id17-c17.png", category: "Show en vivo" },
    { id: 18, src: "/img/06-img-galeria3/id18-c18.png", category: "Ensayos" },
    { id: 19, src: "/img/06-img-galeria3/id19-c19.png", category: "Backstage" },
    { id: 20, src: "/img/06-img-galeria3/id20-c20.png", category: "Fans" },
  ]);

  useEffect(() => {
    const handleResize = () => {
      sliderSettings.arrows = window.innerWidth > 768;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageError = (e) => {
    e.target.src = '/img/placeholder-galeria.png';
    e.target.alt = 'Imagen no disponible';
    e.target.style.objectFit = 'contain';
    e.target.style.padding = '1rem';
  };

  return (
    <section className="galeria-fotos">
      <div className="galeria-header">
        <h2>Galería de la Banda</h2>
        <p>Momentos especiales en el escenario y detrás de cámaras</p>
      </div>

      <div className="galeria-slider">
        <Slider {...sliderSettings}>
          {fotos.map((foto) => (
            <div key={foto.id} className="foto-container">
              <div className="foto-item">
                <img
                  src={foto.src}
                  alt={`Foto ${foto.id}`}
                  className="foto-imagen"
                  loading="lazy"
                  onError={handleImageError}
                />
                {foto.category && (
                  <div className="foto-overlay">
                    <span className="foto-categoria">{foto.category}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MainGaleriaHome;