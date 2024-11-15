import Newsletter from "./Newsletter";
import phoneIcon from "../assets/phone-icon.svg";
import messageIcon from "../assets/message-icon.svg";
import arrowPrimary from "../assets/arrow-purple.svg";
import arrowGreen from "../assets/arrow-green.svg";
import Accordion from "./Accordion";

function Faq() {
  return (
    <section className="section-faq">
      <div className="wrapper">
        <div className="faq-container">
          <div className="faq-lead">
            <h2 className="h3">
              <span>Any questions? </span>
              <span>Check out the FAQs</span>
            </h2>
            <p className="paragraph paragraph--large">
              Still have unanswered questions and need to get in touch?
            </p>
          </div>
          <Accordion />
          <button className="btn-primary btn-primary--medium">
            Contact us now
          </button>
          <div className="contact-boxes">
            <div className="contact-box">
              <img src={phoneIcon} alt="phone icon" />
              <p className="paragraph paragraph--small">
                Still have questions?
              </p>
              <a href="#" className="btn-contact btn-contact--primary">
                Contact us
                <img src={arrowPrimary} alt="arrow" />
              </a>
            </div>
            <div className="contact-box">
              <img src={messageIcon} alt="message icon" />
              <p className="paragraph paragraph--small">
                Don&apos;t like phone calls?
              </p>
              <a href="#" className="btn-contact btn-contact--success">
                Contact us
                <img src={arrowGreen} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </section>
  );
}

export default Faq;
