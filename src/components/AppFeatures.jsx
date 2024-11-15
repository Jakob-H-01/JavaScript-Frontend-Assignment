import logo1 from "../assets/logoipsum.svg";
import logo2 from "../assets/logoipsum-2.svg";
import logo3 from "../assets/logoipsum-3.svg";
import logo4 from "../assets/logoipsum-4.svg";
import logo5 from "../assets/logoipsum-5.svg";
import logo6 from "../assets/logoipsum-6.svg";
import phone from "../assets/phone-1.svg";
import creditCard from "../assets/credit-card.svg";
import shield from "../assets/shield.svg";
import barsGraphic from "../assets/bars-graphic.svg";
import communication from "../assets/communication.svg";
import wallet from "../assets/wallet.svg";
import happy from "../assets/happy.svg";

function AppFeatures() {
  return (
    <section className="section-app-features" id="app-features">
      <div className="wrapper">
        <div className="logos">
          <div className="container">
            <img className="logo" src={logo1} alt="logo" />
          </div>
          <div className="container">
            <img className="logo" src={logo2} alt="logo" />
          </div>
          <div className="container">
            <img className="logo" src={logo3} alt="logo" />
          </div>
          <div className="container">
            <img className="logo" src={logo4} alt="logo" />
          </div>
          <div className="container">
            <img className="logo" src={logo5} alt="logo" />
          </div>
          <div className="container">
            <img className="logo" src={logo6} alt="logo" />
          </div>
        </div>
        <div className="inner-container">
          <img className="phone" src={phone} alt="phone" />
          <div className="features">
            <div className="features-lead">
              <h2 className="h2">App Features</h2>
              <p className="paragraph paragraph--large paragraph--light-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                volutpat mollis egestas. Nam luctus facilisis ultrices.
                Pellentesque volutpat ligula est. Mattis fermentum, at nec
                lacus.
              </p>
            </div>
            <div className="features-items">
              <div className="features-row">
                <div className="features-item">
                  <div className="icon-box">
                    <img className="icon" src={creditCard} alt="credit-card" />
                  </div>
                  <div className="features-text">
                    <h3 className="h5">Easy Payments</h3>
                    <p className="paragraph paragraph--medium">
                      Id mollis consectetur congue egestas egestas suspendisse
                      blandit justo.
                    </p>
                  </div>
                </div>
                <div className="features-item">
                  <div className="icon-box">
                    <img className="icon" src={shield} alt="shield" />
                  </div>
                  <div className="features-text">
                    <h3 className="h5">Data Security</h3>
                    <p className="paragraph paragraph--medium">
                      Augue pulvinar justo, fermentum fames aliquam accumsan
                      vestibulum non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-row">
                <div className="features-item">
                  <div className="icon-box">
                    <img
                      className="icon"
                      src={barsGraphic}
                      alt="bars-graphic"
                    />
                  </div>
                  <div className="features-text">
                    <h3 className="h5">Cost Statistics</h3>
                    <p className="paragraph paragraph--medium">
                      Mattis urna ultricies non amet, purus in auctor non. Odio
                      vulputate ac nibh.
                    </p>
                  </div>
                </div>
                <div className="features-item">
                  <div className="icon-box">
                    <img
                      className="icon"
                      src={communication}
                      alt="communication"
                    />
                  </div>
                  <div className="features-text">
                    <h3 className="h5">Support 24/7</h3>
                    <p className="paragraph paragraph--medium">
                      A elementum, imperdiet enim, pretium etiam facilisi in
                      aenean quam mauris.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-row">
                <div className="features-item">
                  <div className="icon-box">
                    <img className="icon" src={wallet} alt="wallet" />
                  </div>
                  <div className="features-text">
                    <h3 className="h5">Regular Cashback</h3>
                    <p className="paragraph paragraph--medium">
                      Sit facilisis dolor arcu, fermentum vestibulum arcu
                      elementum imperdiet eleifend.
                    </p>
                  </div>
                </div>
                <div className="features-item">
                  <div className="icon-box">
                    <img className="icon" src={happy} alt="happy" />
                  </div>
                  <div className="features-text">
                    <h3 className="h5">Top Standards</h3>
                    <p className="paragraph paragraph--medium">
                      Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                      risus id. Sit facilisis dolor arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFeatures;
