import checkCircle from "../assets/check-circle.svg";
import arrow from "../assets/arrow-white.svg";
import graph from "../assets/graph.svg";
import creditCard from "../assets/credit-card.svg";
import wallet from "../assets/wallet.svg";
import contacts from "../assets/contacts.svg";

function Features() {
  return (
    <section className="section-features">
      <div className="wrapper">
        <div className="row">
          <div className="info-box">
            <h2 className="h3">Make your money transfer simple and clear</h2>
            <div className="bullet-points">
              <div className="bullet-point">
                <img src={checkCircle} alt="" />
                <p className="paragraph paragraph--medium">
                  Banking transactions are free for you
                </p>
              </div>
              <div className="bullet-point">
                <img src={checkCircle} alt="" />
                <p className="paragraph paragraph--medium">
                  No monthly cash commission
                </p>
              </div>
              <div className="bullet-point">
                <img src={checkCircle} alt="" />
                <p className="paragraph paragraph--medium">
                  Manage payments and transactions online
                </p>
              </div>
            </div>
            <button className="btn-primary btn-primary--medium">
              Learn More
              <img src={arrow} alt="" />
            </button>
          </div>
          <img src={graph} alt="" />
        </div>
        <div className="row">
          <img src={contacts} alt="" />
          <div className="info-box">
            <h2 className="h3">
              Receive payment from international bank details
            </h2>
            <div className="features">
              <div className="feature">
                <div className="icon-box">
                  <img className="icon" src={creditCard} alt="credit-card" />
                </div>
                <p className="paragraph paragraph--medium">
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>
              <div className="feature">
                <div className="icon-box">
                  <img className="icon" src={wallet} alt="wallet" />
                </div>
                <p className="paragraph paragraph--medium">
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <button className="btn-primary btn-primary--medium">
              Learn More
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
