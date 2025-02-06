import { NavLink, Link } from "react-router-dom";
import { Button } from "./Button";
import { useState, useEffect } from "react";

import "../styles/NavBar.css";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const [pButton, setPButton] = useState(true);

  const HandleMenu = () => setMenuOpen(!menuOpen);
  const CloseMobileMenu = () => setMenuOpen(false);

  window.addEventListener("scroll", () =>
    window.scrollY > 0 ? setFix(true) : setFix(false)
  );

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setPButton(false);
    } else {
      setPButton(true);
    }
  };

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={fix ? "navBar_fixed" : ""}>
        <Link to="/" onClick={CloseMobileMenu}>
          <span>Logo</span>
        </Link>
        <div className="menu-buttton" onClick={HandleMenu}>
          <i class={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
        <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={CloseMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Sobre_mi"
              className="nav-links"
              onClick={CloseMobileMenu}
            >
              Sobre mí
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Portafolio"
              className="nav-links"
              onClick={CloseMobileMenu}
            >
              Portafolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Contacto"
              className="nav-links-mobile"
              onClick={CloseMobileMenu}
            >
              Contacto
            </NavLink>
          </li>
          {pButton && <Button btnStyle="btn--primary" btnSize=".btn--medium">Contacto</Button>}
        </ul>
      </nav>
    </>
  );
};
