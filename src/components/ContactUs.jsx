import arrowPrimary from "../assets/arrow-purple.svg";
import envelope from "../assets/bx-envelope.svg";
import addGroup from "../assets/add-group.svg";
import Breadcrumbs from "./Breadcrumbs";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <>
      <section className="section-contact" id="contact">
        <div className="wrapper">
          <Breadcrumbs />
          <div className="inner-container">
            <div className="container">
              <h1 className="h2">Contact Us</h1>
              <div className="contact-boxes">
                <div className="contact-box">
                  <div className="circle-icon-box">
                    <img src={envelope} alt="" />
                  </div>
                  <div className="content">
                    <h2 className="h4">Email us</h2>
                    <p className="paragraph paragraph--medium">
                      Please feel free to drop us a line. We will respond as
                      soon as possible.
                    </p>
                    <a
                      href="#"
                      className="btn-contact btn-contact--primary btn-contact--large"
                    >
                      Leave a message
                      <img src={arrowPrimary} alt="arrow" />
                    </a>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="circle-icon-box">
                    <img src={addGroup} alt="" />
                  </div>
                  <div className="content">
                    <h2 className="h4">Careers</h2>
                    <p className="paragraph paragraph--medium">
                      Sit ac ipsum leo lorem magna nunc mattis maecenas non
                      vestibulum.
                    </p>
                    <a
                      href="#"
                      className="btn-contact btn-contact--primary btn-contact--large"
                    >
                      Send an application
                      <img src={arrowPrimary} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
