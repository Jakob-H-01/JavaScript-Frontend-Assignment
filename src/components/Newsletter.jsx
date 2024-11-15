import notification from "../assets/notification.svg";
import mailLight from "../assets/mail-light.svg";

function Newsletter() {
  return (
    <div className="form-container">
      <div className="form-heading">
        <img src={notification} alt="notification" />
        <h2 className="h4">
          Subscribe to our newsletter
          <span className="form-heading-span">
            {" "}
            to stay informed about latest updates
          </span>
        </h2>
      </div>
      <form className="form" noValidate>
        <div className="inner-container">
          <img className="mail" src={mailLight} alt="mail" />
          <input
            size="100"
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="off"
          />
        </div>
        <button className="btn-primary btn-primary--large">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
