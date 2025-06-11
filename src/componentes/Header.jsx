import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsList, BsHouseDoor, BsImages, BsCameraFill, BsFillPersonLinesFill, BsStarFill, BsCalendarEvent, BsListTask } from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Enlaces para panel público
  const publicLinks = [
    { path: "/", icon: <BsHouseDoor />, label: "Inicio" },
  
    { path: "/contribuciones", icon: <BsCameraFill />, label: "Contribuciones" },
       { path: "/puntuaciones", icon: <BsStarFill />, label: "Puntuaciones" },
    { path: "/codigo-vestimenta", icon: <BsFillPersonLinesFill />, label: "Estetica" },
        { path: "/tareas-banda", icon: <BsListTask />, label: "Tareas" },
     { path: "/proximo-show", icon: <BsCalendarEvent />, label: "Shows" }
  ];

  return (
    <header className="app-header">
      <div className="header-decoration-top"></div>
      <Navbar expand="lg" className="header-navbar">
        <Container className="header-container">
          <Navbar.Brand as={Link} to="/" className="header-logo">
            <img
              src="/img/02-logos/logo-coordinandoproyectos.png"
              alt="Logo Coordinando Proyectos"
              className="logo-image"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggleMobileMenu}
            className="menu-toggle"
          >
            <BsList className="menu-icon" />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}
          >
            <Nav className="nav-links">
              {publicLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-label">{link.label}</span>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-decoration-bottom"></div>
    </header>
  );
};

export default Header;
