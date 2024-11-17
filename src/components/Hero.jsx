import appstoreLight from "../assets/appstore-light.svg";
import appstoreDark from "../assets/appstore-dark.svg";
import googleplayLight from "../assets/googleplay-light.svg";
import googleplayDark from "../assets/googleplay-dark.svg";
import chevronLight from "../assets/down-arrow-light.svg";
import chevronDark from "../assets/down-arrow-dark.svg";
import phoneLeft from "../assets/phone-hero-1.svg";
import phoneRight from "../assets/phone-hero-2.svg";
import { useDarkMode } from "../context/DarkModeContext";

function Hero() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="section-hero">
      <div className="wrapper">
        <h1 className="h1">
          <span>Manage All Your</span> Money in One App
        </h1>
        <div className="container">
          <p className="paragraph paragraph--large">
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="link-container">
            <a
              className="btn-download"
              href="https://www.apple.com/app-store/"
              target="_blank"
            >
              <img
                className="icon-appstore"
                src={isDarkMode ? appstoreDark : appstoreLight}
                alt="appstore"
              />
            </a>
            <a
              className="btn-download"
              href="https://play.google.com/store/apps"
              target="_blank"
            >
              <img
                className="icon-googleplay"
                src={isDarkMode ? googleplayDark : googleplayLight}
                alt="googleplay"
              />
            </a>
          </div>
          <div className="button-container">
            <a className="btn-circle btn-circle--large" href="#app-features">
              <img
                src={isDarkMode ? chevronDark : chevronLight}
                alt="arrow pointing down"
              />
            </a>
            <p className="paragraph paragraph--small">Discover more</p>
          </div>
        </div>
        <div className="image-container">
          <img className="phone-back" src={phoneLeft} alt="" />
          <img className="phone-front" src={phoneRight} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
