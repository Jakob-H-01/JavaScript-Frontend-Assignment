import logo from "../assets/logo.svg";
import icon from "../assets/icon-l.svg";
import hamburgerLight from "../assets/hamburger-menu-light.svg";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <a className="logo" href="#">
          <img src={logo} alt="silicon logo" />
          Silicon
        </a>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#app-features" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
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
