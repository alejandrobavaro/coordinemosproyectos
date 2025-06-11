import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

//------------ESTILOS--------------//
import "./assets/scss/_01-General/_AppBodyEstilosGenerales.scss";

//------------COMPONENTES ESTRUCTURA--------------//
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";

//------------RUTAS PÚBLICAS--------------//
import MainHome from "./componentes/MainHome";
import Contacto from "./componentes/Contacto";
import ContactoForm from "./componentes/ContactoForm";
import MainGaleriaHome from "./componentes/MainGaleriaHome";
import Contribuciones from "./componentes/Contribuciones";
import Puntuaciones from "./componentes/Puntuaciones";
import CodigoVestimenta from "./componentes/CodigoVestimenta";
import TareasBanda from "./componentes/TareasBanda";
import ProximoShowContadorDias from "./componentes/ProximoShowContadorDias";

//------------CONTEXTOS--------------//
import { AuthProvider, useAuth } from "./context/AuthContext";

function PrivateRoute({ children, requiredLevel }) {
  const { nivelAcceso } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (nivelAcceso !== requiredLevel) {
      navigate("/", { replace: true });
    }
  }, [nivelAcceso, requiredLevel, navigate]);

  if (nivelAcceso !== requiredLevel) {
    return null;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <div className="app-background"></div>
          <div className="app-frame"></div>
          
          <Header />
          <main className="main-content">
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/inicio" element={<MainHome />} />
                <Route
                  path="/contacto"
                  element={
                    <div className="contacto-container">
                      <Contacto />
                      <ContactoForm />
                    </div>
                  }
                />
                <Route path="/galeria" element={<MainGaleriaHome />} />
                <Route path="/contribuciones" element={<Contribuciones />} />
                <Route path="/puntuaciones" element={<Puntuaciones />} />
                <Route path="/codigo-vestimenta" element={<CodigoVestimenta />} />
                <Route path="/tareas-banda" element={<TareasBanda />} />
                <Route path="/proximo-show" element={<ProximoShowContadorDias />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
          <Footer />
          <MainWhatsappIcon />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;