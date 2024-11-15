import appstoreLight from "../assets/appstore-light.svg";
import googleplayLight from "../assets/googleplay-light.svg";
import chevronLight from "../assets/down-arrow-light.svg";
import phoneLeft from "../assets/phone-hero-1.svg";
import phoneRight from "../assets/phone-hero-2.svg";

function Hero() {
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
                src={appstoreLight}
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
                src={googleplayLight}
                alt="googleplay"
              />
            </a>
          </div>
          <div className="button-container">
            <a className="btn-circle btn-circle--large" href="#app-features">
              <img src={chevronLight} alt="arrow pointing down" />
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
