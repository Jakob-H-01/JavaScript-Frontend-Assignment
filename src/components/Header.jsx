import logo from "../assets/logo.svg";
import icon from "../assets/icon-l.svg";
import hamburgerLight from "../assets/hamburger-menu-light.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <Link className="logo" to="/">
          <img src={logo} alt="silicon logo" />
          Silicon
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <HashLink to="/#app-features" className="nav-link">
                Features
              </HashLink>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <a className="btn-primary btn-primary--small" href="#">
                <img src={icon} alt="" />
                Sign in / up
              </a>
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
          <input className="btn-toggle" type="checkbox" id="dark-mode-toggle" />
        </div>
        <button className="btn-mobile-menu">
          <img src={hamburgerLight} alt="mobile menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
