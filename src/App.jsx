import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { NavBar } from "./components/NavBar";
import "./App.css";
import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { Home } from "./components/Home";
import { Error404 } from "./components/Error404";

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
          <Route path="/pagina1" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="*" element={<Error404 />} />
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
