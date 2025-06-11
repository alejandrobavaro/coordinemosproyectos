import React, { useState } from "react";
import "../assets/scss/_03-Componentes/_Novedades.scss";

function Novedades() {
  // Estado para la revista
  const [currentPage, setCurrentPage] = useState(0);

  // Estado para noticias expandibles
  const [expandedNews, setExpandedNews] = useState(null);

  // Contenido de la revista - páginas completas
  const magazinePages = [
    {
      title: "Nuevo Álbum",
      date: "Octubre 2024",
      image: "/img/06-img-galeria3/id12-c12.png",
      content: (
        <>
          <p>¡Estamos emocionados de anunciar el lanzamiento de nuestro nuevo álbum "Rock & Soul"!</p>
          <blockquote>
            "Este álbum representa un viaje musical que hemos querido compartir con todos ustedes."
            <cite>- Almango Pop Covers</cite>
          </blockquote>
          <p>El álbum incluye una mezcla de covers clásicos y nuevas interpretaciones que reflejan nuestra esencia como banda.</p>
        </>
      ),
      gallery: ["/img/06-img-galeria3/id10-c10.png", "/img/06-img-galeria3/id11-c11.png", "/img/06-img-galeria3/id13-c13.png"],
      category: "Lanzamiento"
    },
    {
      title: "Próximo Show",
      date: "Noviembre 2024",
      image: "/img/06-img-galeria3/id8-c8.png",
      content: (
        <>
          <h4>Detalles del Show</h4>
          <p>¡No te pierdas nuestro próximo show en vivo! Será una noche llena de música y energía.</p>
          <h4>Lugar y Fecha</h4>
          <p>El show se llevará a cabo el 23 de noviembre en el Teatro Principal. ¡Prepárate para una noche inolvidable!</p>
          <h4>Invitados Especiales</h4>
          <p>Contaremos con la participación de bandas locales que han sido parte de nuestra trayectoria.</p>
        </>
      ),
      gallery: ["/img/06-img-galeria3/id1-c1.png", "/img/06-img-galeria3/id2-c2.png", "/img/06-img-galeria3/id3-c3.png"],
      category: "Eventos"
    },
    {
      title: "Ensayo General",
      date: "Diciembre 2024",
      image: "/img/06-img-galeria3/id4-c4.png",
      content: (
        <>
          <p>Hemos estado ensayando arduamente para nuestro próximo gran concierto. Cada detalle está siendo cuidadosamente preparado.</p>
          <div className="planning-details">
            <div className="detail-item">
              <h5>Fecha del Ensayo</h5>
              <p>15 de Diciembre, 2024</p>
            </div>
            <div className="detail-item">
              <h5>Lugar</h5>
              <p>Estudio de Grabación Local</p>
            </div>
            <div className="detail-item">
              <h5>Duración</h5>
              <p>3 horas de ensayo intenso</p>
            </div>
          </div>
          <p>Queremos que cada nota suene perfecta y que la experiencia sea memorable para todos nuestros fans.</p>
        </>
      ),
      gallery: ["/img/06-img-galeria3/id5-c5.png", "/img/06-img-galeria3/id6-c6.png", "/img/06-img-galeria3/id7-c7.png"],
      category: "Preparativos"
    }
  ];

  // Noticias expandibles
  const newsItems = [
    {
      id: 1,
      title: "Nueva Canción",
      date: "15 Oct 2024",
      excerpt: "Hemos lanzado una nueva canción que ya está disponible en todas las plataformas.",
      content: (
        <>
          <p>Nuestra nueva canción "Rock the Night" ya está disponible en todas las plataformas de streaming. Escúchala y déjanos saber qué opinas.</p>
          <div className="news-gallery">
            <img src="/img/novedades/foto1.jpg" alt="Nueva Canción" />
          </div>
          <p>"Esta canción es especial para nosotros porque captura la esencia de lo que somos como banda", comentó el líder de la banda.</p>
        </>
      ),
      images: ["/img/04-img-galeria1/1000063530.jpg"],
      category: "Lanzamiento"
    },
    {
      id: 2,
      title: "Entrevista Exclusiva",
      date: "1 Nov 2024",
      excerpt: "No te pierdas nuestra entrevista exclusiva en la revista de música local.",
      content: (
        <>
          <p>Hemos tenido una entrevista exclusiva con la revista de música local donde hablamos sobre nuestro nuevo álbum y los planes futuros de la banda.</p>
          <div className="news-gallery">
            <img src="/img/04-img-galeria1/1000063530.jpg" alt="Entrevista" />
          </div>
          <p>"Fue una gran oportunidad para conectar con nuestros fans y compartir nuestra visión", explicó el baterista.</p>
        </>
      ),
      images: ["/img/04-img-galeria1/20230805_152855.jpg"],
      category: "Noticias"
    },
    {
      id: 3,
      title: "Nuevo Integrante",
      date: "20 Nov 2024",
      excerpt: "¡Bienvenido a nuestro nuevo guitarrista!",
      content: (
        <>
          <p>Estamos emocionados de anunciar que tenemos un nuevo guitarrista en la banda. Su primera presentación será en nuestro próximo show.</p>
          <div className="news-gallery">
            <img src="/img/04-img-galeria1/20230723_122529.jpg" alt="Nuevo Integrante" />
          </div>
          <p>"Estamos muy contentos con la energía y el talento que trae a la banda", confesó el vocalista.</p>
        </>
      ),
      images: ["/img/04-img-galeria1/20230723_122529.jpg"],
      category: "Noticias"
    }
  ];

  return (
    <div className="novedades-container">
      {/* Sección de Revista */}
      <section className="band-magazine">
        <h2>Noticias de la Banda</h2>
        <p className="magazine-subtitle">Lo último de Almango Pop Covers</p>

        <div className="magazine-page">
          <div className="page-image-container">
            <div
              className="page-image"
              style={{ backgroundImage: `url(${magazinePages[currentPage].image})` }}
            >
              <div className="page-header">
                <h3>{magazinePages[currentPage].title}</h3>
                <span className="page-date">{magazinePages[currentPage].date}</span>
              </div>
            </div>
          </div>

          <div className="page-content">
            {magazinePages[currentPage].content}

            {magazinePages[currentPage].gallery && (
              <div className="page-gallery">
                <h4>Galería</h4>
                <div className="gallery-grid">
                  {magazinePages[currentPage].gallery.map((img, i) => (
                    <div key={i} className="gallery-item">
                      <img src={img} alt={`Galería ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="page-controls">
            <div className="page-indicator">
              Página {currentPage + 1} de {magazinePages.length}
            </div>
            <div className="navigation-buttons">
              <button
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
              >
                Anterior
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(magazinePages.length - 1, p + 1))}
                disabled={currentPage === magazinePages.length - 1}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Noticias */}
      <section className="news-section">
        <h2>Últimas Novedades</h2>
        <p className="news-subtitle">Preparativos y actualizaciones</p>

        <div className="news-list">
          {newsItems.map(news => (
            <div
              key={news.id}
              className={`news-card ${expandedNews === news.id ? 'expanded' : ''}`}
            >
              <div className="news-image">
                <img src={news.images[0]} alt={news.title} />
              </div>
              <div className="news-content">
                <span className="news-category">{news.category}</span>
                <h3>{news.title}</h3>
                <time>{news.date}</time>
                <p className="news-excerpt">{news.excerpt}</p>

                {expandedNews === news.id ? (
                  <div className="news-full-content">
                    {news.content}
                    <button
                      className="news-toggle"
                      onClick={() => setExpandedNews(null)}
                    >
                      Ver menos
                    </button>
                  </div>
                ) : (
                  <button
                    className="news-toggle"
                    onClick={() => setExpandedNews(news.id)}
                  >
                    Leer más
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Novedades;
