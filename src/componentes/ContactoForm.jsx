import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_ContactoForm.scss";

const ContactoForm = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true
  };

  const couplePhotos = [
    "/img/03-img-banners/banner1.png",
    "/img/03-img-banners/banner2.png",
    "/img/03-img-banners/banner3.png",
    "/img/03-img-banners/banner4.png",
    "/img/03-img-banners/banner5.png"
  ];

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2 className="form-title">
          <i className="bi bi-envelope-heart" /> Escríbenos <i className="bi bi-envelope-heart" />
        </h2>
        <form className="contact-form" action="https://formspree.io/f/xbjnlgzz" method="post">
          <div className="form-group">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              id="mensaje"
              name="mensaje"
              rows={3}
              placeholder="Tu mensaje para nosotros..."
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="submit-btn">
            Enviar <i className="bi bi-send" />
          </button>
        </form>
        <div className="slider-container">
          <Slider {...sliderSettings} className="image-slider">
            {couplePhotos.map((photo, index) => (
              <div key={index} className="slider-item">
                <img src={photo} alt={`Slide ${index + 1}`} className="slider-photo" />
                <div className="photo-overlay"></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ContactoForm;
