import React, { useState, useEffect, useCallback } from "react";
import { FaWhatsapp, FaCalendarAlt, FaClock } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_ProximoShowContadorDias.scss";

const ProximoShowContadorDias = () => {
  const SHOW_DATE = new Date('2025-11-23T19:00:00-03:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    months: 0,
    weeks: 0
  });

  const generateMessage = useCallback(() => {
    return `¡FALTAN SOLO ${timeLeft.days} DÍAS PARA EL SHOW DE ALMANGO POP COVERS! 🎸\n📅 23/11/2025 - 19:00 HS\n#AlmangoPopCovers #LiveMusic`;
  }, [timeLeft.days]);

  const shareOnWhatsApp = useCallback(() => {
    const url = `https://wa.me/?text=${encodeURIComponent(generateMessage())}`;
    window.open(url, '_blank');
  }, [generateMessage]);

  // Efecto para partículas
  useEffect(() => {
    const createParticle = () => {
      const colors = ['#FFD700', '#FF4500', '#32CD32', '#9370DB'];
      const particle = document.createElement('div');
      particle.className = 'contador-particle';

      const xPos = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 2 + Math.random() * 5;
      const size = 5 + Math.random() * 10;
      const opacity = 0.3 + Math.random() * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.left = `${xPos}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      particle.style.backgroundColor = color;

      document.querySelector('.contador-container')?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    const particleInterval = setInterval(createParticle, 150);
    return () => clearInterval(particleInterval);
  }, []);

  // Efecto para el contador
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = SHOW_DATE - now;

      if (difference > 0) {
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const months = Math.floor(totalDays / 30.44);
        const weeks = Math.floor(totalDays / 7);

        setTimeLeft({
          days: totalDays,
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          months,
          weeks
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="contador-container">
      <div className="contador-background"></div>
      <div className="contador-frame"></div>
      <div className="contador-overlay"></div>

      <div className="contador-content">
        <h1 className="contador-title">
          <span className="contador-title-highlight">PRÓXIMO</span> SHOW
        </h1>

        <div className="contador-principal">
          {Object.entries({
            days: timeLeft.days,
            hours: timeLeft.hours.toString().padStart(2, '0'),
            minutes: timeLeft.minutes.toString().padStart(2, '0'),
            seconds: timeLeft.seconds.toString().padStart(2, '0')
          }).map(([key, value]) => (
            <React.Fragment key={key}>
              <div className="contador-bloque">
                <div className="contador-valor">{value}</div>
                <div className="contador-etiqueta">{key.toUpperCase()}</div>
              </div>
              {key !== 'seconds' && <div className="contador-separador">:</div>}
            </React.Fragment>
          ))}
        </div>

        <div className="contador-info-adicional">
          <div className="contador-tiempo-adicional">
            <span className="contador-valor-adicional">{timeLeft.months}</span>
            <span className="contador-etiqueta-adicional">MESES</span>
          </div>
          
          <div className="contador-separador-adicional">|</div>
          
          <div className="contador-tiempo-adicional">
            <span className="contador-valor-adicional">{timeLeft.weeks}</span>
            <span className="contador-etiqueta-adicional">SEMANAS</span>
          </div>
        </div>

        <div className="contador-fecha-container">
          <FaCalendarAlt className="contador-icono-fecha" />
          <span className="contador-fecha">23 / 11 / 2025</span>
          <FaClock className="contador-icono-fecha" />
          <span className="contador-fecha">19:00 HS</span>
        </div>

        <button
          className="contador-boton-whatsapp"
          onClick={shareOnWhatsApp}
          aria-label="Compartir cuenta regresiva por WhatsApp"
        >
          <FaWhatsapp className="contador-icono-whatsapp" />
          COMPARTIR EN WHATSAPP
        </button>
      </div>
    </section>
  );
};

export default ProximoShowContadorDias;