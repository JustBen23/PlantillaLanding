import { NavLink, Link } from "react-router-dom";

import "../styles/NavBar.css";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/">
          <span>Logo</span>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open": ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pagina1">Acerca de</NavLink>
          </li>
          <li>
            <NavLink to="/pagina2">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/55782">Error</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
