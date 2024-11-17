import logo from "../assets/logo.svg";
import icon from "../assets/icon-l.svg";
import hamburgerLight from "../assets/hamburger-menu-light.svg";
import hamburgerDark from "../assets/hamburger-menu-dark.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function handleDesktop(mediaQuery) {
    if (mediaQuery.matches) {
      setIsOpen(false);
    }
  }

  const mediaQueryDesktop = window.matchMedia("(min-width: 1200px)");
  mediaQueryDesktop.addEventListener("change", function () {
    handleDesktop(mediaQueryDesktop);
  });

  return (
    <header className="header">
      <div className="wrapper">
        <Link className="logo" to="/">
          <img src={logo} alt="silicon logo" />
          Silicon
        </Link>
        <nav className="nav">
          <ul className={isOpen ? "mobile-menu" : "nav-links"}>
            <li>
              <HashLink
                onClick={() => setIsOpen(false)}
                to="/#app-features"
                className="nav-link"
              >
                Features
              </HashLink>
            </li>
            <li>
              <Link reloadDocument to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={
                  isOpen ? "nav-link" : "btn-primary btn-primary--small"
                }
                to="/login"
              >
                {!isOpen && <img src={icon} alt="" />}
                Sign in / up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="btn-toggle-container">
          <label
            className="paragraph paragraph--medium paragraph--header"
            htmlFor="dark-mode-toggle"
          >
            Dark Mode
          </label>
          <input
            onChange={toggleDarkMode}
            className="btn-toggle"
            type="checkbox"
            id="dark-mode-toggle"
            checked={isDarkMode ? true : false}
          />
        </div>
        <button onClick={toggleMenu} className="btn-mobile-menu">
          <img
            src={isDarkMode ? hamburgerDark : hamburgerLight}
            alt="mobile menu"
          />
        </button>
        {isOpen && (
          <button onClick={toggleMenu} className="btn-close">
            X
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
