import map from "../assets/map.svg";
import mapPin from "../assets/bx-map.svg";
import phone from "../assets/bx-phone-call.svg";
import clock from "../assets/bx-time-five.svg";
import fb from "../assets/bxl-facebook-square.svg";
import fbDark from "../assets/bxl-facebook-square-dark.svg";
import x from "../assets/bxl-twitter.svg";
import xDark from "../assets/bxl-twitter-dark.svg";
import ig from "../assets/bxl-instagram-alt.svg";
import igDark from "../assets/bxl-instagram-alt-dark.svg";
import yt from "../assets/bxl-youtube.svg";
import ytDark from "../assets/bxl-youtube-dark.svg";
import { useDarkMode } from "../context/DarkModeContext";

function Location() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="section-location">
      <div className="wrapper">
        <img className="map" src={map} alt="map" />
        <div className="content">
          <div className="info-boxes">
            <div className="info-box">
              <h2 className="h4">Medical Center 1</h2>
              <div className="info-container">
                <div className="info">
                  <img src={mapPin} alt="purple map pin icon" />
                  <p className="paragraph paragraph--medium">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
                <div className="info">
                  <img src={phone} alt="purple phone icon" />
                  <p className="paragraph paragraph--medium">(406) 555-0120</p>
                </div>
                <div className="info">
                  <img src={clock} alt="purple clock icon" />
                  <p className="paragraph paragraph--medium">
                    <strong>Mon - Fri:</strong> 9:00 am - 22:00 am
                    <br />
                    <strong>Sat - Sun:</strong> 9:00 am - 20:00 am
                  </p>
                </div>
              </div>
            </div>
            <div className="info-box">
              <h2 className="h4">Medical Center 2</h2>
              <div className="info-container">
                <div className="info">
                  <img src={mapPin} alt="purple map pin icon" />
                  <p className="paragraph paragraph--medium">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </p>
                </div>
                <div className="info">
                  <img src={phone} alt="purple phone icon" />
                  <p className="paragraph paragraph--medium">(406) 544-0123</p>
                </div>
                <div className="info">
                  <img src={clock} alt="purple clock icon" />
                  <p className="paragraph paragraph--medium">
                    <strong>Mon - Fri:</strong> 9:00 am - 22:00 am
                    <br />
                    <strong>Sat - Sun:</strong> 9:00 am - 20:00 am
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com" target="_blank">
              <img
                className="icon-box"
                src={isDarkMode ? fbDark : fb}
                alt="facebook icon"
              />
            </a>
            <a href="https://x.com" target="_blank">
              <img
                className="icon-box"
                src={isDarkMode ? xDark : x}
                alt="x icon"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img
                className="icon-box"
                src={isDarkMode ? igDark : ig}
                alt="instagram icon"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img
                className="icon-box"
                src={isDarkMode ? ytDark : yt}
                alt="youtube icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
