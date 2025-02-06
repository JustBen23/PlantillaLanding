import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { NavBar } from "./components/NavBar";
import { SobreMi } from "./components/SobreMi";
import { Portafolio } from "./components/Portafolio";
import { Home } from "./components/Home";
import { Contacto } from "./components/Contacto";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Sobre_mi" element={<SobreMi />} />
          <Route path="/Portafolio" element={<Portafolio />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<Contacto />} />
        </Routes>
      </AnimatePresence>
      <footer className="footer">
        <div className="contenedor_footer">
          <p>Yo ando aqui en el fondo haciendo daño</p>
        </div>
      </footer>
    </>
  );
}

export default App;
