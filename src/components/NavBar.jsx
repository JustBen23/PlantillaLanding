import { NavLink, Link } from "react-router-dom";

import "../styles/NavBar.css";
import { Fragment, useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    < >
      <nav className={fix ? "navBar_fixed" : ""}>
        <Link to="/">
          <span>Logo</span>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
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
            <NavLink to="/Not_found">Error</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
